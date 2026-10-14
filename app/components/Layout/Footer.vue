<template>
  <!-- Footer -->
  <footer class="footer section gray-bg">
    <div class="container">
      <div class="row">
        <LayoutFooterSwish />
        <LayoutFooterDisclaimer />
        <LayoutFooterContacts />
        <LayoutFooterNavigation
          :navigation="navigation"
        />
      </div>
      <LayoutFooterCreditsRow />
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  props: {
    navigation: {
      type: Array,
      default: () => []
    }
  }
};
</script>
