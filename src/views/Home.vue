<template>
  <div class="home">
    <TheGreeting />
    <!--<TheOverview />-->
    <!--<Transaction />-->
  </div>
</template>

<script>
// @ is an alias to /src
import TheGreeting from "@/components/TheGreeting.vue";
//import TheOverview from "@/components/TheOverview.vue";
//import Transaction from "@/components/Transaction.vue";

export default {
  name: "Home",
  components: {
    TheGreeting
    //TheOverview
    //Transaction
  }
};
</script>
