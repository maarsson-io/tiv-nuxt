<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <LayoutMainImage
      :content="data.main_image"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <SponsoringTextBlock
            :content="data.text"
          />
        </div>
        <div class="col-lg-4">
          <SponsoringSidebar
            :content="data.sidebar"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { path } = useRoute();
const contentPath = path.replace(/\/+$/, '') || '/';
const { data } = await useAsyncData(`content-${contentPath}`,
  () => queryContent()
    .where({ _path: contentPath })
    .findOne()
);
</script>
