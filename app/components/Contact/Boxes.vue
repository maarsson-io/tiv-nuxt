<template>
  <!-- Contact boxes -->
  <section class="section contact-info pb-0">
    <div class="container">
      <div class="row">
        <template
          v-for="(box, index) in content"
          :key="index"
        >
          <ContactBox :content="box" />
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
