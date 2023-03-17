<template>
  <h5 class="title-color">
    {{ content.title }}
  </h5>
  <div class="divider mt-4 mb-5 mb-lg-0" />
  <p class="my-4">
    <small v-html="content.text" />
  </p>
  <p class="my-4 pb-4">
    <NuxtLink
      to="sponsoring"
      class="btn btn-main-2 btn-round-full"
    >
      {{ content.button }}<i class="icofont-simple-right ml-2" />
    </NuxtLink>
  </p>
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
