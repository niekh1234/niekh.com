<template>
  <main class="w-screen min-h-screen bg-grey-lightest">
    <Navbar></Navbar>
    <article class="max-w-5xl p-8 mx-auto bg-white">
      <h2 class="mt-8 text-4xl font-semibold text-grey-darkest">Mijn laatste blogposts</h2>
      <p class="text-lg text-grey-darker">Hier hou ik je op de hoogte met waar ik mee bezig ben!</p>

      <hr class="my-8 border border-grey-lighter" />

      <section class="max-w-full divide-y divide-grey-lighter">
        <article
          v-for="post in posts"
          :key="post.handle"
          class="grid grid-cols-2 grid-rows-2 gap-8 py-12 md:gap-10 md:grid-rows-1 md:grid-cols-3"
        >
          <nuxt-link
            v-if="post.content.image"
            :to="'/blog/' + post.handle"
            class="col-span-2 md:col-span-1"
          >
            <img
              :src="
                'https://cms.niekh.com/api/public/images/thumbnail-' + post.content.image.body.src
              "
              :alt="post.content.image.body.alt || 'Plaatje blogpost'"
              class="object-contain w-full h-full max-h-48"
            />
          </nuxt-link>
          <div class="col-span-2">
            <time :datetime="post.content.publishdate.body" class="text-lg text-grey-dark">{{
              new Date(post.content.publishdate.body).toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}</time>
            <h2 class="text-2xl font-bold text-blue">{{ post.content.title.body }}</h2>
            <div
              v-html="post.content.excerpt.body"
              class="my-4 prose md:prose-lg xl:prose-xl"
            ></div>
            <nuxt-link
              :to="'/blog/' + post.handle"
              class="text-xl font-semibold underline hover:no-underline text-orange"
              >Bekijken</nuxt-link
            >
          </div>
        </article>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $http, error }) {
    try {
      const posts = await $http.$get('https://cms.niekh.com/api/public/components/blog-post');

      if (!posts || !posts.length) {
        return error({ statusCode: 404, message: 'Niet gevonden :(' });
      }
      return { posts };
    } catch (err) {
      console.log(err);
      return error({ statusCode: 404, message: 'Niet gevonden :(' });
    }
  },

  mounted() {
    console.log(this.posts);
  },
};
</script>
