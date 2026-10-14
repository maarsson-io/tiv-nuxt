<template>
  <template />
</template>

<script lang="ts">
import { TelemetryDeck } from '@telemetrydeck/sdk';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const trackingActive = true;
const referrer = window.document.referrer;

export default {
  props: {
    route: {
      type: String,
      default: null
    }
  },

  async setup () {
    const fpPromise = await FingerprintJS.load({ monitoring: false });
    const fp = await fpPromise;
    const fpResult = await fp.get();

    const tracker = new TelemetryDeck({
      app: 'E226D615-BE11-4FFF-A472-E9DF810B785F',
      user: fpResult.visitorId
    });

    return { tracker };
  },

  watch: {
    $route (to, from) {
      this.sendSignal(from.name);
    }
  },

  async mounted () {
    this.sendSignal(referrer);
  },

  methods: {
    sendSignal (referrer) {
      if (!trackingActive) {
        return;
      }
      this.tracker.signal({
        route: this.$route.name,
        referrer
      });
    }
  }
};

</script>
