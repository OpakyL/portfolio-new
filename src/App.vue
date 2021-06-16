<template>
  <div id="app" :class="{ pl: showMenu }">
    <app-header
      v-if="showMenu"
      @toggleHeader="toggleHeader"
      :is-active="isActive"
    />
    <app-hamburger
      v-if="showMenu"
      @toggleHeader="toggleHeader"
      :is-active="isActive"
    />
    <page-transition>
      <router-view />
    </page-transition>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppHamburger from "@/components/AppHamburger.vue";
import PageTransition from "@/transitions/PageTransition.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapGetters(["showMenu"]),
  },
  components: {
    AppHeader,
    AppHamburger,
    PageTransition,
  },
  methods: {
    toggleHeader() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    if (!this.showMenu && this.$route.name !== "Home") {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
  color: white;
  background: #484848;
}

.container {
  min-height: calc(100vh - 30px);
  padding: 15px;
}
#app {
  &.pl {
    padding-left: 160px;
  }
}
@media screen and (max-width: 1000px) {
  #app {
    &.pl {
      padding-left: 65px;
    }
  }
}
</style>
