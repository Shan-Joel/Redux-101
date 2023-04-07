const isLoggedInReducer = (state = false, action) => {
   switch (state.type) {
      case 'SIGN_IN':
         return !state;
      default:
         return state;
   }
};

export default isLoggedInReducer;
