const search = instantsearch({
  appId: 'QVJBA6E0CO',
  apiKey: '5f0740f24e581bfadd3058de42ed4c68',
  indexName: 'dev_pokemon_char' });


search.addWidget(
instantsearch.widgets.searchBox({
  container: '#search-box',
  placeholder: 'Search for pokemons',
  autofocus: false }));



search.addWidget(
instantsearch.widgets.stats({
  container: '#stats' }));



const hitTemplate = document.getElementById('movie').innerHTML;

search.addWidget(
instantsearch.widgets.hits({
  container: '#hits',
  hitsPerPage: 12,
  templates: {
    item: hitTemplate },

  transformData: hit => {
    hit.stars = [];
    for (var i = 1; i <= 5; ++i) {
      hit.stars.push(i <= hit.rating);
    }
    return hit;
  } }));



search.addWidget(
instantsearch.widgets.pagination({
  container: '#pagination' }));



search.addWidget(
instantsearch.widgets.refinementList({
  container: '#types',
  attributeName: 'types',
  operator: 'and',
  limit: 10 }));



search.addWidget(
instantsearch.widgets.starRating({
  container: '#ratings',
  attributeName: 'rating' }));



search.addWidget(
instantsearch.widgets.rangeSlider({
  container: '#year',
  attributeName: 'year',
  tooltips: {
    format: v => v && v.toLocaleString() } }));




search.start();
