const getSavedCartItems = () => {
JSON.stringify(localStorage.getItem('cartItems'));
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
