<template>
  <div class="sidebar-widget  gray-bg p-4">
    <h5 class="mb-4">
      {{ content.title }}
    </h5>
    <div
      v-for="(contact, index) in content.contacts"
      :key="index"
      class="sidebar-contatct-info mt-4"
    >
      <p class="mb-0">
        {{ contact.name }}
      </p>
      <h3 class="text-color-2">
        <LinkPhone :number="contact.phone" />
      </h3>
    </div>
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
