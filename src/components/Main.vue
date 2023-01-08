<template>
  <v-container>
    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <modalParams :error="error" :frameset="frameset" :name="сategory.tableName"></modalParams>
    </v-dialog>
    <v-card
      :disabled='disabled'
      class="mx-auto mb-5"
    >
      <v-card-title>
        {{сategory.name}}
      </v-card-title>
      <v-card-actions>
        <v-btn
          depressed
          color="primary"
          @click.stop="openDialog(сategory.id)"
        >
          Добавить
        </v-btn>
        <v-btn
          depressed
          color="primary"
        >
          Редактировать
        </v-btn>
        <v-btn
          depressed
          color="primary"
        >
          Удалить
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import modalParams from '@/components/modalParams.vue';
  import { Category } from '@/interface/category.interface';

  export default Vue.extend({
    name: 'Main',
    components: {
      modalParams
    },
    data () {
      return {
        show: false,
        error: false,
        categories: [],
        frameset: [],
        dialog: false
      }
    },
    props: {
      сategory: {
        type: Category
      },
      disabled: {
        type: Boolean
      }
    },
    methods: {
      openDialog(id: number) {
        this.dialog = !this.dialog
        this.$store.dispatch('getType', id).then(el => {
          if (el.length) {
            this.frameset = el
            this.error = false
          } else {
            this.error = true
          }
        }).catch(error => {
          this.$store.commit('setAlert', {
            title: 'Hello',
            text: 'World',
            type: 'info',
            duration: 5000
          })
        })
      }
    },
  })
</script>
