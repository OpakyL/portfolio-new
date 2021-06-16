<template>
  <transition :name="transitionName" mode="out-in">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "PageTransition",
  data() {
    return {
      transitionName: "",
      pageArray: ["Home", "About", "Portfolio", "Contacts"],
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const toIndex = this.pageArray.findIndex((el) => el === to.name);
      const fromIndex = this.pageArray.findIndex((el) => el === from.name);
      this.transitionName = toIndex < fromIndex ? "slide-up" : "slide-down";

      next();
    });
  },
};
</script>

<style lang="scss">
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-down-enter,
.slide-up-leave-active {
  opacity: 0;
  transform: translate(0, 2em);
}

.slide-down-leave-active,
.slide-up-enter {
  opacity: 0;
  transform: translate(0, -2em);
}
</style>
