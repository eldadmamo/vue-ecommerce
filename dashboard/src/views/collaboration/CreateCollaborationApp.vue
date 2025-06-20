<template>
    <div>
        <Sidebar />

        <div class="main-content">
            <TopNav/>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">
                                            Collaborators
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            New collaborator
                                        </h1>

                                    </div>
                                </div> 
                                <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/collaborator/" class="nav-link">All collaborators</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active">
                                                    New collaborator
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <div class="row">
                            <div class="col-12 col-md-6">

                                <!-- First name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        First Name
                                    </label>

                                    <!-- Input -->
                                    <input type="text" class="form-control"
                                        placeholder="Full name" v-model="collaborator.name">

                                </div>

                            </div>
                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Last Name
                                    </label>

                                    <!-- Input -->
                                    <input type="text" class="form-control" 
                                        placeholder="Last name" v-model="collaborator.surnames">

                                </div>

                            </div>
                            <div class="col-12">

                                <!-- Email address -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="mb-1">
                                        Email address
                                    </label>

                                    <!-- Form text -->
                                    <small class="form-text text-muted">
                                        This contact will be shown to others publicly, so choose it carefully.
                                    </small>

                                    <!-- Input -->
                                    <input type="email" class="form-control" 
                                        placeholder="Email address" v-model="collaborator.email">

                                </div>

                            </div>

                            <!-- Add this section below the email field -->
<div class="col-12 col-md-6">
  <div class="form-group">
    <label class="form-label">
      Temporary Password
    </label>
    <input 
      type="password" 
      class="form-control"
      placeholder="Set temporary password"
      v-model="collaborator.password">
  </div>
</div>  

                            <div class="col-12 col-md-6">

                                <!-- Position -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Position
                                    </label>

                                    <!-- Input -->
                                    <select name="" class="form-select" v-model="collaborator.role">
                                        <option value="" disabled selected>Select</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Salesperson">Salesperson</option>
                                        <option value="Inventory">Inventory</option>
                                    </select>
                                </div>

                            </div>

                        </div> <!-- / .row -->

                        <!-- Divider -->
                        <hr class="my-5">

                        <!-- Button -->
                        <button type="button" class="btn btn-primary" v-on:click="validator()">
                            Create Collaborator
                        </button>

                        <br><br>

                    </div>
                </div> <!-- / .row -->
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/sidebar.vue'
import TopNav from '../../components/TopNav'
import axios from 'axios';

export default {
    name: 'CreateCollaboration',

    data(){
        return {
            collaborator: {
                role: ''
            }
        }
    },
    methods: {
        validator(){
            if(!this.collaborator.name){
                this.$notify({
              group:'foo',
              title: 'Error',
              text: 'fill all the First Name',
              type: 'error'
            })
          } else if(!this.collaborator.surnames){
            this.$notify({
              group:'foo',
              title: 'Error',
              text: 'fill all the Last Name',
              type: 'error'
            })
          } else if (!this.collaborator.email){
            this.$notify({
              group:'foo',
              title: 'Error',
              text: 'fill all the Email Address',
              type: 'error'
            })
          } else if(!this.collaborator.role){
            this.$notify({
              group: 'foo',
              title: 'Error',
              text: 'fill all the Position',
              type: 'error'
            })
          } else if (!this.collaborator.password) {
    this.$notify({
      group: 'foo',
      title: 'Error',
      text: 'Please enter a temporary password',
      type: 'error'
    })
  } else {
            this.create_collaborate();
          }
          
        },
        create_collaborate() {
  // Get fresh token and ensure it's properly formatted
  const freshToken = localStorage.getItem("token")?.trim();
  
  if (!freshToken) {
    this.$notify({
      group: 'foo',
      title: 'Error',
      text: 'No authentication token found',
      type: 'error'
    });
    return;
  }

  axios.post(this.$url + '/register', this.collaborator, {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': freshToken
    }
  }).then((response) => {
    // Handle success
    this.$notify({
      group: 'foo',
      title: 'Success',
      text: 'Collaborator created successfully!',
      type: 'success'
    });
    this.collaborator = {
      name: '',
      surnames: '',
      email: '',
      role: '',
      password: ''
    };
    this.$router.push({name: 'collaborator-index'})
  }).catch((error) => {
    
    this.$notify({
      group: 'foo',
      title: 'Error',
      text: error.response?.data?.error || 'Failed to create collaborator',
      type: 'error'
    });

    
  });
}
    },
    mounted(){  
        
    },  
    components: {
        Sidebar,
        TopNav
    }
}
</script>