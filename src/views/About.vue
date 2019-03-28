<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>count: {{count}}</h2>
    <a-button type="primary" @click="Increase">按钮</a-button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    ...mapActions(["Increase"])
  }
};
</script>

