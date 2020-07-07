<template>
  <v-row align-content="center" class="fill-height" justify="start">
    <v-col class=" mt-n12 customposition" cols=" 12 " md="6" justify="start">
      <h1 class=" HeadingText mt-n12 pt-0">
        Collivery
      </h1>
      <h1 class="text-left Subtext ">
        Cheap cost efficient Delivery solution for customers
        <br />
        Easy way to make some cash while comuting for frequent travelers
      </h1>
      <v-row class="mt-6 ml-0">
        <v-btn class="btnHome1 " color="#CBA882" to="AllApplicationsPage">
          DELIVER
        </v-btn>
        <h1 class="px-12 ">OR</h1>
        <v-btn
          class="btnHome2 "
          color="#D9585C"
          :to="$store.state.currentUser !== undefined ? 'FormPage' : '/'"
        >
          RECEIVE
        </v-btn>
      </v-row>
    </v-col>
    <v-col
      align-self="center"
      class="text-center  d-none d-md-flex "
      cols=" 12 "
      md="6"
    >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomePageBanner",
  data() {
    return {};
  },
};
</script>

<style scoped>
.HeadingText {
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 120px;
  color: #000000;
}

.Subtext {
  font-family: Quicksand;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 18px !important;
  line-height: 22px !important;
}

.btnHome1 {
  font-family: Open Sans !important;
  font-style: normal !important;
  font-weight: 800 !important;
  font-size: 24px !important;
  line-height: 33px !important;
  color: #0d3232 !important;
  border: 3px solid #0d3232 !important;
}

.btnHome2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;

  color: #ffffff;
}
.customposition {
  margin-left: 72px !important;
}
</style>
