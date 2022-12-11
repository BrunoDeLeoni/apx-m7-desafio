/* Import */
import algoliasearch from 'algoliasearch';

/* Algolia */
const client = algoliasearch(process.env.ALGOLIA_CLIENT, process.env.ALGOLIA_PASS);
const indexAlgolia = client.initIndex(process.env.ALGOLIA_INDEX);

/* Export */
export { indexAlgolia }
