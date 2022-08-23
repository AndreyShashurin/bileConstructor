<template>
    <v-app>
      <v-container v-if="error" class="not-found">Для даннных параметров ничего не найдено</v-container>
      <v-container v-else>
        <div class="loader">
        <v-progress-circular
        indeterminate
        color="purple"
        ></v-progress-circular>
        </div>
      <v-card
        class="d-flex flex-row"
        v-for="frame in frameset" :key="frame.id"
      >
        <v-card-text class="text--primary">
          <v-card-title>
           {{frame.name}}
          </v-card-title>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="orange"
            text
          @click="selectDetail(frame.id, name)"
          >
            Выбрать
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-container>
    </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'modalParams',
    props: ['frameset', 'name', 'error'],
    data: () => ({
      valid: false,
      height: '',
      selectedfork: '',
      selectedItem: ''
    }),
    methods: {
        selectDetail(id: any, name: string) {
          this.$store.dispatch('saveFrameset', {id: id, name: name})
        }
    }
  })
</script>
<style scoped>
.v-card {
    height: 100px;
    margin-bottom: 10px;
}
.v-card__title {
  font-size: 15px;
  font-weight: normal;
}
.v-application--wrap {
  min-width: auto;
}
.not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.loader {   
  position: absolute;
    height: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 100%;
}
</style>