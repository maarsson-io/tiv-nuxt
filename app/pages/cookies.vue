<template>
  <article>
    <LayoutPageTitle :content="data.header" />
    <section class="section py-5">
      <div class="container">
        <p class="text-muted">{{ data.updated }}</p>
        <p>{{ data.intro }}</p>

        <section
          v-for="(section, index) in data.sections"
          :key="section.title"
          class="mt-5"
        >
          <h2 class="title-color">{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>

          <div v-if="index === 1" class="table-responsive">
            <table class="table table-bordered">
              <caption>{{ data.cookie_table.title }}</caption>
              <thead>
                <tr>
                  <th v-for="heading in data.cookie_table.headings" :key="heading" scope="col">
                    {{ heading }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cookie in data.cookie_table.rows" :key="cookie.name">
                  <th scope="row"><code>{{ cookie.name }}</code></th>
                  <td>{{ cookie.provider }}</td>
                  <td>{{ cookie.purpose }}</td>
                  <td>{{ cookie.duration }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="mt-5">
          <h2 class="title-color">{{ data.sources.title }}</h2>
          <ul>
            <li v-for="link in data.sources.links" :key="link.url">
              <a :href="link.url">{{ link.title }}</a>
            </li>
          </ul>
        </section>

        <section class="mt-5">
          <h2 class="title-color">{{ data.contact.title }}</h2>
          <p>{{ data.contact.text }}</p>
          <NuxtLink to="/contact">{{ data.contact.link_title }}</NuxtLink>
        </section>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const { data } = await useContentData('cookies');

useHead({ title: data.value.header.title });
</script>
