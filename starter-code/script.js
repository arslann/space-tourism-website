let data;
let json;

const dots = document.querySelectorAll('.dot');

const title = document.getElementById('textbox_title');
const text = document.getElementById('textbox_text');
const distance = document.getElementById('distance_km');
const time = document.getElementById('distance_time');
const image = document.getElementById('planet_img');

async function loadData() {
  data = await fetch('./data.json');
  json = await data.json();
}

function currentSlide(num) {
  const { destinations, crew, technology } = json;

  const selectedPlanet = destinations[num];

  //toggle active class
  changeActiveClass(num);

  //change title
  title.innerText = selectedPlanet.name;

  //change description
  text.innerText = selectedPlanet.description;

  //change distance and travel time
  distance.innerText = selectedPlanet.distance;
  time.innerText = selectedPlanet.travel;

  //change planet image
  image.src = selectedPlanet.images.webp;
}

function changeActiveClass(num) {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  dots[num].classList.add('active');
}

loadData();
