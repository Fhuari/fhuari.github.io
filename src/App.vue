<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="container-xxl py-5">
    <div class="row gy-3 justify-content-center">
      <div :class="route.path === '/projects' ? 'col-md-12' : 'col-md-8'">
        <!-- navegación -->
        <div class="border-bottom py-3 text-center">
          <router-link to="/" class="text-500 mx-3 text-decoration-none py-1">Profile</router-link>
          <router-link to="/projects" class="text-500 mx-3 text-decoration-none py-1">Projects</router-link>
        </div>
        <!-- contenido -->
        <div class="content py-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
