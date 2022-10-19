const getSavedCartItems = () => {
const getItem = JSON.stringify(localStorage.getItem('cartItems'));
return getItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
