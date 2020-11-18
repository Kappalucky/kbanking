<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
    <section>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1
          class="text-3xl font-bold leading-tight text-gray-900"
          v-for="account in accounts"
          :key="account.id"
        >
          Welcome Back {{ account.displayedName }}!
        </h1>
        <hr />
        <p class="py-2">
          <span>"{{ quote.text }}"</span>
          <span>- {{ quote.person }}</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheGreeting",
  data() {
    return {
      quotes: [
        {
          text:
            "The price of anything is the amount of life you exchange for it.",
          person: "Henry David Thoreau"
        },
        {
          text: "He who buys what he does not need, steals from himself.",
          person: "Swedish Proverb"
        },
        {
          text: "Never spend your money before you have it.",
          person: "Thomas Jefferson"
        },
        {
          text:
            "You don’t have to see the whole staircase, just take the first step.",
          person: "Martin Luther King, Jr. "
        }
      ],
      quote: {}
    };
  },
  computed: {
    ...mapState({
      accounts: state => state.accounts
    })
  },
  methods: {
    randomQuote() {
      let randomNumber = Math.floor(Math.random() * this.quotes.length);
      this.quote = this.quotes[randomNumber];
    }
  },
  created() {
    this.randomQuote();
  }
};
</script>

<style></style>
