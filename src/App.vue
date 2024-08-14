<script setup>


</script>

<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-md-8">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
