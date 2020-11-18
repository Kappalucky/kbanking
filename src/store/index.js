import Vue from "vue";
import Vuex from "vuex";
import { trxs, accounts, balances } from "@/plugins/transaction_data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: accounts.account,
    transactions: trxs.transaction,
    balances: balances
  },
  mutations: {},
  actions: {},
  getters: {
    userNameInitial: state => state.accounts.account[0].displayedName[0]
  },
  modules: {}
});
