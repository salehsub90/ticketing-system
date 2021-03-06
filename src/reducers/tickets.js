const initialState = {
  data: [],
};

const tickets = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TICKET':
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          }
        ]
      };
    default:
      return state;
  }
}

export default tickets;