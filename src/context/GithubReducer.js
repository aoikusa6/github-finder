const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CLEAR_USERS": {
      return {
        ...state,
        users: [],
        repos: []
      };
    }
    case "GET_USER": {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    }
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.items,
        usersCount: action.payload.total_count,
        isLoading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        isLoading: false
      };
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case "LAST_PAGE":
      return {
        ...state,
        currentPage: Math.ceil(state.usersCount / state.usersPerPage),
      };
    case "FIRST_PAGE":
      return {
        ...state,
        currentPage: 1,
      };

    default:
      return state;
  }
};

export default githubReducer;
