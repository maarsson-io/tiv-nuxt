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

    inThirteenMonths () {
      const date = new Date();
      return date.setMonth(date.getMonth() - 13);
    },

    sponsors () {
      return this.content
        .filter(sponsor => new Date(sponsor.date) >= this.inThirteenMonths)
        .sort((first, second) => first.name > second.name ? 1 : -1);
    }
  }
};
</script>
