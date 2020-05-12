const accountsReducer = (state = [], action) => {
  switch (action.type) {

    case 'SET_ACCOUNTS':
      return action.payload;

    case 'DELETE_ACCOUNT':
      // eslint-disable-next-line
      let accountIndex = state.findIndex(account => account._id == action.payload);
      state.splice(accountIndex, 1);

      return state;

    case 'EDIT_ACCOUNT':
      // eslint-disable-next-line
      let accountIndex2 = state.findIndex(account => account._id == action.payload['accountId']);
      state[accountIndex2]['name'] = action.payload['name'];

      return state;

    case 'DEPOSIT':
      // eslint-disable-next-line
      let accountIndex3 = state.findIndex(account => account._id == action.payload['accountId']);
      var newAmount = parseFloat(state[accountIndex3]['balance']) + parseFloat(action.payload['amount']);
      state[accountIndex3]['balance'] = newAmount.toFixed(2);

      return state;

    case 'WITHDRAW':
      // eslint-disable-next-line
      let accountIndex4 = state.findIndex(account => account._id == action.payload['accountId']);
      var newAmount2 = parseFloat(state[accountIndex4]['balance']) - action.payload['amount']
      state[accountIndex4]['balance'] = newAmount2.toFixed(2);

      return state;

    default:
      return state;
  }
}

export default accountsReducer;