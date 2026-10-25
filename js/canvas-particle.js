/**
 * Canvas 粒子动画 - 加密文章解密后自动启动
 * 通过 MutationObserver 检测 canvas 出现（不依赖 HBE 事件）
 */
(function() {
  'use strict';

  const CANVAS_ID = 'particleCanvas';

  function initParticleAnimation() {
    const canvas = document.getElementById(CANVAS_ID);
    if (!canvas) return false;

    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    const W = 900, H = 400;
    canvas.width = W;
    canvas.height = H;

    const COUNT = 120;
    const MAX_DIST = 120;
    const MOUSE_RADIUS = 100;

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

  // ===== 启动策略：四种兜底 =====

  // 1. 立即检查（非加密文章直出）
  if (document.getElementById(CANVAS_ID)) {
    initParticleAnimation();
  }

  // 2. HBE 解密事件
  window.addEventListener('hexo-blog-decrypt', function() {
    requestAnimationFrame(initParticleAnimation);
  });

  // 3. MutationObserver（最可靠：监控 DOM 变化，canvas 一出现就启动）
  var observer = new MutationObserver(function(mutations) {
    if (document.getElementById(CANVAS_ID)) {
      observer.disconnect();
      requestAnimationFrame(initParticleAnimation);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // 4. 轮询兜底（5 秒内每 200ms 检查一次）
  var pollCount = 0;
  var pollTimer = setInterval(function() {
    pollCount++;
    if (document.getElementById(CANVAS_ID)) {
      clearInterval(pollTimer);
      initParticleAnimation();
    } else if (pollCount > 25) {
      clearInterval(pollTimer); // 5 秒后停止轮询
    }
  }, 200);

})();