async function fetchProducts(product) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${product}`);
    const infosProductObj = await response.json();
    console.log(infosProductObj);
  } catch (error) {
    return ('You must provide an url', error);
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');