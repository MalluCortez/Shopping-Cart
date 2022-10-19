const saveCartItems = (cartItem) => {
  localStorage.setItem('Product', cartItem);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
