<template>
  <div class="row" data-testid="sponsor-grid">
    <SponsorsBox
      v-for="(sponsor, index) in sponsors"
      :key="index"
      :content="sponsor"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    sponsors () {
      return activeSponsors(this.content);
    }
  }
};
</script>
