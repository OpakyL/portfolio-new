<template>
  <div class="container">
    <div class="home" v-if="!showWelcomeModal">
      <div class="game" v-if="gameSkipped">
        <div class="mob">
          <img src="@/assets/img/sprites/skip.png" alt="mob" />
        </div>
      </div>
      <div class="game" v-else>
        <div class="mob">
          <div
            @click="respawning ? () => {} : makeAHit()"
            :style="{
              cursor: 'url(' + require('@/assets/img/cursor.png') + '), auto',
            }"
            class="mob-image"
          >
            <div class="mob-overlay"></div>
            <img
              :src="
                require(`@/assets/img/sprites/${imageFolder}/${currentMob.sprite}.png`)
              "
              alt="mob"
            />
          </div>
          <div class="hp">
            <div class="hp-text">
              {{ currentHp >= 0 ? currentHp : 0 }} / {{ currentMob.hp }}
            </div>
            <div
              class="hp-bar"
              :style="{
                width:
                  currentHp >= 0
                    ? `${(currentHp / currentMob.hp) * 100}%`
                    : '0',
              }"
            ></div>
          </div>
        </div>
        <div class="shop">
          <div class="shop-points">{{ currentPoints }}pts</div>
          <div class="shop-buttons">
            <div
              class="shop-button"
              :class="{ border: currentPoints >= swordPrice }"
              @click="buySword"
            >
              <div class="shop-image">
                <div class="shop-overlay"></div>
                <img src="@/assets/img/shop/sword.svg" alt="sword" />
              </div>
              <div>{{ swordPrice }}</div>
            </div>
            <div
              class="shop-button"
              :class="{ border: currentPoints >= clockPrice }"
              @click="buyClock"
            >
              <div class="shop-image">
                <div class="shop-overlay"></div>
                <img src="@/assets/img/shop/clock.svg" alt="clock" />
              </div>
              <div>{{ clockPrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-if="showWelcomeModal">
      <template>
        <div>
          Привет! Спасибо, что посетили мое портфолио! Перед тем, как
          отправиться изучать его, предлагаю сыграть в мини-игру. Игра
          представляет из себя простенький кликер. Всего в игре 5 монстров.
          Начните кликать по нему и, накопив нужное количество очков, покупайте
          улучшение. Победив всех 5 монстров, откроется доступ ко всему
          портфолио. Удачи!
          <br />
          <small>
            P.s вы всегда можете пропустить мини-игру, нажав на соответствующую
            кнопку.
          </small>
        </div>
        <div class="modal-buttons">
          <button @click="closeModal()">Продолжить</button>
          <button
            @click="
              completeGame();
              skipGame();
              closeModal();
            "
          >
            Пропустить
          </button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/AppModal";

import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Modal,
  },
  computed: {
    ...mapGetters([
      "showMenu",
      "imageFolder",
      "respawning",
      "currentHp",
      "currentMob",
      "currentPoints",
      "swordPrice",
      "clockPrice",
      "gameSkipped",
      "showWelcomeModal",
    ]),
  },
  methods: {
    ...mapMutations([
      "completeGame",
      "skipGame",
      "makeAHit",
      "checkMob",
      "buySword",
      "buyClock",
      "startInterval",
      "stopInterval",
      "closeModal",
    ]),
  },
  mounted() {
    this.startInterval();
  },
  beforeDestroy() {
    this.stopInterval();
  },
};
</script>

<style lang="scss">
.home {
  min-height: calc(100vh - 30px);
  display: flex;
  align-items: center;
  justify-content: center;

  .game {
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      flex-flow: column-reverse;
    }

    .mob {
      max-width: 500px;
      &-image {
        position: relative;
        img {
          width: 100%;
        }
      }
      &-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .hp {
        width: 100%;
        height: 50px;
        position: relative;
        background: white;
        border: 2px solid black;
        border-radius: 5px;

        &-text {
          color: black;
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &-bar {
          height: 100%;
          position: absolute;
          background: red;
        }
      }
    }
    .shop {
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-points {
        margin-bottom: 50px;
      }

      &-image {
        position: relative;
        img {
          width: 50px;
          margin-bottom: 10px;
        }
      }

      &-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      &-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        cursor: pointer;
        justify-content: center;
        border-radius: 5px;
        border: 1px solid transparent;
        transition: border-color 0.3s;
        width: 100%;

        &:first-of-type {
          margin-bottom: 20px;
        }
        &.border {
          border-color: white;
        }
      }

      @media screen and (max-width: 600px) {
        flex-direction: row;
        align-items: center;
        &-buttons {
          display: flex;
        }
        &-points {
          margin-bottom: 0;
          margin-right: 50px;
        }
        &-button {
          &:first-of-type {
            margin-bottom: 0;
            margin-right: 30px;
          }
        }
      }
    }
  }
}
</style>
