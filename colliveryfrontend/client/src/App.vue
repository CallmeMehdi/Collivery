<template>
  <div>
    <v-app class="pr-0">
      <Header />
      <v-content class="pr-0">
        <!-- the actual page that the router shows-->
        <router-view />
        <!-- my sign up modal that gets rendered on top of the page -->
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>
