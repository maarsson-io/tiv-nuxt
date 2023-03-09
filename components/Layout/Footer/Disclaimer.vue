<template>
  <!-- Disclaimer -->
  <div class="col-lg-4 mr-auto col-sm-6">
    <div class="widget mb-5 mb-lg-0">
      <div class="logo mb-4">
        <div class="brand">
          <img src="/logo/logo_short.svg" alt="" class="logo img-fluid">
        </div>
      </div>
      <p>{{ data.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('footer-data', () => queryContent('/footer/disclaimer').findOne());
</script>
