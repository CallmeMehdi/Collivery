<template>
  <div class="background">
    <div class="background mt-n8">
      <v-row align="center" class="pt-12" dense justify="center">
        <v-row align="center" justify="center" v-if="!loaded">
          <v-col align="center" justify="center">
            <v-row>
              <v-col>
                <v-progress-circular
                  :width="5"
                  color="black"
                  indeterminate
                  size="50"
                >
                </v-progress-circular>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="font"> Loading </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-col
          :key="i"
          align="center"
          cols="12"
          justify="center"
          v-for="(item, i) in applications"
        >
          <v-card class="appcard pb-0 ">
            <v-row align="center" justify="center">
              <v-col
                align-self="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <div class="mb-0 font">
                  <span> User : {{ item.user }} </span>
                </div>
                <v-divider inset vertical></v-divider>
              </v-col>
              <v-col
                align-self="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <div class="mb-0 font">
                  <span> info : {{ item.info }} </span>
                </div>
                <v-divider inset vertical></v-divider>
              </v-col>
              <v-col
                align="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <div class="mb-0 font">Phone number : {{ item.date }}</div>
                <v-divider inset vertical></v-divider>
              </v-col>

              <v-col
                align="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <div class="mb-0 font">Starting point: {{ item.starting }}</div>
                <v-divider inset vertical></v-divider>
              </v-col>

              <v-col
                align="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <div class="mb-0 font">Destination : {{ item.destination }}</div>
                <v-divider inset vertical></v-divider>
              </v-col>

              <v-col
                align="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <div class="mb-0 font">Item Weight: {{ item.weight }}</div>
                <v-divider inset vertical></v-divider>
              </v-col>
              <!-- buttons Cancel -->
              <v-col
                align="center"
                class="pb-0 mb-0"
                cols="12"
                justify="center"
                md="3"
              >
                <v-row align="center" justify="center">
                  <v-col
                    md="5"
                    align="center"
                    class="pb-0 mb-0"
                    cols="12"
                    justify="center"
                  >
                    <div class="mb-0 font">
                      <v-alert
                        :color="getColorState(2)"
                        width="90%"
                        dense
                        outlined
                      >
                        Available
                      </v-alert>
                    </div>
                  </v-col>
                  <v-col
                    align="center"
                    class="pb-0 mb-0"
                    cols="12"
                    justify="center"
                    md="5"
                  >
                    <!-- only the item with the same userName as the currentLogged in User can delete !-->
                    <div v-if="item.user == $store.state.currentUser.name">
                      <v-btn
                        class="mb-5  "
                        color="error"
                        fab
                        icon
                        @click="cancelDemande(item._id)"
                        :loading="trashLoading"
                      >
                        <v-icon>fas fa-trash-alt</v-icon>
                      </v-btn>
                    </div>
                    <div v-else>
                      <v-spacer></v-spacer>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import DemandesService from "@/services/DemandesService"

export default {
  name: "AllApplicationsPage",
  data: () => ({
    applications: [
    ],
    loaded: true,
    trashLoading: false,
  }),
  created() {
    DemandesService.getCollivery()
      .then(resp => {
        this.loaded = true;
        this.applications = resp.data.status;
      })
      .catch(err => {
        console.log(err);
      });

  },
  methods: {
    getColorState(itemState) {
      if (itemState === 2) {
        return "teal";
      } else if (itemState === 1) {
        return "orange";
      } else {
        return "red";
      }
    },
    // eslint-disable-next-line no-unused-vars
    cancelDemande(id) {
      this.trashLoading = true;
       DemandesService.cancelCollivery({
        _id: id,
      }).then((resp) => {
        this.trashLoading = false;
        console.log(resp);
      });
    },
  },
};
</script>
<style>
.background {
  background-color: #bbe2df;
  height: 103%;
}

.appcard {
  width: 90%;
}

.font {
  font-size: 1.2em;
  font-family: Quicksand;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 18px !important;
  line-height: 22px !important;
}
</style>
