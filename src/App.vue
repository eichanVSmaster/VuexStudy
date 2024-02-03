<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import UserList from "@/components/UserList.vue"
export default defineComponent({
  name: "app",
  components: {
    UserList,
  },
})
</script>
