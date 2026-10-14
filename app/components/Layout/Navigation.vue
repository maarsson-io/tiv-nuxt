<template>
  <header>
    <LayoutHeaderTopRow />
    <LayoutHeaderNavbar
      :navigation="navigation"
    />
  </header>
</template>

<script lang="ts">
export default {
  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
