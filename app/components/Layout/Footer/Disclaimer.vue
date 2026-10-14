<template>
  <!-- Disclaimer -->
  <div class="col-lg-4 mr-auto col-sm-6">
    <div class="widget mb-5 mb-lg-0">
      <div class="logo mb-4">
        <div class="brand">
          <img src="/logo/logo_old.svg" alt="" class="logo img-fluid"><br />
          <img src="/logo/logo_text.svg" alt="" class="logo-text-min">
        </div>
      </div>
      <p>{{ data.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useContentData('footerDisclaimer');
</script>
