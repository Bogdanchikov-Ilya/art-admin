<script>
import vClickOutside from 'click-outside-vue3'
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      focusInput: false,
      showOpenProfileAccordion: false
    }
  },
  methods: {
    searchFocus() {
      this.focusInput = true
    },
    searchFocusout() {
      this.focusInput = false
    },
    closeAccordion() {
      this.showOpenProfileAccordion = false
    }
  }
}
</script>
<template>
  <header class="header-wrapper">
    <div class="logo">
      <img src="../assets/img/logo.svg" alt="Логотип" />
      <span>АРТ МАРКЕТ</span>
    </div>
    <div class="options">
      <div class="search">
        <input
          type="text"
          :class="{ active: focusInput }"
          placeholder="Поиск по категориям"
          @focus="searchFocus"
          @focusout="searchFocusout"
        />
      </div>
      <div class="profile">
        <div class="profile-inner" @click="showOpenProfileAccordion = !showOpenProfileAccordion" v-click-outside="closeAccordion">
          <div class="profile-wrapper">
            <img src="../assets/img/user.svg" alt="Профиль" />
          </div>
          <span class="trigger">Василий Елхимов</span>
        </div>
        <div class="profile-accordion" v-if="showOpenProfileAccordion">
          <router-link to="/login">
            <button>Выйти</button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: red;
  background-color: rgba(17, 24, 39);
  height: 4rem;
  padding: 0 2rem;
}

.logo {
  display: flex;
  align-items: center;

  img {
    width: 2rem;
  }

  span {
    color: white;
    font-size: 1.5rem;
    font-weight: 200;
    margin-left: 0.3rem;
    letter-spacing: 0.15rem;
  }
}

.options {
  display: flex;
  align-items: center;
  justify-content: center;

  .search {
    input {
      width: 14rem;
      color: rgba(250, 250, 250, 0.5);
      font-size: 1rem;
      border: none;
      outline: none;
      background-color: rgba(31, 41, 55);
      padding: 0.5rem 1rem;
      transition: all .4s;

      &:focus {
        width: 20rem;
        transition: all 0.2s;
      }
    }
  }

  .profile {
    display: flex;
    flex-direction: column;
    position: relative;
    .profile-accordion {
      width: 100%;
      background-color: rgb(31, 41, 55);
      border-radius: 6px;
      padding: .5rem;
      position: absolute;
      top: 120%;
      left: 1rem;
      button{
        border-radius: 6px;
        width: 100%;
        cursor: pointer;
        background: transparent;
        color: white;
        font-size: 1rem;
      }
    }
  }
  .profile-inner {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.8rem;

    .profile-wrapper {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #fafafa7f;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 1.5rem;
      }
    }

    span {
      margin-left: .5rem;
      color: rgba(250, 250, 250, 0.5);
    }
  }
}
</style>
