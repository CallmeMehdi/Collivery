<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-img class="pt-0 mt-n12" src="@/assets/HomePage.jpg">
          <HomePageBanner />
        </v-img>
        <v-img class="mt-n2 mb-n12 pb-0" src="@/assets/mask.png"> </v-img>
      </v-col>
    </v-row>
    <v-row class=" mt-0 mx-12 text-center">
      <v-col class="mt-0 pt-0 " cols=" 12 " md="4">
        <div class="step1">
          <v-img class="pt-0" contain max-height="185" src="@/assets/box.png">
            <h1 class="stepBigText">
              Easy to use
            </h1>
            <h3 class="stepSmallText">
              Intuitive Design
            </h3>
          </v-img>
        </div>
      </v-col>
      <v-col class="mt-0 pt-0" cols=" 12 " md="4">
        <div class="step2">
          <v-img class="pt-0" contain max-height="185" src="@/assets/box.png">
            <h1 class="stepBigText">
              Safe to use
            </h1>
            <h3 class="stepSmallText">
              we guarentee it
            </h3>
          </v-img>
        </div>
      </v-col>
      <v-col class="mt-0 pt-0" cols=" 12 " md="4">
        <div class="step3">
          <v-img class="pt-0" contain max-height="185" src="@/assets/box.png">
            <h1 class="stepBigText">
              Award Winner
            </h1>
            <h3 class="stepSmallText">
              Inovative
            </h3>
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import HomePageBanner from "@/components/HomePageBanner";

export default {
  name: "Home",
  components: {
    HomePageBanner,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.stepsHeader {
  font-family: Cairo;
}
.stepBigText {
  margin-top: 53px;
  font-family: Quicksand !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 36px !important;
  line-height: 45px !important;
  /* identical to box height */

  color: #382717;
}
.stepSmallText {
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
.step1 {
  font-family: Cairo;

  margin-right: 20%;
}

.step2 {
  font-family: Cairo;
}

.step3 {
  font-family: Cairo;

  margin-left: 20%;
}

@media only screen and (max-width: 958px) {
  .step1 {
    margin-right: 0%;
    margin-bottom: 20px;
  }

  .step3 {
    font-family: Cairo;
    margin-left: 0%;
    margin-top: 20px;
  }
}
</style>
