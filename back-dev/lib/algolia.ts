// Import
import algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.ALGOLIA_CLIENT, process.env.ALGOLIA_PASS);
const indexAlgolia = client.initIndex(process.env.ALGOLIA_INDEX);

export { indexAlgolia }
