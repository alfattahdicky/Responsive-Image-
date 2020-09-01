const displays = document.querySelectorAll('.img img');
const modal  = document.querySelector('.modal');
const caption = document.querySelector('.caption');
const full = document.querySelector('.full-img');

displays.forEach(display => {
  display.addEventListener('click',function(){
    modal.classList.add('open');
    const fullSrc = display.getAttribute('data-original');
    full.src = fullSrc;
    const altText = display.alt;
    caption.textContent = altText;
  })
})

modal.addEventListener('click',(e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
  }
})