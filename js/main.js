const doodle = document.querySelector('css-doodle');

doodle.addEventListener('click', updateCover);
doodle.addEventListener('mouseover', updateCover);

function updateCover () {
  const doodle = document.querySelector('css-doodle');

  doodle.update();
}

function goTo (id) {
  var tab = document.getElementById('v-tabs-' + id);

  tab.scrollIntoView({ behavior: 'smooth' });
}