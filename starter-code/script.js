async function loadData() {
  const data = await fetch('./data.json');
  const json = await data.json();
  const { destinations, crew, technology } = json;

  console.log(destinations);
}

loadData();
