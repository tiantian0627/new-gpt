const smoothScroll = function(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
};//平滑功能尚未实现
const links = document.querySelectorAll('.nav-links a');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll(this.getAttribute('href'));
  });
});
const tags = document.querySelectorAll('.tag');

let tagIndex = 0;



// 获取标签元素
const tag1 = document.querySelector('.tag1');
const tag2 = document.querySelector('.tag2');
const tag3 = document.querySelector('.tag3');

// 监听动画结束事件
tag1.addEventListener('animationend', () => {
  tag1.style.opacity = 0;
});

tag2.addEventListener('animationend', () => {
  tag2.style.opacity = 0;
});

tag3.addEventListener('animationend', () => {
  tag3.style.opacity = 0;
});

// 启动动画
tag1.style.animationPlayState = 'running';
tag2.style.animationPlayState = 'running';
tag3.style.animationPlayState = 'running';