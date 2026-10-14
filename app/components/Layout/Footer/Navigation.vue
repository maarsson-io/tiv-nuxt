<template>
  <!-- Navigation -->
  <div class="col-lg-2 col-md-6 col-sm-6">
    <div class="widget mb-5 mb-lg-0">
      <h4 class="text-capitalize mb-3">
        Om oss
      </h4>
      <div class="divider mb-4" />
      <ul class="list-unstyled footer-menu lh-35">
        <li
          v-for="item in navigation"
          :key="item.link"
        >
          <NuxtLink :to="item.link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    navigation: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
