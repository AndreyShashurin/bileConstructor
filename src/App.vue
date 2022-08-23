<template>
<v-app>
    <v-app-bar
      absolute
      color="deep-purple"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-2"
    >
    <params @params="disabledCat($event)"></params>
  </v-app-bar>
  <v-main >
    <Main v-for="cat in categories" :key="cat.id" :cat='cat' :disabled="disabled"></Main>
  </v-main>
</v-app>

</template>

<script lang="ts">
import Vue from 'vue';
import Main from './components/Main.vue';
import params from './components/Params.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Main,
    params
  },
    data () {
      return {
        show: false,
        categories: [],
        frameset: [],
        dialog: false,
        disabled: false
      }
    },
    mounted() {
      this.$store.dispatch('getCategories')
      this.$store.subscribe((mutation, state) => {
        this.categories = state.categories
      })
    },
    methods: {
      disabledCat(e: boolean) {
        this.disabled = e
        return e
      }
    }
});
</script>
<style scoped>
header {
    position: inherit !important; 
    flex: 0 !important;
    padding-top: 17px !important;
}
</style>
