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
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`,
  () => queryContent()
    .where({ _path: path })
    .findOne()
);
</script>
