import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY: {
      console.log(action.payload);
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    }
    case HANDLE_SEARCH: {
      return { ...state, query: action.payload, page: 0 };
    }
    case HANDLE_PAGE: {
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        nextPage = nextPage > state.nbPages - 1 ? 0 : nextPage;
        return { ...state, page: nextPage };
      }
      if (action.payload === 'dec') {
        let nextPage = state.page - 1;
        nextPage = nextPage < 0 ? state.nbPages - 1 : nextPage;
        return { ...state, page: nextPage };
      }
    }
    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
export default reducer;
