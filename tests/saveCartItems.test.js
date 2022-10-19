const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se quando a função `saveCartItems` recebe `cartItem` como parametro, o método localStorage.setItem é chamado', async () => {
    await saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verifica se quando a função `saveCartItems` recebe `cartItem` como parametro, o método localStorage.setItem é chamado', async () => {
    const cartItem = 'Informações do produto';
    await saveCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalledWith('Product', cartItem);
  });
});
