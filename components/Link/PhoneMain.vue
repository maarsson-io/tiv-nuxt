<template>
  <a :href="link">
    <i
      v-if="withIcon"
      class="icofont-phone-circle mr-2"
    />
    {{ phone }}
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
      phone: '0708 - 93 06 85'
    };
  },

  computed: {
    link () {
      return 'tel:' + this.phone.replace(/\D/g, '');
    }
  }
};
</script>
