import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
  accounts: accountsReducer,
  transactions: transactionsReducer
});