<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col align="center" cols="12">
          <span class="text-center font-login  "> LogIn </span>
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
          <!-- Name  -->
          <v-row class="mb-0 pb-0">
            <v-col class="mb-0 pb-0" cols="12">
              <v-text-field
                label="Name"
                :rules="notEmpty"
                class="mb-5 pb-0"
                clearable
                color="black"
                filled
                outlined
                prepend-inner-icon="far fa-address-card"
                required
                rounded
                v-model="name"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- Password  -->
          <v-row class="mt--5">
            <v-col cols="12">
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
        <v-row>
          <v-col align="center" cols="12">
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
        <!-- Create Account section -->
        <v-row justify="center">
          <v-col align="center" cols="9">
            <a class=" font-weight-bold font-login-pass" href="SignUp">
              Create Account
            </a>
          </v-col>
        </v-row>
        <!-- Forgot Password section -->
        <v-row justify="center">
          <v-col align="center" cols="9">
            <router-link to="/ResetMail">
              <a class=" font-weight-bold font-login-pass" href="#">
                Forgot Password
              </a>
            </router-link>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import authController from "@/services/AuthenticationService";

export default {
  name: "SignInForm",
  props: {
    isModal: {
      Boolean,
      default: false,
    },
  },
  data() {
    return {
      password: "",
      name: "",
      valid: false,
      show1: false,
      error: "",
      loading: false,
      notEmpty: [(v) => !!v || "Needed"],
    };
  },
  computed: {
    ...mapState(["langPack"]),
  },
  methods: {
    ...mapActions(["pressLogin", "loginUser"]),
    async validate() {
      this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        try {
          let resp = await authController.signIn({
            name: this.name,
            password: this.password
          });
          this.$store.state.token = resp.data.token;
          this.$store.state.currentUser = resp.data.user;
          this.loading = false;
          if (this.$route.name !== "Home") {
            this.$router.replace({ name: "Home" });
          }
        } catch (e) {
          this.loading = false;
          this.error = e.response.data.err;
        }
      } else {
        //to implement notification v-if here
      }
    },
  },
};
</script>

<style scoped>
.mt--5 {
  margin-top: -25px;
}

>>> .mt--10 {
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
  color: #478D99;
}

>>> .glowing-border {
  box-shadow: 0px 0 10px 1px #478D99, /* inner white */ 0px 0 10px 1px #478D99
    /* middle magenta */ 0 0 10px 1px #478D99 !important;
}
</style>
