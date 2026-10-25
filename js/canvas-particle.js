/**
 * Canvas 粒子动画 - requestAnimationFrame 轮询等待 canvas 出现
 */
(function() {
  'use strict';

  function start(canvas) {
    var ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 400;

    var particles = [];
    for (var i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * 900,
        y: Math.random() * 400,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        r: Math.random() * 2.5 + 1.5,
        h: Math.random() * 60 + 200
      });
    }

    var mouseX = -9999;
    var mouseY = -9999;

    canvas.addEventListener('mousemove', function(e) {
      var rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
    });

    canvas.addEventListener('mouseleave', function() {
      mouseX = -9999;
      mouseY = -9999;
    });

    (function anim() {
      ctx.clearRect(0, 0, 900, 400);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var dx = p.x - mouseX;
        var dy = p.y - mouseY;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100 && dist > 0) {
          var force = (100 - dist) / 100 * 3;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 3) {
          p.vx = (p.vx / speed) * 3;
          p.vy = (p.vy / speed) * 3;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -0.8; }
        if (p.x > 900) { p.x = 900; p.vx *= -0.8; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.8; }
        if (p.y > 400) { p.y = 400; p.vy *= -0.8; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 7);
        ctx.fillStyle = 'hsl(' + particles[i].h + ', 70%, 60%)';
        ctx.fill();
      }

      ctx.lineWidth = 0.6;
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var d2 = dx * dx + dy * dy;
          if (d2 < 14400) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'hsla(220, 60%, 70%, ' + ((1 - Math.sqrt(d2) / 120) * 0.5) + ')';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(anim);
    })();
  }

  // 双重轮询：requestAnimationFrame（帧对齐）+ setTimeout 兜底
  (function poll() {
    var canvas = document.getElementById('particleCanvas');
    if (canvas) {
      start(canvas);
    } else {
      requestAnimationFrame(poll);
      setTimeout(poll, 200);
    }
  })();
})();