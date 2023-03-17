<template>
  <!-- Text block -->
  <div class="department-content mt-5">
    <h3 class="text-md">
      {{ content.title }}
    </h3>
    <div class="divider my-4" />
    <p
      v-for="(paragraph, index) in content.paragraphs"
      :key="index"
      v-html="paragraph"
    />
    <div class="divider my-4" />
    <p>{{ content.driver_text }}</p>
    <NuxtLink
      to="contact-driver"
      class="btn btn-main-2 btn-round-full"
    >
      {{ content.driver_button }}<i class="icofont-simple-right ml-2" />
    </NuxtLink>
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
