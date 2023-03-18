<template>
  <!--  -->
</template>

<script lang="ts">
import { TelemetryDeck } from '@telemetrydeck/sdk';
const tracker = new TelemetryDeck({
  app: '90A03A61-1936-4CCF-92DA-63C3E1E67D05',
  user: 'anonymous'
});
const testMode = true;

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
