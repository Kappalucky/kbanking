<template>
  <div class="simple-modal" v-show="active">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="modal-panel inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="modal-body bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <slot name="image">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <font-awesome-icon :icon="['fas', 'scroll']" />
                </div>
              </slot>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  <slot name="header">
                    Transaction
                  </slot>
                </h3>
                <div class="mt-2">
                  <slot name="message">
                    Transactions Will show here.
                  </slot>
                </div>
              </div>
            </div>
          </div>
          <slot name="actions">
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <span
                class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
              >
                <button
                  type="button"
                  @click="clicked()"
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Close
                </button>
              </span>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  components: {},
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    clicked() {
      this.$emit("toggle-modal");
    }
  }
};
</script>

<style></style>
