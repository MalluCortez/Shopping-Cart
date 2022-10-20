const getSavedCartItems = () => {
const getItem = (localStorage.getItem('cartItems'));
return getItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
