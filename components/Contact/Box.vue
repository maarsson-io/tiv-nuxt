<template>
  <!-- Contact box -->
  <div class="col-lg-4 col-md-6">
    <div class="contact-block mb-4 mb-lg-0">
      <i :class="content.icon" />
      <h5>{{ content.title }}</h5>
      <LinkPhoneMain
        v-if="content.component == 'phone'"
      />
      <LinkMail
        v-else-if="content.component == 'mail'"
      />
      <div v-if="content.lines">
        <div
          v-for="(line, index) in content.lines"
          :key="index"
        >
          {{ line }}
        </div>
      </div>
      <div v-else>
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
