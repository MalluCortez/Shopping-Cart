require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se a função `fetchProducts` é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se quando a função `fetchProducts` recebe computador como parametro, o fetch é chamado', async () => {
    const fetchProductComputer = await fetchProducts('computador');
    const urlComputer = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCall();
    expect(fetch).toHaveBeenCalledWith(urlComputer);
    expect(fetchProductComputer).toEqual(computadorSearch);
  });

  it('Verifica se quando a função `fetchProducts` não recebe argumento, retorna um erro',async () => {
    expect(await fetchProducts()).toThrow('You must provide an url');
  });
});
