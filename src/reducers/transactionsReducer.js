const transactionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return action.payload;

    case 'DEPOSIT_2':
      // eslint-disable-next-line
      let accountIndex = state.findIndex(account => account._id == action.payload['accountId']);

      var newTransaction = {
        "_id": action.payload['transactionId'],
        "accountId": accountIndex + 1,
        "type": action.payload['type'],
        "amount": action.payload['amount'],
        "name": action.payload['name']
      }

      state.push(newTransaction);

      return state;

    case 'WITHDRAW_2':
      // eslint-disable-next-line
      let accountIndex2 = state.findIndex(account => account._id == action.payload['accountId']);

      var newTransaction2 = {
        "_id": action.payload['transactionId'],
        "accountId": accountIndex2 + 1,
        "type": action.payload['type'],
        "amount": action.payload['amount'],
        "name": action.payload['name']
      }

      state.push(newTransaction2);

      return state;

    default:
      return state;
  }
}

export default transactionsReducer;