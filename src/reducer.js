export const initialState = {
  user: null,
  showSidebar: true,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    default:
      return state;
  }
};

export default reducer;
