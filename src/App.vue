<template>
  <div class="app">
    <router-view />
    <Menu />
    <PageLoading />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import PageLoading from "@/components/Page-Loading.vue";
export default {
  components: {
    Menu,
    PageLoading,
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".page_loading").classList.add("no_loading");
    }, 2000);
  },
};
</script>
