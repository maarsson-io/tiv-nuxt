<template>
  <article>
    <LayoutPageTitle
      :content="data.header"
    />
    <ContactDriverTextBlock
      :content="data.text_block"
    />
    <section class="section doctor-skills pt-5 pb-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <ContactDriverListBlock
              :content="data.list_block"
            />
          </div>
          <div class="col-lg-4">
            <ContactDriverSidebar
              :content="data.sidebar"
            />
          </div>
        </div>
      </div>

      <!-- Contact form lead -->
      <!--
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-title text-center">
              <div class="divider mx-auto my-4" />
              <p class="mb-5">
                {{ data.form_lead }}
              </p>
            </div>
          </div>
        </div>
      </div>
    -->
    </section>
    <!--
    <ContactForm />
    -->
  </article>
</template>

<script setup lang="ts">
const { data } = await useContentData('contactDriver');
</script>
