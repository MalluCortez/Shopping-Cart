require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se a função `fetchProducts` é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se quando a função `fetchProducts` recebe computador como parametro, o fetch é chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se quando a função `fetchProducts` recebe computador como parametro, a função utiliza o endpoint correto', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Verifica se quando a função `fetchProducts` recebe computador como parametro,retorna uma estrtutura igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Verifica se quando a função `fetchProducts` não recebe argumento, retorna um erro', async () => {
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error ('You must provide an url!'));
  });
});
