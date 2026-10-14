<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <NewsItems
      :content="data.items"
    />
  </article>
</template>

<script setup lang="ts">
const { data } = await useContentData('news');
</script>
