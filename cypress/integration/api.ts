import { pokeService } from 'utils/api';

describe('FetchHandler', () => {
  it('should perform GET requests', () => {
    cy.stub(window, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve({ data: 'test' }),
    });

    pokeService.get('/test').then((response) => {
      expect(response).to.deep.equal({ data: 'test' });
    });
  });

  it('should perform POST requests', () => {
    cy.stub(window, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve({ data: 'test' }),
    });

    pokeService.post('/test', { key: 'value' }).then((response) => {
      expect(response).to.deep.equal({ data: 'test' });
    });
  });

  it('should perform PUT requests', () => {
    cy.stub(window, 'fetch').resolves({
      ok: true,
      json: () => Promise.resolve({ data: 'test' }),
    });

    pokeService.put('/test', { key: 'value' }).then((response) => {
      expect(response).to.deep.equal({ data: 'test' });
    });
  });
});
