// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/** 
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const fetchProductsResults = async () => {
  const allInfosProducts = await fetchProducts('computador');
  const allInfosProductsResults = allInfosProducts.results;
  const itensSection = document.querySelector('.items');
  const infoProducts = allInfosProductsResults.map((info) => createProductItemElement(info))
    .forEach((e) => {
      itensSection.appendChild(e);
    });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const cartItemClickListener = (e) => {
  e.target.remove();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const saveLocalStorage = () => {
  const cartItem = document.querySelectorAll('.cart__item');
  const arrayCartItemInfo = [];
  cartItem.forEach((e) => {
    arrayCartItemInfo.push(e.innerText);
  });
  saveCartItems(JSON.stringify(arrayCartItemInfo));
};

const getLocalStorage = () => {
  const cart = document.querySelector('.cart__items');
  const infoCartItems = JSON.parse(getSavedCartItems());
  if (localStorage.getItem('cartItems')) {
  infoCartItems.forEach((e) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = e;
    li.addEventListener('click', cartItemClickListener);
    cart.appendChild(li);
  });
}
};

const itemRequisition = async (event) => {
  const id = event.target.parentNode.firstChild.innerText;
  const fetchItemObj = await fetchItem(id);
  const creatCartItem = createCartItemElement(fetchItemObj);
  const ItemsCart = document.querySelector('.cart__items');
  ItemsCart.appendChild(creatCartItem);
  saveLocalStorage();
};

const addButtomClick = () => {
  const buttom = document.querySelectorAll('.item__add');
  buttom.forEach((e) => {
    e.addEventListener('click', itemRequisition);
  });
};

const creatLocalPrice = () => {
  const cart = document.querySelector('.cart');
  const price = document.createElement('p');
  price.className = 'total-price';
  cart.appendChild(price);
};

const cleanCartItem = () => {
  const cartItens = document.querySelectorAll('.cart__item');
  cartItens.forEach((e) => e.remove());
};

const cleanCart = () => {
  const buttomClean = document.querySelector('.empty-cart');
  buttomClean.addEventListener('click', cleanCartItem);
};

const totalPrice = () => {
  const infoCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const price = (infoCartItems.map((e) => e.split('$'))).map((p) => p[1]);
  const sumPrice = price.reduce((acc, curr) => acc + parseFloat(curr), 0);
  const totalPriceItens = document.querySelector('.total-price');
  totalPriceItens.innerText = sumPrice.toFixed(2);
};

window.onload = async () => {
  await fetchProductsResults();
  addButtomClick();
  getLocalStorage();
  await creatLocalPrice();
  cleanCart();
  totalPrice();
};

if (typeof module !== 'undefined') {
  module.exports = itemRequisition;
}