// 星を生成
const stars = document.querySelector('.stars');

for(let i = 0; i < 120; i++){

  const star = document.createElement('span');
  star.className = 'star';

  const size = Math.random() * 4 + 1;

  star.style.width = size + 'px';
  star.style.height = size + 'px';

  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';

  star.style.animationDuration = (2 + Math.random() * 5) + 's';
  star.style.animationDelay = (Math.random() * 5) + 's';

  stars.appendChild(star);
}

const newsCard = document.querySelector(".glass-news");

let t = 0;

function floatNews() {
  t += 0.01;
  newsCard.style.transform = `translateY(${Math.sin(t) * 6}px)`;
  requestAnimationFrame(floatNews);
}

floatNews();