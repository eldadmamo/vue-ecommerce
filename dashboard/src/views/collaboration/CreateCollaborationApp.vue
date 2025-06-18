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
                                </div> <!-- / .row -->
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
                                        placeholder="Full name">

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
                                        placeholder="Last name">

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
                                        placeholder="Email address">

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
                                    <select name="" class="form-select" >
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
                        <button type="button" class="btn btn-primary" v-on:click="validar()">
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

export default {
    name: 'CreateCollaboration',
    components: {
        Sidebar,
        TopNav
    }
}
</script>