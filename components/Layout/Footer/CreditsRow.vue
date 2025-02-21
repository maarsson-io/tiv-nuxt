<template>
  <!-- Credits row -->
  <div class="footer-btm py-4 mt-5">
    <div class="row align-items-center justify-content-between">
      <div class="col-12">
        <div class="copyright text-center">
          {{ config.name }} &copy; 2025&nbsp;&nbsp;|&nbsp;&nbsp;Design by <a :href="config.designer.link">{{ config.designer.name }}</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <a class="backtop scroll-top-to" href="#top">
          <i class="icofont-long-arrow-up" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup () {
    const config = useAppConfig();

    return { config };
  }
};
</script>
