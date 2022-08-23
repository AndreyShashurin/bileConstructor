<template>
      <v-row >
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="height"
            label="Рост"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
            <v-select
            :items="items"
            v-model="selectedItem"
            label="Тип рамы"
            single-line
            item-text="name"
            item-value="id"
            ></v-select>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
            <v-select
            :items="fork"
            v-model="selectedfork"
            label="Вилка"
            single-line
            item-text="name"
            item-value="id"
            ></v-select>
        </v-col> 
        <v-col
            md="1"
        >
            <v-btn
                type="submit"
                @click="checkForm"
            >
                Применить
            </v-btn>
        </v-col>
      </v-row>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'params',
    data: () => ({
      items: [{
          id: 1,
          name: 'МТБ'
        },{
          id: 2,
          name: 'Шоссер'
        },{
          id: 3,
          name: 'Двухподвес'
        } ,{
          id: 4,
          name: 'Гревел'
        }
      ],
      fork: [{
          id: 1,
          name: 'Амортизационная'
        },{
          id: 2,
          name: 'Ригидная'
        }
      ],
      valid: false,
      height: '',
      selectedfork: '',
      selectedItem: '',
      errors: [],
    }),
    methods: {
      checkForm() {
        this.errors = [];
        /*if (!this.height) {
          this.errors.push('Укажите имя.');
        }
        if (!this.selectedfork) {
          this.errors.push('Укажите вилку');
        } 
        if (!this.selectedItem) {
          this.errors.push('Укажите тип рамы');
        }*/
        this.$emit('params', false)
        this.$store.dispatch('setParams', {
          height: this.height,
          type: this.selectedItem,
          fork: this.selectedfork
        })
      }
    }
  })
</script>
<style scoped>
.params {
    background: #dad8d3;
    border-bottom: solid 1px gainsboro;
    display: flex;
    align-items: center;
}
</style>
