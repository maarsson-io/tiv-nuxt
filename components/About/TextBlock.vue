<template>
  <!-- Text block -->
  <section class="section about-page py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h3 class="title-color">
            {{ content.title }}
          </h3>
        </div>

        <div class="col-lg-9 text-justify">
          <template
            v-for="(sections, index) in content.paragraphs"
            :key="index"
          >
            <MDC
              v-for="(section, sectionIndex) in sections"
              :key="sectionIndex"
              :value="section"
              :tag="false"
            />
            <div
              v-if="index < content.paragraphs.length - 1"
              class="divider my-4"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
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
