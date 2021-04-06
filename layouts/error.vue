<template>
  <main class="w-screen min-h-screen py-16 bg-grey-lightest">
    <article class="max-w-lg p-8 mx-auto text-center bg-white rounded-xl">
      <h2 class="text-5xl font-bold text-blue">
        Oh nee! <span class="text-orange">{{ error.statusCode }}</span>
      </h2>
      <h3 class="mb-12 text-xl text-grey-darker">{{ error.message }}</h3>
      <nuxt-link
        to="/"
        class="px-4 py-2 text-xl font-bold text-white transition-all rounded-full bg-blue md:px-12 md:py-4 hover:shadow-xl"
      >
        Terug naar home
      </nuxt-link>
    </article>
  </main>
</template>

<script>
export default {
  props: ['error'],
};
</script>
