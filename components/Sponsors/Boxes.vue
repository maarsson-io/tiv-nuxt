<template>
  <div class="row">
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
    inOneYear () {
      const date = new Date();
      return date.setFullYear(date.getFullYear() - 1);
    },

    sponsors () {
      return this.content
        .filter(sponsor => new Date(sponsor.date) >= this.inOneYear)
        .sort((first, second) => first.name > second.name ? 1 : -1);
    }
  }
};
</script>
