require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se a função `fetchItem` é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se quando a função `fetchItem` recebe o item MLB1615760527 como parametro, o fetch é chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se quando a função `fetchItem` recebe o item MLB1615760527 como parametro, é utilizado o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Verifica se quando a função `fetchItem` recebe o item MLB1615760527 como parametro,retorna uma estrtutura igual ao objeto item', async () => {
      expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  it('Verifica se quando a função `fetchItem` não recebe argumento, retorna um erro', async () => {
      const failRequest = await fetchItem();
      expect(failRequest).toEqual(new Error('You must provide an url'));
  });
  });
