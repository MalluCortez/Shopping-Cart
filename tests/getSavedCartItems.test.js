const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se ao executar a função `getSavedCartItems`, o método localStorage.getItem é chamado', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Verifica se quando a função `getSavedCartItems` é chamada, o método localStorage.setItem é chamado com o `cartItems` como parâmetro', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
