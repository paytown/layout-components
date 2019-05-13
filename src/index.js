const root = document.getElementById('root');

function makeDogs() {
  const template = document.createElement('template');
  template.innerHTML = `
    <ul>
      <li>Spot</li>
      <li>Rover</li>
      <li>Bing</li>
    </ul>
  `;

  return template.content;
}

function loadDogs() {
  const dom = makeDogs();
  root.appendChild(dom);
}

loadDogs();
