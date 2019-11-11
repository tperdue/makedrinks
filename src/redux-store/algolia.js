import algoliasearch from 'algoliasearch';

const client = algoliasearch('TG51ODQITX', '44a7c2b39d6f78721212adbe8f457353');
export default client.initIndex('drinks');

