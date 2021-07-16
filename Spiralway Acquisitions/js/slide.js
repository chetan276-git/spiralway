let butoon_cybersecurity = document.getElementById('cybersecurity');
let body = document.getElementsByTagName('body');

butoon_cybersecurity.addEventListener('click', (event) => {
  event.preventDefault();
  let sliderslide = document.querySelector('.slider');
  sliderslide.classList.add('slider-active');
});
document.querySelector('.close-ico').addEventListener('click', () => {
  let sliderslide = document.querySelector('.slider');
  sliderslide.classList.remove('slider-active');
});

let healthcare = document.getElementById('healthcare');

healthcare.addEventListener('click', (event) => {
  event.preventDefault();
  let sliderslide = document.querySelector('.healthcare');
  sliderslide.classList.add('slider-active');
});
document.querySelector('.health-ico').addEventListener('click', () => {
  let sliderslide = document.querySelector('.healthcare');
  sliderslide.classList.remove('slider-active');
});
