const debounce = (func, wait = 40, immediate = true) => {
    let timeout;
  
    return (...args) => {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
};
  
function checkSlide(e) {
    // console.log(window.scrollY);
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isNotScrolledPast = window.scrollY < imageBottom;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        if(isHalfShown && isNotScrolledPast){
            
            sliderImage.classList.add('.active');
        } else {
            sliderImage.classList.remove('.active');
            
        }   
    })
}

const sliderImages = document.querySelectorAll('.slide-in')
window.addEventListener('scroll', debounce(checkSlide));