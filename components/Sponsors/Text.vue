<template>
  <!-- Lead -->
  <section class="section about-page pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h2 class="title-color">{{ content.title }}</h2>
        </div>
        <div class="col-lg-8">
          <p>{{ content.paragraph }}</p>
          <img src="/assets/sign.png" alt="" class="o-70 img-fluid">
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
