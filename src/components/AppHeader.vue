<template>
  <div class="nav__wrapper">
    <div class="nav" :class="{ active: isActive }">
      <div class="nav__links">
        <router-link
          v-on:click.native="$emit('toggleHeader')"
          active-class="active"
          to="/"
          exact
        >
          Главная
        </router-link>
        <router-link
          v-on:click.native="$emit('toggleHeader')"
          active-class="active"
          to="/about"
        >
          Обо мне
        </router-link>
        <router-link
          v-on:click.native="$emit('toggleHeader')"
          active-class="active"
          to="/portfolio"
        >
          Портфолио
        </router-link>
        <router-link
          v-on:click.native="$emit('toggleHeader')"
          active-class="active"
          to="/contacts"
        >
          Контакты
        </router-link>
      </div>
    </div>
    <div
      v-if="isActive"
      class="nav__layout"
      @click="$emit('toggleHeader')"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-right: 2px solid white;

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
    &.active {
      color: red;
    }
  }
  &__links {
    display: flex;
    flex-direction: column;
  }
  &__layout {
    display: none;
  }
}
@media screen and (max-width: 1000px) {
  .nav {
    z-index: 2;
    left: -160px;
    transition: left 0.3s;

    &__layout {
      cursor: pointer;
      z-index: 1;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }

    &.active {
      left: 0;
    }
  }
}
</style>
