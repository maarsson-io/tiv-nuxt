<template>
  <a :href="link">
    <i
      v-if="withIcon"
      class="icofont-ui-message mr-2"
    />
    {{ config.mail }}
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
      return 'mailto:' + this.config.mail;
    }
  }
};
</script>
