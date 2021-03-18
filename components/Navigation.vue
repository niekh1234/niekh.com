<template>
  <div>
    <!-- desktop nav -->
    <nav
      class="fixed z-30 flex flex-col items-center w-8 py-4 transition-all duration-200 rounded-full -right-8 md:right-1 top-1/3"
      :class="backgroundColor"
    >
      <button
        v-for="(item, i) in items"
        :key="i"
        class="relative flex items-center justify-center w-full h-10 group"
        @click="$emit('scroll-to', i + 1)"
        @mouseover="tooltip = item"
        @mouseleave="tooltip = null"
        :aria-label="'Navigeren naar: ' + item.name"
      >
        <div
          class="w-4 h-4 my-3 border-2 rounded-full group-hover:bg-blue-light"
          style="padding: 2px"
          :class="[parseInt(active, 10) === i ? backgroundColor : secondaryColor, borderColor]"
        ></div>
        <div
          v-if="item === tooltip"
          class="absolute flex items-center justify-center w-40 h-12 border-2 border-white right-9 rounded-xl flex-nowrap"
          :class="backgroundColor"
        >
          <h3 class="inline mx-4 text-xl font-semibold" :class="textColor">
            {{ item.name }}
          </h3>
        </div>
      </button>
    </nav>

    <div
      @click="showMobileMenu = !showMobileMenu"
      class="fixed flex items-center justify-center w-16 h-16 p-2 transition-all duration-300 rounded-full bg-midnight right-4 md:-right-16"
      style="bottom: 5%; z-index: 100"
    >
      <svg
        class="w-full h-full text-white stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>

      <div
        class="absolute flex flex-col items-start w-48 py-2 transition-all rounded-lg bg-midnight bottom-20"
        :class="showMobileMenu ? 'opacity-100 right-2' : 'opacity-0 -right-56'"
        @click.stop
      >
        <button
          v-for="(item, i) in items"
          :key="i"
          class="w-full py-2 text-xl font-bold"
          @click="
            $emit('scroll-to', i + 1);
            showMobileMenu = false;
          "
          :class="parseInt(active, 10) === i ? 'text-orange' : 'text-white'"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'active'],
  data() {
    return {
      backgroundColor: 'bg-blue',
      secondaryColor: 'bg-white',
      borderColor: 'bg-white',
      textColor: 'text-white',
      tooltip: null,
      showMobileMenu: false,
    };
  },

  created() {
    this.backgroundColor = this.active % 2 === 0 ? 'bg-blue' : 'bg-white';
    this.secondaryColor = this.active % 2 === 0 ? 'bg-white' : 'bg-blue';
    this.borderColor = this.active % 2 === 0 ? 'border-white' : 'border-blue';
    this.textColor = this.active % 2 === 0 ? 'text-white' : 'text-blue';
  },
};
</script>
