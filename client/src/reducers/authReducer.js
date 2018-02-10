const initialState = {
  authorized: false
};

const authReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch(action.type){
    case 'LOGIN': {
      return Object.assign({}, state, {
        authorized: true,
      })
    }
    case 'LOGOUT':{
      return Object.assign({}, state, {
        authorized: false,
      })
    }
    default: {
      return state;
    }
  }
}

export default authReducer;