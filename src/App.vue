<template>
  <div id="app">
    <p><button v-on:click="increment">UP</button></p>
    <h1>Count:{{ count }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "app",
  methods: {
    increment() {
      this.$store.dispatch("incrementOne")
    },
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
})
</script>
