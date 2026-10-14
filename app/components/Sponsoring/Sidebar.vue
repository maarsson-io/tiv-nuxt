<template>
  <!-- Swish -->
  <div class="sidebar-widget schedule-widget mt-5">
    <img
      class="swish w-100 px-4"
      src="/assets/swish-TIV.png"
      alt=""
    >
  </div>
  <!-- Bank -->
  <div class="sidebar-widget schedule-widget mt-5">
    <h5 class="mb-4">
      {{ content.giro_title }}
    </h5>
    <div class="sidebar-contatct-info mt-4">
      <h3>{{ content.giro_number }}</h3>
    </div>
  </div>
  <div class="sidebar-widget schedule-widget mt-5">
    <h5 class="mb-4">
      {{ content.iban_title }}
    </h5>
    <div class="sidebar-contatct-info mt-4">
      <h3><small>{{ content.iban_number }}</small></h3>
    </div>
  </div>
  <!-- Prices -->
  <div class="sidebar-widget schedule-widget mt-5">
    <h5 class="mb-4">
      {{ content.pricing_title }}
    </h5>
    <ul class="list-unstyled">
      <li class="d-flex justify-content-between align-items-center">
        <span>{{ content.private_person }}</span>
        <span>{{ content.private_person_price }}</span>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>{{ content.company }}</span>
        <span>{{ content.company_price }}</span>
      </li>
    </ul>
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
