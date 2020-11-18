<template>
  <div class="flex flex-col my-8 mx-auto">
    <div class="-my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="max-w-full divide-y divide-gray-200 table-auto">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  v-for="header in headers"
                  :key="header.id"
                >
                  {{ header }}
                </th>
                <th class="px-6 py-3 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="transaction in transactions" :key="transaction.id">
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div
                      class="flex flex-shrink-0 h-10 w-10 items-center justify-center"
                    >
                      <template
                        v-if="
                          transaction.categoryType === 'EXPENSE' ||
                            transaction.categoryType === 'TRANSFER'
                        "
                      >
                        <font-awesome-icon
                          class="fill-current"
                          style="color:red;"
                          :icon="['fas', 'arrow-down']"
                        />
                      </template>
                      <template
                        v-else-if="transaction.categoryType === 'INCOME'"
                      >
                        <font-awesome-icon
                          class="fill-current"
                          style="color: green;"
                          :icon="['fas', 'arrow-up']"
                        />
                      </template>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ transaction.description.simple }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ transaction.date }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ transaction.category }}
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    <span class="capitalize">{{
                      transaction.categoryType.slice(0, 1)
                    }}</span>
                    <span class="lowercase">{{
                      transaction.categoryType.slice(1)
                    }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
                >
                  <span>$</span>{{ transaction.amount.amount }}
                  <span class="text-xs">{{ transaction.amount.currency }}</span>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >View</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Transactions",
  data() {
    return {
      headers: ["Details", "Category", "Status", "Amount"]
    };
  },
  computed: {
    ...mapState({
      transactions: state => state.transactions
    })
  }
};
</script>

<style></style>
