/* MINIMAL TEST - mark the page */
(function(){'use strict';
  // Mark that this script ran
  var m = document.createElement('div');
  m.id = 'canvas-script-ran';
  m.style.cssText = 'position:fixed;bottom:0;right:0;background:green;color:white;padding:4px;z-index:9999';
  m.textContent = 'SCRIPT RAN';
  document.body && document.body.appendChild(m);
  
  // Immediately show a message
  alert('Canvas particle script loaded!');
  
  // Try to find and draw on canvas immediately, and retry many times
  function tryDraw() {
    var c = document.getElementById('particleCanvas');
    if (!c) return false;
    var ctx = c.getContext('2d');
    c.width = 900; c.height = 400;
    // draw big green X
    ctx.fillStyle = '#00cc66';
    ctx.fillRect(0, 0, 900, 400);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px sans-serif';
    ctx.fillText('PARTICLE READY', 150, 220);
    return true;
  }
  
  // Immediate check
  if (tryDraw()) return;
  
  // Heavy retry: 100 times, every 300ms
  var n = 0;
  var iv = setInterval(function() {
    n++;
    if (tryDraw()) { clearInterval(iv); }
    else if (n > 100) clearInterval(iv);
  }, 300);
})();