'use strict';

// Personalize the letter and everyday moments in index.html; star and wish text lives here.
const notes = [
  '有些相遇，让平常的一天有了名字。',
  '看到有趣的东西时，会想：要是你也在就好了。',
  '日子还长，想慢慢认识更多一点的你。'
];
const wishes = {
  sea: ['01', '去海边，浪费一个下午。', '不必追赶日落。吹吹风，踩踩水，\n再把口袋里最好看的贝壳送给你。'],
  rain: ['02', '下雨天，就一起待在窗边。', '一杯热茶，一首喜欢的歌。\n你讲你的今天，我认真听。'],
  winter: ['03', '天冷的时候，分享一点暖。', '捧着热乎乎的奶茶，走过亮着灯的街。\n再一起商量，晚饭吃什么。']
};
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function scrollToElement(element) {
  element.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' });
}

const letter = document.getElementById('letter');
const openLetter = document.getElementById('open-letter');
openLetter.setAttribute('aria-expanded', 'false');
openLetter.setAttribute('aria-controls', 'letter');
openLetter.addEventListener('click', () => {
  letter.hidden = false;
  openLetter.setAttribute('aria-expanded', 'true');
  scrollToElement(letter);
  document.getElementById('close-letter').focus({ preventScroll: true });
});
document.getElementById('close-letter').addEventListener('click', () => {
  letter.hidden = true;
  openLetter.setAttribute('aria-expanded', 'false');
  openLetter.focus({ preventScroll: true });
  scrollToElement(openLetter);
});

const litStars = new Set();
document.querySelectorAll('[data-note]').forEach(button => {
  button.addEventListener('click', () => {
    const index = Number(button.dataset.note);
    litStars.add(index);
    button.setAttribute('aria-pressed', 'true');
    button.querySelector('span').textContent = '✦';
    document.getElementById('star-note').textContent = notes[index];
    const remaining = notes.length - litStars.size;
    document.getElementById('star-count').textContent = remaining ? `还有 ${remaining} 颗小心情，等你发现` : '你看，属于这里的小星空，亮起来了。';
  });
});

document.querySelectorAll('[data-wish]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-wish]').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-pressed', String(selected));
    });
    const [number, title, description] = wishes[button.dataset.wish];
    document.getElementById('wish-card').dataset.scene = button.dataset.wish;
    document.getElementById('wish-label').textContent = `WISH NO. ${number}`;
    document.getElementById('wish-title').textContent = title;
    const paragraph = document.getElementById('wish-description');
    paragraph.replaceChildren();
    description.split('\n').forEach((line, index) => {
      if (index) paragraph.append(document.createElement('br'));
      paragraph.append(document.createTextNode(line));
    });
  });
});

const plant = document.getElementById('plant');
const plantKey = 'for-you-flower-v1';
function showFlower() {
  plant.classList.add('planted');
  plant.disabled = true;
  plant.setAttribute('aria-label', '小花已经种下了');
  document.getElementById('plant-label').textContent = '我们的小花，正在好好长大';
  document.getElementById('garden-message').textContent = '愿每一次相见，都比上一次多一点喜欢。';
}
try {
  if (localStorage.getItem(plantKey)) showFlower();
} catch (_) { /* The flower still works when browser storage is unavailable. */ }
plant.addEventListener('click', () => {
  showFlower();
  try { localStorage.setItem(plantKey, 'planted'); } catch (_) { /* Session-only flower. */ }
});

// A quiet, original music-box phrase. Audio starts only after a deliberate tap.
let audioContext;
let musicTimer;
let playing = false;
const soundButton = document.getElementById('sound');
const phrase = [261.63, 329.63, 392, 523.25, 440, 392, 329.63, 293.66, 261.63, 329.63, 392, 440, 392, 329.63, 293.66, 261.63];
function playPhrase() {
  const start = audioContext.currentTime + .1;
  phrase.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();
    const time = start + index * .65;
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    volume.gain.setValueAtTime(0, time);
    volume.gain.linearRampToValueAtTime(.055, time + .025);
    volume.gain.exponentialRampToValueAtTime(.0001, time + 1.8);
    oscillator.connect(volume);
    volume.connect(audioContext.destination);
    oscillator.start(time);
    oscillator.stop(time + 1.9);
    oscillator.onended = () => { oscillator.disconnect(); volume.disconnect(); };
  });
}
async function stopMusic() {
  playing = false;
  clearInterval(musicTimer);
  soundButton.setAttribute('aria-pressed', 'false');
  soundButton.setAttribute('aria-label', '开启轻柔旋律');
  document.getElementById('sound-label').textContent = '听听晴天';
  if (audioContext) {
    const previousContext = audioContext;
    audioContext = null;
    await previousContext.close();
  }
}
soundButton.addEventListener('click', async () => {
  soundButton.disabled = true;
  try {
    if (playing) {
      await stopMusic();
    } else {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error('Audio unavailable');
      audioContext = new Audio();
      await audioContext.resume();
      if (document.hidden) { await stopMusic(); return; }
      playing = true;
      playPhrase();
      musicTimer = setInterval(playPhrase, 12400);
      soundButton.setAttribute('aria-pressed', 'true');
      soundButton.setAttribute('aria-label', '暂停轻柔旋律');
      document.getElementById('sound-label').textContent = '旋律播放中';
    }
  } catch (_) {
    await stopMusic();
    document.getElementById('sound-label').textContent = '暂时听不到，稍后再试';
  } finally {
    soundButton.disabled = false;
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && playing) stopMusic();
});
