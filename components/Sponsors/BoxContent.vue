<template>
  <div class="award-img px-3 py-5">
    <img
      v-if="content.logo"
      :src="content.logo"
      alt="content.name"
      class="img-fluid"
    >
    <div
      v-else
      class="title"
    >
      {{ content.name }}
    </div>
  </div>
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
