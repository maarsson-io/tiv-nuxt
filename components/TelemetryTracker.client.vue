<template>
  <!--  -->
</template>

<script lang="ts">
import { TelemetryDeck } from '@telemetrydeck/sdk';
const tracker = new TelemetryDeck({
  app: 'E226D615-BE11-4FFF-A472-E9DF810B785F',
  user: 'anonymous'
});
const testMode = false;

export default {
  props: {
    route: {
      type: String,
      default: null
    }
  },

  watch: {
    route (route) {
      this.sendSignal(route, false);
    }
  },

  mounted () {
    this.sendSignal(this.route, true);
  },

  methods: {
    sendSignal (route, landing) {
      if (testMode) {
        return;
      }
      tracker.signal({
        route,
        landing
      });
    }
  }
};

</script>
