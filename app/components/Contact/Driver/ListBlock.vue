<template>
  <div class="skill-list mb-5">
    <h5 class="mb-4">
      {{ content.title }}
    </h5>
    <template
      v-for="(list, index) in content.items"
      :key="index"
    >
      <ul class="list-unstyled department-service mb-2">
        <li
          v-for="(item, itemIndex) in list"
          :key="itemIndex"
        >
          <i class="icofont-check mr-2" />{{ item }}
        </li>
      </ul>
      <div
        v-if="index < content.items.length - 1"
        class="divider my-4"
      />
    </template>
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
