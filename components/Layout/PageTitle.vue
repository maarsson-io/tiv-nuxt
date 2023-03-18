<template>
  <!-- Page title -->
  <section class="page-title bg-1">
    <div class="overlay" />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block text-center">
            <h1 class="mb-1 text-lg">
              {{ content.title }}
            </h1>
            <span class="text-white">{{ content.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
