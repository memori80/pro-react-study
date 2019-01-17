import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

const BankActions = {
  createAccount() {
		AppDispatcher.dispatch({
			type: bankConstants.CREATED_ACCOUNT,
			amount: 0,
		});
	},

	depositInfoAccount(amount) {
		AppDispatcher.dispatch({
			type: bankConstants.DEPOSITED_INTO_ACCOUNT,
			amount: amount
		});
	},

	withdrawFromAccount(amount) {
		AppDispatcher.dispatch({
			type: bankConstants.WITHDRAW_FROM_ACCOUNT,
			amount: amount
		});
	}
};

export default BankActions;
