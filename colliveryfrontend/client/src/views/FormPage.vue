<template>
  <div class="background">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 16 : 2"
        class="mx-auto"
        height="900"
        width="900"
      >
        <v-form class="form" ref="form">
          <v-label><h3>Information about the package:</h3></v-label>
          <v-text-field
            :counter="10"
            :rules="reasonRules"
            color="#478D99"
            required
            v-model="info"
          ></v-text-field>
        <v-label><h3>Package weight:</h3></v-label>
          <v-text-field
            :counter="10"
            :rules="reasonRules"
            color="#478D99"
            required
            v-model="weight"
          ></v-text-field>

          <v-row>
            <div class="col-md-4">
              <v-label><h3>Time of the collivery:</h3></v-label>
            </div>
            <div class="col-md-6 ">
              <v-time-picker
                color="#478D99"
                v-model="tempsRetour"
                width="250px"
                format="24hr"
              ></v-time-picker>
            </div>
          </v-row>
          <v-label><h3>Starting point:</h3></v-label>
          <v-select
            :items="items"
            :rules="[v => !!v || 'Please choose a destination!']"
            class="txt"
            color="#478D99"
            required
            v-model="start"
          ></v-select>

          <v-label><h3>Destination: </h3></v-label>
          <v-select
            :items="zones"
            :rules="[v => !!v || 'Please choose a destination!']"
            class="txt"
            color="#478D99"
            required
            v-model="destination"
          ></v-select>

          <v-label><h3>Date:</h3></v-label>
          <v-text-field
            :counter="10"
            :rules="reasonRules"
            color="#478D99"
            required
            v-model="date"
          ></v-text-field>
          <div class="text-center">
            <v-btn
              @click="validate"
              :class="
                hover && !fieldControl ? 'mt--10 glowing-border' : 'mt--10'
              "
              :ripple="{ class: 'red--text' }"
              class="title "
              :disabled="fieldControl"
              color="#478D99"
              height="30px"
              rounded
              width="100px"
            >
              <span class="fontwhite">
                Request
              </span>
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import DemandesService from "@/services/DemandesService";

export default {
  name: "FormPage",
  data: () => ({
    valid: false,
    error: "",
    reason: "",
    isClicked: false,
    isMinutesAllowed: true,
    zone: "",
    date: "",
    destination: "",
    starting:"",
    tempsRetour: "",
    weight:"",
    info:"",
    reasonRules: [v => !!v || "Please specify your package!"],
    select: null,
    items: [
      "Tunis",
      "Sousse",
      "Sfax",
      "Kairouan"
    ],
    zones: [
      "Tunis",
      "Sousse",
      "Sfax",
      "Kairouan"
    ],
    input :{
        _id: 0,
        user: "kekw",
        info: "plz be carefull with the material inside ",
        destR: "Ben Arouss",
        destZ: "Mrj5",
        date: "12/12/12",
        weight: "60KG",
        state: 2,
    },
  }),
  methods: {
    async validate() {
        try {
        await DemandesService.addCollivery({
            user: this.$store.state.currentUser.name,
            date: this.data,
            weight: this.weight,
            info: this.info,
            starting: this.starting,
            destination: this.destination,
        }).then(() => {
          this.$router.replace({ name: "AllApplicationsPage" });
        });
      } catch (e) {
        console.log(e)
        this.error = e.response.data.err;
      }
    },
  }
};
</script>


<style scoped>
.form {
  padding: 30px 50px 50px 50px;
}

.background {
  background-color: #e5dddd;
  margin-top: 15px;
  padding-top: 35px;
  padding-bottom: 100px;
}
.fontwhite {
  color: white !important;
}

h3 {
  color: #478D99;
}
.glowing-border {
  box-shadow: 0px 0 10px 1px #478D99, /* inner white */ 0px 0 10px 1px #478D99,
    /* middle magenta */ 0 0 10px 1px #478D99 !important;
}
</style>
