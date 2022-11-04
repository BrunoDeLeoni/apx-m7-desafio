// Import
import algoliasearch from 'algoliasearch';

const client = algoliasearch('0Q7XPURNAB', '364b617ac1f3d60dd9dd9550e514ef4a');
const indexAlgolia = client.initIndex('m7-desafio');

export { indexAlgolia }
