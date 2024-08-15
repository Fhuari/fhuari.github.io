<script setup>


</script>

<template>
  <div class="container-xxl py-5">
    <div class="row gy-3 justify-content-center">
      <div class="col-md-8">
        <!-- navegation -->
        <div class="border-bottom py-3 text-center">
          <router-link to="/" class="text-500 mx-3 text-decoration-none py-1">Profile</router-link>
          <router-link to="/projects" class="text-500 mx-3 text-decoration-none py-1">Projects</router-link>
        </div>
        <!--  content -->
        <div class="content py-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
