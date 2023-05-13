<template>
  <the-header></the-header>
  <router-view />
  <the-footer></the-footer>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { useStore } from 'vuex';
//import LearningSCSS from './components/LearningSCSS.vue';
export default {
  components: {
    TheHeader,
    TheFooter,
    //   LearningSCSS
  },
  setup(){
    const store = useStore()
    store.dispatch("auth/loadUserLoginFromLocalStorageAction")
  }
};
</script>

<style lang="scss"></style>
