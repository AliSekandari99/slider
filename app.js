const slides = document.querySelectorAll('.slide');
const nextbtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

function carousel() {
  if (counter < slides.length - 1) {
    nextbtn.style.display = "block";
  } else {
    nextbtn.style.display = "none";
  }

  if (counter > 0) {
    prevBtn.style.display = "block"
  } else if (counter == 0) {
    prevBtn.style.display = "none"
  } else {
    prevBtn.style.display = "none"
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  })
}

nextbtn.addEventListener('click', function () {
  counter++;
  carousel();
})

prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
})
prevBtn.style.display = "none";