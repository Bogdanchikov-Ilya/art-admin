<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: 'Все товары',
          url: '/'
        },
        {
          name: 'Клиенты',
          url: '/clients'
        },
        {
          name: 'Скидки',
          url: '/sales'
        },
        {
          name: 'Покупки',
          url: '/history'
        }
      ]
    }
  }
}
</script>
<template>
  <aside>
    <h1>Разделы</h1>
    <ul>
      <router-link v-for="item in menuList" :to="item.url">
        <span>{{ item.name }}</span>
      </router-link>
    </ul>
  </aside>
</template>
<style lang="scss" scoped>
aside {
  padding: 0.7rem;
  width: 20rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  background: rgb(23, 7, 21);
}

h1 {
  margin: 0;
  color: aliceblue;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;


  a {
    margin-top: 1.4rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: aliceblue;

    &:hover {
      color: aliceblue;
    }
  }
}
</style>
