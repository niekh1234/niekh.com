<template>
  <main class="flex flex-col w-screen min-h-screen overflow-x-hidden bg-white">
    <Navigation
      :items="navItems"
      :active="activeNavItem"
      :key="activeNavItem"
      v-on:scroll-to="smoothScrollTo($event)"
    ></Navigation>

    <article
      class="relative flex flex-col items-center justify-center w-screen min-h-screen"
      id="section_1"
    >
      <img src="~assets/svg/meteors.svg" class="absolute inset-0 w-screen h-screen" />
      <!-- content -->
      <section class="z-50 flex flex-row max-w-5xl my-auto lg:max-w-4xl h-3/5 lg:h-1/2">
        <div class="flex flex-col justify-center w-full p-4 mx-0 md:mx-12">
          <h1 class="font-sans text-4xl font-extrabold xs:text-5xl md:text-7xl text-midnight">
            Niek Hagen
          </h1>
          <h2
            class="mt-3 font-sans text-3xl font-semibold xs:text-4xl xs:mt-6 md:text-5xl text-blue"
          >
            Razendsnelle websites
          </h2>

          <p
            class="mt-4 text-lg font-medium leading-7 xs:text-xl xs:leading-10 xs:mt-8 text-grey-darker md:text-2xl"
          >
            Zeg maar dag tegen
            <span class="font-semibold text-white cursor-pointer bg-orange"> Wordpress,</span>
            ik maak met
            <span class="text-white bg-blue">moderne technologiën</span>
            websites en webapps die
            <u style="text-decoration-color: rgba(52, 144, 220)">goedkoper</u>,
            <u style="text-decoration-color: rgba(52, 144, 220)"> gebruiksvriendelijker</u>
            en
            <u style="text-decoration-color: rgba(52, 144, 220)">sneller</u>
            zijn.<br />
          </p>
          <div class="inline-flex items-center mt-12 space-x-8">
            <button
              class="px-6 py-3 text-2xl font-bold text-white transition-all duration-200 border-4 rounded-full bg-blue md:px-12 hover:shadow-xl hover:bg-blue-dark border-blue hover:border-blue-dark"
              @click="smoothScrollTo(4)"
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      <!-- Navigate to second section arrow -->
      <button
        @click="smoothScrollTo(2)"
        class="absolute bottom-0 z-40 animate-bounce"
        aria-label="Navigeer naar de tweede sectie"
      >
        <svg
          class="w-8 h-8 text-white fill-current"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 256 256"
          xml:space="preserve"
        >
          <g>
            <g>
              <polygon
                points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"
              />
            </g>
          </g>
        </svg>
      </button>

      <!-- wave -->
      <div class="absolute bottom-0 z-20 w-full h-auto">
        <Wave></Wave>
      </div>
    </article>

    <article class="flex flex-col items-center w-full min-h-screen py-16 bg-blue" id="section_2">
      <div class="flex flex-col items-center self-center h-full max-w-5xl lg:max-w-4xl">
        <p class="text-xl text-center text-white uppercase text-light">Skills</p>
        <h2 class="mt-2 text-3xl font-bold text-center text-white sm:text-4xl">
          Wat doe ik allemaal?
        </h2>
        <h3 class="max-w-3xl mt-6 text-xl font-normal text-center text-grey-lighter sm:text-2xl">
          Door het gebruik van moderne technologiën voor het web maak ik razendsnelle en simpele
          gebruikerservaringen.
        </h3>

        <div
          class="grid w-full h-full grid-cols-1 grid-rows-6 gap-1 mt-8 lg:grid-cols-2 lg:grid-rows-3"
        >
          <template v-if="content.skills.body !== null">
            <div v-for="skill in content.skills.body" :key="skill.handle" class="flex flex-row p-4">
              <div class="flex justify-center w-1/6 h-full py-3">
                <svg
                  class="w-12 h-12 p-2 bg-white rounded-lg stroke-current text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="skill.content.icon.body"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col w-5/6 h-full px-2 py-3">
                <h3 class="text-xl font-medium text-white">
                  {{ skill.content.title.body }}
                </h3>
                <p class="text-sm font-normal text-white">
                  {{ skill.content.content.body }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </article>

    <article
      class="flex flex-col items-center w-full min-h-screen py-16 bg-grey-lightest"
      id="section_3"
    >
      <section class="flex flex-col items-center w-full max-w-5xl px-4 sm:px-8">
        <h2 class="text-4xl font-bold text-blue">Mijn werk</h2>

        <template v-if="content.work && content.work !== null">
          <div
            v-for="(project, i) in content.work.body"
            :key="i"
            class="grid w-full grid-cols-1 p-4 mt-8 transition-all duration-200 transform bg-white rounded-lg shadow-lg sm:p-6 gap-x-4 gap-y-8 hover:-translate-y-2 hover:shadow-xl grid-rows-auto md:grid-cols-2 md:grid-rows-auto"
          >
            <div class="flex flex-col row-start-2 md:row-start-auto">
              <p>
                <time class="text-xl font-light text-grey" :datetime="project.content.date.body">{{
                  capitalizeFirst(
                    new Date(project.content.date.body).toLocaleString('nl-NL', {
                      month: 'long',
                      year: 'numeric',
                    })
                  )
                }}</time>
              </p>
              <a
                class="mt-2 text-2xl font-bold underline truncate text-midnight hover:no-underline"
                :href="project.content.link.body || '/'"
              >
                {{ project.content.title.body }}
              </a>
              <p class="mt-4 font-normal text-midnight">
                {{ project.content.excerpt.body }}
              </p>
              <div class="inline-flex flex-wrap items-center w-full mt-4 md:mt-auto">
                <p class="mr-4 text-grey-dark text-light">Technologiën:</p>
                <div
                  v-for="(tech, i) in JSON.parse(project.content.technologies.body)"
                  :key="i"
                  class="px-3 py-1 m-1 mr-2 rounded-full bg-grey-lighter"
                >
                  <p class="text-sm font-semibold text-blue">{{ tech }}</p>
                </div>
              </div>

              <button
                @click="
                  expandedWorkSection === null
                    ? (expandedWorkSection = project.handle)
                    : (expandedWorkSection = null)
                "
                class="inline-flex items-center py-2 mt-4 mr-auto text-xl font-semibold md:mt-0 text-orange hover:underline"
              >
                <p>
                  {{ expandedWorkSection !== project.handle ? 'Details' : 'Verbergen' }}
                </p>
                <svg
                  class="w-6 h-6 mt-1 transition-transform duration-200 transform stroke-current text-midnight"
                  :class="expandedWorkSection !== project.handle ? '' : '-rotate-180'"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="row-start-1 md:row-start-auto">
              <img
                v-if="project.content.showcase.body"
                :src="
                  'https://cms.niekh.com/api/public/images/' + project.content.showcase.body.src
                "
                :alt="project.content.showcase.body.alt || 'Afbeelding project'"
                class="w-full"
              />
            </div>
            <div
              v-if="expandedWorkSection === project.handle"
              v-html="project.content['description what'].body"
              class="prose"
            ></div>
            <div
              v-if="expandedWorkSection === project.handle"
              v-html="project.content['description how'].body"
              class="prose"
            ></div>
          </div>
        </template>
      </section>
    </article>
    <footer
      class="flex flex-col items-center w-screen h-auto py-24 bg-blue-darkest text-blue-lightest"
      id="section_4"
    >
      <div class="flex flex-col items-center w-11/12 h-auto sm:w-5/6 md:w-3/4 xl:w-2/3 2xl:w-1/2">
        <h3 class="mt-2 text-3xl font-bold text-center sm:text-4xl">Neem contact op</h3>
        <h3 class="w-5/6 mt-2 text-xl font-normal text-center sm:text-2xl">
          Laat een bericht achter of stuur mij een email
        </h3>
        <form name="contact" class="grid w-full grid-cols-3 grid-rows-2 gap-4 mt-8" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label for="name_field" class="col-span-1 mx-auto my-auto font-semibold"> Naam </label>
          <input
            required
            oninvalid="this.setCustomValidity('Dit veld is verplicht')"
            onchange="this.setCustomValidity('')"
            id="name_field"
            type="text"
            name="name"
            class="h-8 col-span-2 px-2 transition-colors duration-200 border-2 rounded-lg border-blue-darkest bg-blue-darker focus:outline-none focus:border-blue-dark hover:border-blue-dark"
          />
          <label for="email_field" class="col-span-1 col-start-1 mx-auto my-auto font-semibold">
            E-mail
          </label>
          <input
            required
            oninvalid="this.setCustomValidity('Dit veld is verplicht')"
            onchange="this.setCustomValidity('')"
            id="email_field"
            type="text"
            name="email"
            class="col-span-2 px-2 transition-colors duration-200 border-2 rounded-lg border-blue-darkest bg-blue-darker focus:outline-none focus:border-blue-dark hover:border-blue-dark"
          />
          <label for="question_field" class="col-span-1 col-start-1 mx-auto my-auto font-semibold">
            Bericht
          </label>
          <textarea
            name="question_description"
            id="question_field"
            class="col-span-2 col-start-2 row-span-2 px-2 transition-colors duration-200 border-2 rounded-lg border-blue-darkest bg-blue-darker focus:outline-none focus:border-blue-dark hover:border-blue-dark"
          ></textarea>
          <button
            type="submit"
            class="col-start-1 row-start-5 px-4 py-2 my-auto ml-auto font-semibold bg-white rounded-lg lg:col-start-3 text-blue-darkest"
          >
            Versturen
          </button>
        </form>
      </div>
      <hr class="w-11/12 h-2 mt-16 border-blue-darker" />
      <div
        class="flex flex-row items-center justify-between w-full h-auto px-8 mb-16 md:px-16 lg:mb-4"
      >
        <p class="text-grey-lighter text-md sm:text-lg md:text-xl">
          {{ '© ' + new Date().getFullYear() + ' Niek Hagen' }}
        </p>
        <div class="flex flex-row w-auto h-auto">
          <a href="https://www.github.com/niekh1234" title="GitHub" class="mr-4">
            <svg viewBox="0 0 512 512" class="w-10 h-10">
              <path
                fill="white"
                d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
              />
            </svg>
          </a>
          <a href="mailto:niekhagen@hotmail.com" title="niekhagen@hotmail.com" class="mr-4">
            <svg
              class="w-10 h-10 text-white stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/niekh1234/niekh.com" title="Source code">
            <svg
              class="w-10 h-10 text-white stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Introductie' },
        { name: 'Wat ik doe' },
        { name: 'Werk' },
        { name: 'Contact' },
      ],
      activeNavItem: 0,
      expandedWorkSection: null,
    };
  },

  head() {
    return {
      title: 'Niek Hagen | Moderne websites',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Zeg maar dag tegen Wordpress, laat je website maken door iemand die er verstand van heeft, dan is hij goedkoper voor jou, en sneller, moderner en makkelijker voor je klant. | Niek Hagen',
        },
      ],
    };
  },

  async asyncData({ $http }) {
    const { content } = await $http.$get('http://cms.niekh.com/api/public/pages/home');
    return { content };
  },

  mounted() {
    this.scrollHandler();
    window.addEventListener('scroll', this.scrollHandler);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  },

  methods: {
    scrollHandler() {
      for (let item in this.navItems) {
        const qSelector = document.querySelector(`#section_${parseInt(item, 10) + 1}`);

        if (qSelector === null) {
          continue;
        }

        const boundingRect = qSelector.getBoundingClientRect();

        const activationPoint = Math.max(boundingRect.top + window.scrollY - 600, 0);
        const deactivationPoint = Math.max(boundingRect.bottom + window.scrollY - 600, 0);

        if (activationPoint <= window.scrollY && window.scrollY < deactivationPoint) {
          this.activeNavItem = item;
          return;
        }
      }
    },

    smoothScrollTo(index) {
      document.querySelector(`#section_${index}`).scrollIntoView({
        behavior: 'smooth',
      });
    },

    capitalizeFirst(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },
  },
};
</script>
