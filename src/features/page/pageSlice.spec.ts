import pageReducer, { PageState, setPage } from './pageSlice';

describe('page reducer', () => {
  const initialState: PageState = {
    value: 2,
  };

  it('should handle initial state', () => {
    expect(pageReducer(undefined, { type: 'unknown' })).toEqual({
      value: 1,
    });
  });

  it('should handle setPage', () => {
    const actual = pageReducer(initialState, setPage(10));
    expect(actual.value).toEqual(10);
  });
});
