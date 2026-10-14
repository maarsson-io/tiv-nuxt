<template>
  <a :href="link">
    {{ number }}
  </a>
</template>

<script lang="ts">
export default {
  props: {
    number: {
      type: String,
      default: '',
    },
  },

  computed: {
    link(): string {
      return 'tel:' + this.number.replace(/\D/g, '');
    },
  },
};
</script>
