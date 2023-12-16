
// Set Algolia options
const options = {
  appId: "5W6X0K9ES3",
  apiKey: "256981be0d6a3f638d9ad15bdfa0f43c",
  indexName: "ASindex",
  hitsPerPage: 10,
  routing: true,
};

// Parse options to instantsearch
const search = instantsearch(options);

const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

const search = instantsearch({
  indexName: 'ASindex',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  insights: true,
});

// initialize hits widget
search.addWidget(
  instantsearch.widgets.hits({
    // define container
    container: "#hits",
    // add classes for styling
    cssClasses: {
      root: "Search-hits",
      empty: "Search-hits--empty",
    },
    templates: {
      // call custom hit template
      item: hitTemplate,
      empty: 'Didn’t find any results for the search  <em>"{{query}}"</em>',
    },
  })
);


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <h1>${components.Highlight({ hit, attribute: 'name' })}</h1>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
