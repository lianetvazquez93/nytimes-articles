import searchTermReducer, { SearchTermState, setSearchTerm } from './searchTermSlice';

describe('search term reducer', () => {
  const initialState: SearchTermState = {
    term: 'sports',
  };

  it('should handle initial state', () => {
    expect(searchTermReducer(undefined, { type: 'unknown' })).toEqual({
      term: 'weather',
    });
  });

  it('should handle setSearchTerm', () => {
    const actual = searchTermReducer(initialState, setSearchTerm('election'));
    expect(actual.term).toEqual('election');
  });
});
