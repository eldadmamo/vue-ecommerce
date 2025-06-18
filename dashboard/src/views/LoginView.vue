<template>
  <div class="d-flex align-items-center bg-auth border-top border-top-2 border-primary" style="height: 100vh !important;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">

          <!-- Heading -->
          <h1 class="display-4 text-center mb-3">
            Log In
          </h1>

          <!-- Subheading -->
          <p class="text-muted text-center mb-5">
            Admin Panel
          </p>

          <!-- Form -->
          <form>

            <div v-if="msm_error" class="alert alert-danger alert-dismissible fade show" role="alert">
              {{ msm_error }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <!-- Email address -->
            <div class="form-group">
              <!-- Label -->
              <label class="form-label">
                Email Address
              </label>

              <!-- Input -->
              <input type="email" class="form-control" v-model="email" placeholder="email@example.com">
            </div>

            <!-- Password -->
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <!-- Label -->
                  <label class="form-label">
                    Password
                  </label>
                </div>
              </div>

              <!-- Input group -->
              <div class="input-group input-group-merge">
                <!-- Input -->
                <input class="form-control" type="text" v-model="password" placeholder="Password">

                <!-- Icon -->
                <span class="input-group-text">
                  <i class="fe fe-eye"></i>
                </span>
              </div>
            </div>

            <!-- Submit -->
            <button type="button" v-on:click="validate()" class="btn btn-lg w-100 btn-primary mb-3">
              Log In
            </button>

            <div class="text-center">
              <small class="text-muted text-center">
                Don't have an account yet? <a href="/">Sign Up</a>
              </small>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HelloWorld from '../components/HelloWorld.vue';

import axios from 'axios'

export default {
    name: 'LoginView',
    data(){
      return {
        email: '',
        password:'',
        msm_error:''
      }
    },
    created(){
      console.log(this.$url);
    },
    methods: {
      validate(){
        if(!this.email){
          this.msm_error = 'please fill this Information'
        } else if(!this.password){
          this.msm_error = 'Please Fill the Password'
        } else {
          this.msm_error = ''
          this.login();
        }
        console.log(this.msm_error);
      },
      login(){
        let data = {
          email: this.email,
          password: this.password 
        }
        axios.post(this.$url+'/login',data,{
          headers: {'Content-Type': 'application/json'}
        }).then((result)=> {
          if(result.data.token){
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('user', JSON.stringify(result.data.user));
            this.$router.push({name:'about'})
          }
            
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    components: {

    }
}

</script>

<style scoped>

</style>