<template>
  <div id="wrapper">
    <the-banner></the-banner>
    <!-- Content
================================================== -->
    <the-categories></the-categories>
    <!-- Category Boxes / End -->

    <!-- Fullwidth Section -->
    <the-places></the-places>
    <!-- Fullwidth Section / End -->
    <the-reviews></the-reviews>
    <!-- Info Section -->
    <the-plan></the-plan>
    <!-- Info Section / End -->

    <!-- Recent Blog Posts -->
    <the-blog></the-blog>
    <!-- Recent Blog Posts / End -->

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheCategories from "@/components/TheCategories.vue";
import ThePlaces from "@/components/ThePlaces.vue";
import TheReviews from "@/components/TheReviews.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheBlog from "@/components/TheBlog.vue";
import { useStore } from 'vuex';
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReviews,
    ThePlan,
    TheBlog,
  },
  setup(){
    const store = useStore()
    store.dispatch("auth/loadUserLoginFromLocalStorageAction")
  }
  };
</script>
