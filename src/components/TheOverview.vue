<template>
  <div class="overview border-t">
    <div
      class="flex flex-col md:flex-row mx-auto w-full bg-white shadow rounded p-12"
      v-for="account in accounts"
      :key="account.id"
    >
      <div class="w-full md:w-1/3 p-6 border m-2">
        <div class="flex items-center">
          <div class="ml-3">
            <h5 class="text-gray-800 font-medium text-base">
              {{ account.accountName }}
            </h5>
            <p class="text-gray-600 text-xs font-normal">
              {{ account.accountNumber }}
            </p>
          </div>
        </div>
        <h3 class="text-lg text-gray-800 font-bold mt-5 mb-1">
          Current Balance
        </h3>
        <template v-if="account.currentBalance.amount < 0">
          <p class="text-red-600 text-xl font-normal">
            <span>$</span>
            <span>{{ account.currentBalance.amount }}</span>
            <span class="text-xs text-black">
              {{ account.currentBalance.currency }}</span
            >
          </p>
        </template>
        <template v-else>
          <p class="text-green-600 text-xl font-normal">
            <span>$</span>
            <span>{{ account.currentBalance.amount }}</span>
            <span class="text-xs text-black">
              {{ account.currentBalance.currency }}</span
            >
          </p>
        </template>
        <div class="flex items-center mt-6 w-full">
          <p class="text-gray-600 text-sm font-normal ml-2">
            {{ account.accountType }}
          </p>
          <span>:</span>
          <template v-if="account.accountStatus === 'ACTIVE'">
            <p class="text-green-600 text-sm font-normal ml-2">
              {{ account.accountStatus }}
            </p>
          </template>
          <template v-else>
            <p class="text-red-600 text-sm font-normal ml-2">
              {{ account.accountStatus }}
            </p>
          </template>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 border m-2">
        <div class="flex items-center">
          <div class="ml-3">
            <h5 class="text-gray-800 font-medium text-base">
              {{ account.accountName }}
            </h5>
            <p class="text-gray-600 text-xs font-normal">
              {{ account.accountNumber }}
            </p>
          </div>
        </div>
        <h3 class="text-lg text-gray-800 font-bold mt-5 mb-1">
          Available Balance
        </h3>
        <template v-if="account.availableBalance.amount < 0">
          <p class="text-red-600 text-xl font-normal">
            <span>$</span>
            <span>{{ account.availableBalance.amount }}</span>
            <span class="text-xs text-black">
              {{ account.currentBalance.currency }}</span
            >
          </p>
        </template>
        <template v-else>
          <p class="text-green-600 text-xl font-normal">
            <span>$</span>
            <span>{{ account.availableBalance.amount }}</span>
            <span class="text-xs text-black">
              {{ account.availableBalance.currency }}</span
            >
          </p>
        </template>
        <div class="flex items-center mt-6 w-full">
          <p class="text-gray-600 text-sm font-normal ml-2">
            {{ account.accountType }}
          </p>
          <span>:</span>
          <template v-if="account.accountStatus === 'ACTIVE'">
            <p class="text-green-600 text-sm font-normal ml-2">
              {{ account.accountStatus }}
            </p>
          </template>
          <template v-else>
            <p class="text-red-600 text-sm font-normal ml-2">
              {{ account.accountStatus }}
            </p>
          </template>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex justify-center border m-2">
        <br />
        <div class="flex items-center justify-between">
          <div class="p-1">
            <p class="text-lg text-gray-800 font-bold mt-5 mb-1">
              Income
            </p>
            <h2
              class="text-sm xl:text-lg text-gray-600 font-bold tracking-normal"
            >
              ${{ getIncomeTotal }}
            </h2>
          </div>
          <div class="p-1">
            <p class="text-lg text-gray-800 font-bold mt-5 mb-1">
              Expenses
            </p>
            <h2
              class="text-sm xl:text-lg text-gray-600 font-bold tracking-normal"
            >
              ${{ getExpenseTotal }}
            </h2>
          </div>
          <div class="p-1">
            <p
              class="text-lg text-gray-800 font-bold mt-5 mb-1 tracking-normal"
            >
              Net
            </p>
            <template v-if="netAmount > 0">
              <h2
                class="text-sm xl:text-lg text-green-600 font-bold tracking-normal"
              >
                ${{ netAmount }}
              </h2>
            </template>
            <template v-if="netAmount === 0">
              <h2
                class="text-sm xl:text-lg text-gray-600 font-bold tracking-normal"
              >
                ${{ netAmount }}
              </h2>
            </template>
            <template v-if="netAmount < 0">
              <h2
                class="text-sm xl:text-lg text-red-600 font-bold tracking-normal"
              >
                ${{ netAmount }}
              </h2>
            </template>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "TheOverview",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      accounts: state => state.accounts
    }),
    ...mapGetters(["getIncomeTotal", "getExpenseTotal", "getTransferTotal"]),
    netAmount() {
      return (
        parseFloat(this.getIncomeTotal) -
        (parseFloat(this.getTransferTotal) + parseFloat(this.getExpenseTotal))
      ).toFixed(2);
    }
  }
};
</script>

<style></style>
