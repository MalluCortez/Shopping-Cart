const fetchItem = async (item) => {
  if (!item) return new Error('You must provide an url');

  const response = await fetch(`https://api.mercadolibre.com/items/${item}`);
  const infosItemObj = await response.json();
  console.log(infosItemObj);
  return infosItemObj;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

fetchItem('MLB1615760527');