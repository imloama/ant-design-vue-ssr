<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>count: {{count}}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  }
};
</script>
