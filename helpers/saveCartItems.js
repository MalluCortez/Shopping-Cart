const saveCartItems = (infoProduct) => {
  localStorage.setItem('cartItems', infoProduct);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
