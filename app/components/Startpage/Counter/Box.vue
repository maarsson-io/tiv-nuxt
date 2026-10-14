<template>
  <div class="col-lg-3 col-md-6 col-sm-6">
    <div class="counter-stat">
      <i :class="content.icon" />
      <span class="h3 counter">
        <StartpageCounterNumber
          :from="0"
          :to="content.count"
        />
      </span>
      <sup v-if="content.sup">{{ content.sup }}</sup>
      <p>{{ content.text }}</p>
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
