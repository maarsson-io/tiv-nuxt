<template>
  <client-only>
    <Waypoint @change="startCounter" />
  </client-only>
  <vue3-autocounter
    ref="counter"
    :start-amount="from"
    :end-amount="to"
    :duration="1.5"
    :autoinit="false"
  />
</template>

<script lang="ts">
import Vue3autocounter from 'vue3-autocounter';
import { Waypoint } from 'vue-waypoint';

export default defineNuxtComponent({
  components: {
    'vue3-autocounter': Vue3autocounter,
    Waypoint
  },

  props: {
    from: {
      type: Number,
      default: () => ({})
    },
    to: {
      type: Number,
      default: () => ({})
    }
  },

  methods: {
    startCounter () {
      this.$refs.counter.start();
    }
  }
});
</script>
