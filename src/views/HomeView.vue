<script>
import BaseAside from '../components/BaseAside.vue'

export default {
  components: { BaseAside },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Товар1',
          imgUrl: 'teeeest.png',
          count: 14,
          price: 1600,
          description: 'sdkf sdkf kldsf kds flkds jfdskf kdsklf dsk fdsk'
        },
        {
          id: 1,
          name: 'test',
          imgUrl: 'teeeest.png',
          count: 14,
          price: 1600,
          description: 'sdkf sdkf kldsf kds flkds jfdskf kdsklf dsk fdsk'
        },
        {
          id: 1,
          name: 'Товар1',
          imgUrl: 'teeeest.png',
          count: 14,
          price: 1600,
          description: 'sdkf sdkf kldsf kds flkds jfdskf kdsklf dsk fdsk'
        },
        {
          id: 1,
          name: 'Товар1',
          imgUrl: 'teeeest.png',
          count: 14,
          price: 1600,
          description: 'sdkf sdkf kldsf kds flkds jfdskf kdsklf dsk fdsk'
        }
      ],
      realProducts: []
    }
  },
  methods: {
    validStringLength(str) {
      return str.length > 20 ? str.slice(0, 17) + '...' : str
    },
    searchProducts(event) {
      this.realProducts = this.products.filter(item =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    }
  },
  created() {
    this.realProducts = JSON.parse(JSON.stringify(this.products))
  }
}
</script>

<template>
  <main>
    <BaseAside />
    <div class="content">
      <div class="search">
        <input
          type="text"
          placeholder="Поиск по товарам"
          @input="searchProducts"
        />
      </div>
      <table class="table">
        <tr>
          <th>Товар</th>
          <th>Фото</th>
          <th>Количество</th>
          <th>Стоимость</th>
          <th>Описание</th>
        </tr>
        <tr v-for="(item, index) in realProducts">
          <td>{{ validStringLength(item.name) }}</td>
          <td>{{ item.imgUrl }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.price }} ₽</td>
          <td>{{ validStringLength(item.description) }}</td>
          <td class="edit-buttons">
            <button class="edit">Редактировать</button>
            <button class="delete">Удалить</button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding-top: 4rem;
}

.content {
  padding: 1rem;
  width: 100%;
}

table {
  width: 100%;
  margin-top: 1rem;
}

th,
td {
  text-align: start;
}

.edit-buttons {
  .delete {
    margin-left: 1rem;
  }
}

input {
  width: 14rem;
  color: rgba(250, 250, 250, 0.5);
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: rgba(31, 41, 55);
  padding: 0.5rem 1rem;
  transition: all 0.4s;
}
</style>
