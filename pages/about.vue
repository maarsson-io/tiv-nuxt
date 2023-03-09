<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <LayoutMainImage
      :content="data.main_image"
    />
    <!-- Text block one -->
    <section class="section about-page py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h3 class="title-color">
              {{ data.block_one_title }}
            </h3>
          </div>

          <div class="col-lg-9 text-justify">
            <template
              v-for="(sections, index) in data.block_one_text"
              :key="index"
            >
              <template
                v-for="section in sections"
              >
                <p v-html="section" />
              </template>
              <div
                v-if="index < data.block_one_text.length - 1"
                class="divider my-4"
              />
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Image row -->
    <section class="section fetaure-page pb-5 mb-0">
      <div class="container mb-0">
        <div class="row">
          <div
            v-for="(image_box, index) in data.block_image_row"
            :key="index"
            class="col-lg-3 col-md-6"
          >
            <div class="about-block-item">
              <figure class="figure m-0">
                <img
                  :src="image_box.src"
                  :alt="image_box.alt"
                  class="figure-img img-fluid"
                >
                <figcaption class="figure-caption text-light">
                  &copy; {{ image_box.credits }}
                </figcaption>
              </figure>
              <h4 class="mt-3">
                {{ image_box.title }}
              </h4>
              <p>{{ image_box.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Text block two -->
    <section class="section about-page py-5">
      <div class="container pb-5 mb-0">
        <div class="row">
          <div class="col-lg-3">
            <h3 class="title-color">
              {{ data.block_two_title }}
            </h3>
          </div>

          <div class="col-lg-9 text-justify">
            <template
              v-for="(sections, index) in data.block_two_text"
              :key="index"
            >
              <template
                v-for="section in sections"
              >
                <p v-html="section" />
              </template>
              <div
                v-if="index < data.block_two_text.length - 1"
                class="divider my-4"
              />
            </template>
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
