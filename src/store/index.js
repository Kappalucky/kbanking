import Vue from "vue";
import Vuex from "vuex";
import { trxs, accounts, balances } from "@/plugins/transaction_data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: accounts.account,
    transactions: trxs.transaction,
    transaction: {},
    balances: balances
  },
  mutations: {
    ADD_TRANSACTION(state, transaction) {
      state.transaction = { ...transaction };
    },
    REMOVE_TRANSACTION(state) {
      state.transaction = {};
    }
  },
  actions: {
    getTransaction({ commit }, id) {
      const query = this.state.transactions.find(
        transaction => transaction.id === id
      );
      commit("ADD_TRANSACTION", query);
    }
  },
  getters: {
    getIncomeTransactions: state =>
      state.transactions.filter(
        transaction => transaction.categoryType === "INCOME"
      ),
    getExpenseTransactions: state =>
      state.transactions.filter(
        transaction => transaction.categoryType === "EXPENSE"
      ),
    getTransferTransactions: state =>
      state.transactions.filter(
        transaction => transaction.categoryType === "TRANSFER"
      ),
    getIncomeTotal: state =>
      state.transactions
        .filter(transaction => transaction.categoryType === "INCOME")
        .reduce((acc, item) => acc + item.amount.amount, 0)
        .toFixed(2),
    getExpenseTotal: state =>
      state.transactions
        .filter(transaction => transaction.categoryType === "EXPENSE")
        .reduce((acc, item) => acc + item.amount.amount, 0)
        .toFixed(2),
    getTransferTotal: state =>
      state.transactions
        .filter(transaction => transaction.categoryType === "TRANSFER")
        .reduce((acc, item) => acc + item.amount.amount, 0)
        .toFixed(2)
  },
  modules: {}
});
