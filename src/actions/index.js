/* Sets accounts for initial display. */
export const setAccounts = accounts => {
  return {
    type: 'SET_ACCOUNTS',
    payload: accounts
  }
};

/* Sets transactions for initial display. */
export const setTransactions = transactions => {
  return {
    type: 'SET_TRANSACTIONS',
    payload: transactions
  }
};

/* Deletes account. */
export const deleteAccount = accountId => {
  return {
    type: 'DELETE_ACCOUNT',
    payload: accountId
  }
};

/* Edits account name. */
export const editAccount = (name, accountId) => {
  return {
    type: 'EDIT_ACCOUNT',
    payload: {
      name,
      accountId
    }
  }
};

/* Deposits Money Into Account. */
export const deposit = (amount, accountId) => {
  return {
    type: 'DEPOSIT',
    payload: {
      amount,
      accountId
    }
  }
};

/* Withdraws Money From Account */
export const withdraw = (amount, accountId) => {
  return {
    type: 'WITHDRAW',
    payload: {
      amount,
      accountId
    }
  }
};

/* Creates a new transaction from each deposit. */
export const deposit2 = (transactionId, accountId, amount) => {
  return {
    type: 'DEPOSIT_2',
    payload: {
      transactionId,
      accountId,
      type: "deposit",
      amount,
      name: "Desposited Money Into Account"
    }
  }
};

/* Creates a new transaction from each withdrawl. */
export const withdraw2 = (transactionId, accountId, amount) => {
  return {
    type: 'WITHDRAW_2',
    payload: {
      transactionId,
      accountId,
      type: "withdraw",
      amount,
      name: "Withdrew Money From Account"
    }
  }
};


