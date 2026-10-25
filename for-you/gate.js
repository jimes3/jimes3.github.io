'use strict';

const form = document.getElementById('gate-form');
const passphrase = document.getElementById('passphrase');
const status = document.getElementById('gate-status');
const unlock = document.getElementById('unlock');
const toggle = document.getElementById('toggle-password');
let busy = false;

toggle.addEventListener('click', () => {
  const show = passphrase.type === 'password';
  passphrase.type = show ? 'text' : 'password';
  toggle.textContent = show ? '隐藏' : '显示';
  toggle.setAttribute('aria-label', show ? '隐藏暗号' : '显示暗号');
  toggle.setAttribute('aria-pressed', String(show));
});
passphrase.addEventListener('input', () => {
  if (status.dataset.error === 'true') {
    status.dataset.error = 'false';
    passphrase.removeAttribute('aria-invalid');
    status.textContent = '没关系，再轻轻敲一次门。';
  }
});
function decode(value) {
  return Uint8Array.from(atob(value), character => character.charCodeAt(0));
}
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (busy) return;
  const password = passphrase.value.trim();
  if (!password) {
    status.textContent = '先写下小暗号，让这封信找到你。';
    passphrase.focus();
    return;
  }
  busy = true;
  unlock.disabled = true;
  status.dataset.error = 'false';
  status.textContent = '正在把这封小信，轻轻展开……';
  let phase = 'loading';
  let preparedAudio = null;
  let opened = false;
  try {
    if (!window.crypto || !window.crypto.subtle) {
      status.textContent = '请用 HTTPS 链接打开，让这封信安心送达。';
      return;
    }
    // Resume during the unlock gesture; keep silent until the password succeeds.
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (Audio) {
      try {
        preparedAudio = new Audio();
        preparedAudio.resume().catch(() => {});
      } catch (_) { /* Audio is optional; unlocking should always remain available. */ }
    }
    const response = await fetch('./content.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Content unavailable');
    const payload = await response.json();
    const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: decode(payload.salt), iterations: payload.iterations, hash: 'SHA-256' }, material, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    phase = 'decrypting';
    const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: decode(payload.iv) }, key, decode(payload.ciphertext));
    phase = 'opening';
    const content = JSON.parse(new TextDecoder().decode(plaintext));
    const page = new DOMParser().parseFromString(content.html, 'text/html');
    passphrase.value = '';
    document.title = page.title;
    document.body.innerHTML = page.body.innerHTML;
    document.body.classList.add('unlocking');
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.textContent = content.script;
    window.sunnyLetterAudio = preparedAudio;
    document.body.append(script);
    opened = true;
    const heading = document.getElementById('hero-title');
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  } catch (_) {
    status.dataset.error = 'true';
    if (phase === 'decrypting') {
      status.textContent = '暗号好像差了一点点，再试一次？';
      passphrase.setAttribute('aria-invalid', 'true');
      passphrase.focus();
      passphrase.select();
    } else {
      status.textContent = '信还在路上，检查一下网络，再轻轻敲门。';
    }
  } finally {
    if (!opened && preparedAudio) preparedAudio.close().catch(() => {});
    busy = false;
    unlock.disabled = false;
  }
});
