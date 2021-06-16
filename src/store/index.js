import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showMenu: false,

    mobs: [
      {
        hp: 10,
        sprite: "angel1",
      },
      {
        hp: 25,
        sprite: "angel2",
      },
      {
        hp: 50,
        sprite: "angel3",
      },
      {
        hp: 100,
        sprite: "minotaur1",
      },
      {
        hp: 200,
        sprite: "minotaur2",
      },
      {
        hp: 350,
        sprite: "minotaur3",
      },
      {
        hp: 500,
        sprite: "golem1",
      },
      {
        hp: 750,
        sprite: "golem2",
      },
      {
        hp: 1000,
        sprite: "golem3",
      },
      {
        hp: 1500,
        sprite: "wrath1",
      },
    ],
    currentDamage: 1,
    currentDamagePerTime: 0,
    currentMob: {
      hp: 10,
      sprite: "angel1",
    },
    currentMobIndex: 0,
    currentHp: 10,
    currentPoints: 0,
    imageFolder: "alive",
    respawning: false,
    swordPrice: 5,
    clockPrice: 15,
    interval: null,
    gameSkipped: false,
    showWelcomeModal: true,
  },
  getters: {
    showMenu: (state) => state.showMenu,

    imageFolder: (state) => state.imageFolder,
    respawning: (state) => state.respawning,
    currentHp: (state) => state.currentHp,
    currentMob: (state) => state.currentMob,
    currentPoints: (state) => state.currentPoints,
    swordPrice: (state) => state.swordPrice,
    clockPrice: (state) => state.clockPrice,
    gameSkipped: (state) => state.gameSkipped,
    showWelcomeModal: (state) => state.showWelcomeModal,
  },
  mutations: {
    completeGame(state) {
      state.showMenu = true;
    },
    skipGame(state) {
      state.gameSkipped = true;
    },
    closeModal(state) {
      state.showWelcomeModal = false;
    },
    makeAHit(state) {
      state.currentHp -= state.currentDamage;
      state.currentPoints += state.currentDamage;
      this.commit("checkMob");
    },
    checkMob(state) {
      if (state.currentHp <= 0) {
        state.respawning = true;
        state.imageFolder = "died";
        state.currentMobIndex++;
        if (state.currentMobIndex === 10) {
          this.commit("completeGame");
          return;
        }
        setTimeout(() => {
          state.currentMob = state.mobs[state.currentMobIndex];
          state.currentHp = state.currentMob.hp;
          state.imageFolder = "alive";
          state.respawning = false;
        }, 1500);
      }
    },
    buySword(state) {
      if (state.swordPrice > state.currentPoints) {
        return;
      }
      state.currentPoints -= state.swordPrice;
      state.currentDamage += Math.ceil(state.currentDamage * 1.5);
      state.swordPrice += state.swordPrice * 2;
    },
    buyClock(state) {
      if (state.clockPrice > state.currentPoints) {
        return;
      }
      state.currentPoints -= state.clockPrice;
      state.currentDamagePerTime += 15;
      state.clockPrice += state.clockPrice * 3;
    },
    startInterval(state) {
      state.interval = setInterval(() => {
        if (!state.respawning) {
          state.currentHp -= state.currentDamagePerTime;
          state.currentPoints += state.currentDamagePerTime;
          this.commit("checkMob");
        }
      }, 1000);
    },
    stopInterval(state) {
      clearInterval(state.interval);
    },
  },
});
