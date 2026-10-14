<template>
  <section class="section blog-wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <NewsItem
              v-for="(item, index) in content"
              :key="index"
              :content="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>
