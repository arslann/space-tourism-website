let data;
let json;

const dots = document.querySelectorAll('.dot');

const title = document.getElementById('descriptionTitle');
const text = document.getElementById('description');
const distance = document.getElementById('distance_km');
const time = document.getElementById('distance_time');
const image = document.getElementById('img');
const role = document.getElementById('role');

async function loadData() {
  data = await fetch('./data.json');
  json = await data.json();
}

function currentSlide(num, slide) {
  const { destinations, crew, technology } = json;
  let selectedSlide;

  switch (slide) {
    case 'crew':
      selectedSlide = crew;
      break;
    case 'destination':
      selectedSlide = destinations;
      break;
    case 'technology':
      selectedSlide = technology;
      break;

    default:
      break;
  }

  //toggle active class
  changeActiveClass(num);
  console.log(selectedSlide);
  //change title
  title.innerText = selectedSlide[num].name;

  //change description
  text.innerText = selectedSlide[num].description;

  //change role
  role.innerText = selectedSlide[num].role;

  //change planet image
  image.src = selectedSlide[num].images.webp;

  //change distance and travel time

  if (distance && time) {
    distance.innerText = selectedSlide[num].distance;
    time.innerText = selectedSlide[num].travel;
  }
}

function changeActiveClass(num) {
  dots.forEach((dot) => {
    dot.classList.remove('active');
    dot.classList.remove('selectedSlide');
  });

  dots[num].classList.add('active');
  dots[num].classList.add('selectedSlide');
}

loadData();
