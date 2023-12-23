import axios from "axios";

export function storeExpense(expenseData) {
axios.post('https://react-native-2e0c7-default-rtdb.firebaseio.com/expenses.json')
expenseData
}