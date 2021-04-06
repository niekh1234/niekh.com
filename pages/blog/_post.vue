<template>
  <article class="w-screen min-h-screen bg-grey-lightest text-grey-darkest">
    <Navbar></Navbar>
    <section
      class="w-full max-w-3xl p-4 mx-auto text-left bg-white md:p-8 lg:max-w-5xl"
      v-if="blogpost"
    >
      <nuxt-link
        to="/blog"
        role="button"
        class="inline-flex items-center px-4 py-2 text-xl font-bold hover:underline group text-orange"
      >
        <svg
          class="w-8 h-8 mr-2 transition-transform duration-200 transform stroke-current group-hover:-translate-x-2"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          ></path>
        </svg>
        Terug
      </nuxt-link>

      <hr class="w-full my-6 border-grey-light" />

      <div class="mt-4">
        <h1 class="text-4xl font-bold text-blue">{{ blogpost.title.body }}</h1>
      </div>

      <div class="inline-flex items-center justify-between w-full py-6">
        <p class="text-lg text-grey-dark">{{ blogpost.author.body }}</p>
        <time :datetime="blogpost.publishdate.body" class="text-lg text-grey-dark">{{
          new Date(blogpost.publishdate.body).toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}</time>
      </div>

      <img
        v-if="blogpost.image"
        :src="'https://cms.niekh.com/api/public/images/' + blogpost.image.body.src"
        :alt="blogpost.image.body.alt || $route.params.blog + ' image'"
        class="object-cover w-full h-auto max-h-48"
      />

      <div class="max-w-5xl my-8 prose md:prose-lg xl:prose-xl">
        <div v-html="blogpost.content.body"></div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: this.blogpost.seo_title.body || this.blogpost.title.body,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogpost.seo_description.body || this.blogpost.excerpt.body,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.blogpost.seo_title.body || this.blogpost.title.body,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.blogpost.seo_description.body || this.blogpost.excerpt.body,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.blogpost.image
            ? 'https://cms.niekh.com/api/public/images/' + this.blogpost.image.body.src
            : '',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content:
            this.blogpost.image && this.blogpost.image.body.alt
              ? this.blogpost.image.body.alt
              : this.blogpost.title.body,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blogpost.seo_title.body || this.blogpost.title.body,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blogpost.seo_description.body || this.blogpost.excerpt.body,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blogpost.image
            ? 'https://cms.niekh.com/api/public/images/' + this.blogpost.image.body.src
            : '',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.blogpost.image
            ? 'https://cms.niekh.com/api/public/images/' + this.blogpost.image.body.src
            : '',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content:
            this.blogpost.image && this.blogpost.image.body.alt
              ? this.blogpost.image.body.alt
              : this.blogpost.title.body,
        },
      ],
    };
  },

  data() {
    return {
      blogpost: null,
    };
  },
  async asyncData({ error, route, $http }) {
    if (!route.params.post) {
      return error(404);
    }
    const blogpost = await $http.$get(
      'https://cms.niekh.com/api/public/components/blog-post/' + route.params.post
    );
    if (blogpost === null) {
      return error(404);
    }
    return {
      blogpost: blogpost.content,
    };
  },
};
</script>
