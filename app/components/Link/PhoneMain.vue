<template>
  <a :href="link">
    <i
      v-if="withIcon"
      class="icofont-phone-circle mr-2"
    />
    {{ config.phone }}
  </a>
</template>

<script lang="ts">
export default {
  props: {
    withIcon: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    const config = useAppConfig();

    return { config };
  },

  computed: {
    link (): string {
      return 'tel:' + this.config.phone.replace(/\D/g, '');
    }
  }
};
</script>
