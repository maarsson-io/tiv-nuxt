<template>
  <a :href="link">
    <i
      v-if="withIcon"
      class="icofont-ui-message mr-2"
    />
    {{ address }}
  </a>
</template>

<script>
export default {
  props: {
    withIcon: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      address: 'tips@tryggivittsjo.se'
    };
  },

  computed: {
    link () {
      return 'mailto:' + this.address;
    }
  }
};
</script>
