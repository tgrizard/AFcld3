
// Set Algolia options
//const options = {
// appId: "5W6X0K9ES3",
// apiKey: "256981be0d6a3f638d9ad15bdfa0f43c",
// indexName: "ASindex",
// hitsPerPage: 10,
// routing: true,
// };

// Parse options to instantsearch
//const search = instantsearch(options);

//const { algoliasearch, instantsearch } = window;

//const searchClient = algoliasearch(
  //'B1G2GM9NG0',
  //'aadef574be1f9252bb48d4ea09b5cfe5'
//);

const search = instantsearch({
  appId: "5W6X0K9ES3",
  apiKey: "256981be0d6a3f638d9ad15bdfa0f43c",
  indexName: 'ASindex',
});

// add widget
const testWidget = instantsearch.widgets.menu({
  container:"#test-widget",
  attributeName:"type"
  templates: {
    header:"type"
    item : "{{ellipsis}}"
  };
  transformData : item=>{
     item.ellipsis = '${item.vale.slice(0,5)} ...';
     return item;
      }
});

search.addWidget(testWidget );
search.start();
console.log(search);
