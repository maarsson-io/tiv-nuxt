<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <SponsorsText
      :content="data.text"
    />
    <section class="section awards pt-5">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-lg-4">
            <SponsorsSidebar
              :content="data.sidebar"
            />
          </div>
          <div class="col-lg-8">
            <SponsorsBoxes
              :content="data.sponsors"
            />
          </div>
        </div>
      </div>
    </section>
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
