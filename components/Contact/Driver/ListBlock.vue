<template>
  <div class="skill-list">
    <h5 class="mb-4">
      {{ content.title }}
    </h5>
    <ul class="list-unstyled department-service">
      <li
        v-for="(item, index) in content.items"
        :key="index"
      >
        <i class="icofont-check mr-2" />{{ item }}
      </li>
    </ul>
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
