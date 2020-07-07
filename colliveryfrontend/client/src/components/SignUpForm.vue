<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col align="center" cols="12">
          <span class="text-center font-login  "> Join Us </span>
        </v-col>
      </v-row>
      <!-- icon -->
      <v-row justify="center">
        <v-col align="center" cols="12">
          <v-img src="../assets/SignIn.png" max-width="300"></v-img>
        </v-col>
      </v-row>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <!-- Name -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Name"
                :rules="nameRules"
                class="mb-0 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="fas fa-user"
                required
                rounded
                v-model="name"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Phone  -->
          <v-row class="mb-0 pb-0" justify="center">
            <v-col class="mb-0 pb-0" cols="10">
              <v-text-field
                label="Phone"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="Email"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Password  -->
          <v-row class="mt--5" justify="center">
            <v-col cols="10">
              <v-text-field
                :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                label="Password"
                :rules="notEmpty"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                class="mt-0 pb-0 mb-5"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="fas fa-lock"
                required
                rounded
                v-model="password"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <!-- submit Button  -->
        <v-row justify="center">
          <v-col align="center" cols="10">
            <v-hover v-slot:default="{ hover }">
              <!-- when the button gets hovered hover becomes true so we switch the class -->
              <v-btn
                :class="hover ? 'mt--10 glowing-border' : 'mt--10'"
                :disabled="!valid"
                :loading="loading"
                :ripple="{ class: 'teal--text' }"
                @click="validate"
                color="#478D99"
                height="225%"
                rounded
                width="100%"
              >
                <span class="font-login-white"> Submit </span>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import authController from "@/services/AuthenticationService";

export default {
  name: "SignUpForm",
  props: {
    isModal: {
      Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      data: [],
      error: "",
      password: "",
      name: "",
      city: "",
      area: "",
      phone: "",
      email: "",
      valid: false,
      show1: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions(["pressLogin"]),
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          console.log("apicall");
          let resp = await authController.register({
            name: this.name,
            phone: this.phone,
            password: this.password,
          });
          this.loading = false;
          this.$router.replace({ name: "SignIn" });
          console.log(resp)
        } catch (e) {
          this.loading = false;
          this.error = e.response.data.err;
        }
      }
    },
  },
};
</script>

<style scoped>
.form {
  /* This form has been down-scaled and the z-index is made 1
           with position relative so it doesn't collide with the nav bar */
  position: relative;
  z-index: 1 !important;
}

body * {
  font-family: Cairo;
}

.mt--5 {
  margin-top: -25px;
}

.mt--10 {
  margin-top: -50px !important;
}

.font-login {
  font-size: 2rem !important;
}

.font-login-popup2 {
  font-size: 1.4rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #616161;
}

.font-login-white {
  font-size: 1.5rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
}

.font-login-pass {
  font-size: 1rem !important;
  background-color: rgba(255, 255, 255, 0);
  color: #478d99;
}

>>> .glowing-border {
  box-shadow: 0px 0 10px 1px rgb(27, 47, 51),
    /* inner white */ 0px 0 10px 1px rgb(104, 208, 226) /* middle magenta */ 0 0
      10px 1px #478d99 !important;
}
.side-image {
  height: 90vh;
  width: 70vw;
  padding-bottom: 120px !important;
}

.text-photo {
  font-size: 45px;
  color: white;
}
</style>
