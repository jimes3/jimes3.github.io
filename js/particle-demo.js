/**
 * Canvas 粒子互动动画
 * 由加密文章内联脚本提取为独立文件，解决 HBE 解密后脚本不执行的问题
 */
(function() {
  'use strict';

  function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return false;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    // 确保尺寸设置正确
    const W = canvas.width = 900;
    const H = canvas.height = 400;

    const COUNT = 120;
    const MAX_DIST = 120;
    const MOUSE_RADIUS = 100;

    // 生成粒子
    const particles = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        r: Math.random() * 2.5 + 1.5,
        hue: Math.random() * 60 + 200
      });
    }

    let mouseX = -9999, mouseY = -9999;

    canvas.addEventListener('mousemove', function(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseX = (e.clientX - rect.left) * scaleX;
      mouseY = (e.clientY - rect.top) * scaleY;
    });

    canvas.addEventListener('mouseleave', function() {
      mouseX = -9999;
      mouseY = -9999;
    });

    function animate() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 鼠标排斥
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 3;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 3) {
          p.vx = (p.vx / speed) * 3;
          p.vy = (p.vy / speed) * 3;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -0.8; }
        if (p.x > W) { p.x = W; p.vx *= -0.8; }
        if (p.y < 0) { p.y = 0; p.vy *= -0.8; }
        if (p.y > H) { p.y = H; p.vy *= -0.8; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(' + p.hue + ', 70%, 60%)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(' + p.hue + ', 70%, 60%, 0.12)';
        ctx.fill();
      }

      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < MAX_DIST * MAX_DIST) {
            const alpha = 1 - Math.sqrt(dist) / MAX_DIST;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'hsla(220, 60%, 70%, ' + (alpha * 0.5) + ')';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
    return true;
  }

  // 尝试立即初始化
  if (!initParticleCanvas()) {
    // 如果 canvas 还没在 DOM 中，监听 HBE 解密事件
    window.addEventListener('hexo-blog-decrypt', function() {
      // 加一个小延迟确保 DOM 完全更新
      setTimeout(initParticleCanvas, 100);
    });
  }

})();