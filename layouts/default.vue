<template>
  <div id="app">
    <LayoutNavigation
      :navigation="data.items"
    />
    <slot />
    <LayoutFooter
      :navigation="footerNav"
    />
    <client-only>
      <TelemetryTracker
        :route="route"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
export default {
  async setup () {
    const { data } = await useAsyncData('navigation',
      () => queryContent()
        .where({ _path: '/navigation' })
        .findOne()
    );

    return { data };
  },

  data () {
    return {
      route: null
    };
  },

  computed: {
    footerNav (): array {
      const flatten = (item): array => {
        const result = [];
        for (const i in item) {
          if (Array.isArray(item[i].items)) {
            const temp = flatten(item[i].items);
            for (const j in temp) {
              result.push(temp[j]);
            }
          } else {
            result.push(item[i]);
          }
        }
        return result;
      };

      return flatten(this.data.items).filter((item): boolean => item.footer);
    }
  },

  watch: {
    $route (route) {
      this.route = this.$route.name;
    }
  },

  mounted () {
    this.route = this.$route.name;
  }
};

</script>
