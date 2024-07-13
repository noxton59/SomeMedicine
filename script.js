document.querySelectorAll(".order-button").forEach(button => {button.addEventListener("click", scrollToItem)});

function scrollToItem() {
  const itemId = "order-block";
  document.querySelector('.scroll-div').style.scrollSnapType = 'none';
  const item = document.getElementById(itemId);
  item.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    document.querySelector('.scroll-div').style.scrollSnapType = 'y mandatory';
  }, 1000); 
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion-header');

  accordionHeader.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.querySelector(".prev").addEventListener("click", () => {plusSlides(-1)});
document.querySelector(".next").addEventListener("click", () => {plusSlides(1)});

document.querySelectorAll(".dot").forEach((dot)=> {
  dot.addEventListener("click", () => {
    const num = Number(dot.dataset.num);
    currentSlide(num);
  })
})

/* timer */
function startTimer(duration) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".timer-div").textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      document.querySelector(".timer-div").textContent = "Потрачено :-(";
      document.querySelector(".timer-div").style.color = "red";
    }
  }, 1000);
}
startTimer(1800);

document.querySelector("#user-name").addEventListener("focus", () => {
  document.querySelector(".name-tip").style.visibility = "visible";
});
document.querySelector("#user-name").addEventListener("blur", () => {
  document.querySelector(".name-tip").style.visibility = "hidden";
});

document.querySelector("#user-phone").addEventListener("focus", () => {
  document.querySelector(".phone-tip").style.visibility = "visible";
  console.log("visible");
});
document.querySelector("#user-phone").addEventListener("blur", () => {
  document.querySelector(".phone-tip").style.visibility = "hidden";
});