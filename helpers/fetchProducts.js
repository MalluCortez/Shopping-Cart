const fetchProducts = async (product) => {
  if (!product) return new Error('You must provide an url!');

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const infosProductObj = await response.json();
  console.log(infosProductObj);
  return infosProductObj;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');