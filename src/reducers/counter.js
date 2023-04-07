const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return state + action.payload;
      case 'DECREMENt':
         return state - number;
   }
};

export default counterReducer;
