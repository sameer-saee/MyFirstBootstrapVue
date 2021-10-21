<template>
  <div id="app" v-on:scroll = "handleScroll">
    <Navigation />
    <b-container class="py-lg-5 py-md-4 py-3">
      <router-view></router-view>
    </b-container>
    <Footer />
    <!-- <b-container fluid class="py-5 bg-p-light">
      <b-row>
        <b-container>
          <b-row>
            <b-col lg="4" md="6" cols="12" class="mt-lg-0 mt-3">
              <b-card
                title="Web Designing"
                img-src="https://picsum.photos/600/300/?image=25"
                img-top
                img-height="200px"
                tag="service"
                class="mb-2"
              >
                <b-card-text>
                  I provide web designing services. I have designed several websites with pixel perfect designs.
                </b-card-text>
                <b-button variant="link" href="https://www.google.com" target="_blank">
                  Learn More
                </b-button>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" cols="12" class="mt-lg-0 mt-3">
              <b-card
                title="Web Designing"
                img-src="https://picsum.photos/600/300/?image=26"
                img-top
                img-height="200px"
                tag="service"
                class="mb-2"
              >
                <b-card-text>
                  I provide web designing services. I have designed several websites with pixel perfect designs.
                </b-card-text>
                <b-button variant="link" href="https://www.google.com" target="_blank">
                  Learn More
                </b-button>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" cols="12" class="mt-lg-0 mt-3">
              <b-card
                title="Web Designing"
                img-src="https://picsum.photos/600/300/?image=27"
                img-top
                img-height="200px"
                tag="service"
                class="mb-2"
              >
                <b-card-text>
                  I provide web designing services. I have designed several websites with pixel perfect designs.
                </b-card-text>
                <b-button variant="link" href="https://www.google.com" target="_blank">
                  Learn More
                </b-button>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" cols="12" class="mt-3">
              <b-card
                title="Web Designing"
                img-src="https://picsum.photos/600/300/?image=2"
                img-top
                img-height="200px"
                tag="service"
                class="mb-2"
              >
                <b-card-text>
                  I provide web designing services. I have designed several websites with pixel perfect designs.
                </b-card-text>
                <b-button variant="link" href="https://www.google.com" target="_blank">
                  Learn More
                </b-button>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" cols="12" class="mt-3">
              <b-card
                title="Web Designing"
                img-src="https://picsum.photos/600/300/?image=21"
                img-top
                img-height="200px"
                tag="service"
                class="mb-2"
              >
                <b-card-text>
                  I provide web designing services. I have designed several websites with pixel perfect designs.
                </b-card-text>
                <b-button variant="link" href="https://www.google.com" target="_blank">
                  Learn More
                </b-button>
              </b-card>
            </b-col>
            <b-col lg="4" md="6" cols="12" class="mt-3">
              <b-card
                title="Web Designing"
                img-src="https://picsum.photos/600/300/?image=22"
                img-top
                img-height="200px"
                tag="service"
                class="mb-2"
              >
                <b-card-text>
                  I provide web designing services. I have designed several websites with pixel perfect designs.
                </b-card-text>
                <b-button variant="link" href="https://www.google.com" target="_blank">
                  Learn More
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container> -->
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.form.email = ""), (this.form.password = "");
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    handleScroll: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
  },

  components: {
    Navigation,
    Footer,
  },
  
};
</script>

<style>
/* #app {
  font-family: "Be Vietnam Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
} */

.card .btn{
  float: right;
}

.title{
  text-transform: uppercase;
  text-align: center;
  color: var(--primary);
}
</style>
