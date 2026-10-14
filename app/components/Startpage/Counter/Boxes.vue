<template>
  <section class="cta-section ">
    <div class="container">
      <div class="cta position-relative">
        <div class="row">
          <StartpageCounterBox
            v-for="(box, index) in content"
            :key="index"
            :content="box"
          />
        </div>
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
