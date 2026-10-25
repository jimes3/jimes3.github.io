/**
 * Canvas 粒子动画 - 最小化测试版
 * 仅依赖 MutationObserver 检测 canvas 出现
 */
(function() {
  'use strict';
  function start() {
    var c = document.getElementById('particleCanvas');
    if (!c) return;
    var ctx = c.getContext('2d');
    c.width = 900; c.height = 400;
    
    // 先画一个测试矩形确认 canvas 正常工作
    ctx.fillStyle = '#2f4154';
    ctx.fillRect(0, 0, 900, 400);
    
    // 画粒子
    var pts = [];
    for (var i = 0; i < 120; i++) {
      pts.push({
        x: Math.random() * 900, y: Math.random() * 400,
        vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2,
        r: Math.random() * 2.5 + 1.5, hue: Math.random() * 60 + 200
      });
    }
    
    var mx = -9999, my = -9999;
    c.addEventListener('mousemove', function(e) {
      var r = c.getBoundingClientRect();
      mx = (e.clientX - r.left) * (c.width / r.width);
      my = (e.clientY - r.top) * (c.height / r.height);
    });
    c.addEventListener('mouseleave', function() { mx = -9999; my = -9999; });
    
    function anim() {
      ctx.clearRect(0, 0, 900, 400);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        var dx = p.x - mx, dy = p.y - my;
        var d = Math.sqrt(dx*dx + dy*dy);
        if (d < 100 && d > 0) {
          var f = (100 - d) / 100 * 3;
          p.vx += (dx/d) * f; p.vy += (dy/d) * f;
        }
        var sp = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
        if (sp > 3) { p.vx = p.vx/sp*3; p.vy = p.vy/sp*3; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -0.8; }
        if (p.x > 900) { p.x = 900; p.vx *= -0.8; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.8; }
        if (p.y > 400) { p.y = 400; p.vy *= -0.8; }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 7);
        ctx.fillStyle = 'hsl(' + p.hue + ',70%,60%)';
        ctx.fill();
      }
      // 连线
      ctx.lineWidth = 0.6;
      for (var i = 0; i < pts.length; i++) {
        for (var j = i+1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          var d2 = dx*dx + dy*dy;
          if (d2 < 14400) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = 'hsla(220,60%,70%,' + ((1 - Math.sqrt(d2)/120) * 0.5) + ')';
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(anim);
    }
    
    anim();
  }
  
  // MutationObserver
  if (document.getElementById('particleCanvas')) { start(); }
  else {
    var obs = new MutationObserver(function() {
      if (document.getElementById('particleCanvas')) {
        obs.disconnect();
        start();
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    // 轮询兜底
    var iv = setInterval(function() {
      if (document.getElementById('particleCanvas')) {
        clearInterval(iv);
        start();
      }
    }, 200);
  }
})();