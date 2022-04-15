function goTo(id) {
  var tab = document.getElementById('v-tabs-' + id);

  tab.scrollIntoView({ behavior: 'smooth' });
}
