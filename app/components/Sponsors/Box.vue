<template>
  <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
    <a
      v-if="content.link"
      :href="content.link"
      target="_blank"
    >
      <SponsorsBoxContent
        :content="content"
      />
    </a>
    <SponsorsBoxContent
      v-else
      :content="content"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
