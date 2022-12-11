<script>
export default {
  methods: {
    auth() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <section>
    <div class="Login">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <img src="../assets/img/logo.svg" alt="Логотип" style="width: 5rem" />
        <span style="font-weight: lighter; margin-top: 1rem">АРТ МАРКЕТ</span>
        <h1 class="tittle">Авторизация</h1>
      </div>
      <form action="" @submit.prevent="auth">
        <br /><br />
        <input
          class="Name"
          type="text"
          placeholder="Логин..."
          minlenght="3"
          maxlenght="13"
          required
        />
        <br /><br />
        <input
          class="password"
          type="password"
          placeholder="Пароль..."
          minlenght="3"
          maxlenght="8"
          required
        />
        <br /><br />
        <input class="buttom" type="submit" placeholder="Enviar" required />
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 3rem;
  border-radius: 10px;
  background-color: #363636;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  box-shadow: 2px 2px 2px #2c2c2c;
  color: white;
  text-align: center;
}

input {
  width: 100% ;
  color: white;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  box-shadow: 2px 2px 2px #2c2c2c;
  border-radius: 10px;
  background-color: #4f4f4f;
}

input::placeholder {
  color: white;
}

.tittle {
  text-align: center;
  margin: 0;
  margin-top: 1rem  ;
}

.buttom {
  width: 25rem;
  background-color: #6a5acd;
}

.buttom:hover {
  background-color: #483d8b;
}
</style>
