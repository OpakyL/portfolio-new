<template>
  <div class="container">
    <div class="about">
      <div class="about__section about__section-first">
        <div class="about__text">
          <p>
            Привет! Меня зовут Валера, мне 21 год и я Frontend - разработчик.
          </p>
          <p>
            Имею около года опыта комерческой и чуть больше года учебной
            разработки. В данный момент ищу новое место работы, дабы сменить
            проект и продолжить расти дальше.
          </p>
          <p>
            На работе имел хорошие отношения с коллегами. Всегда выполнял все
            дедлайны вовремя. Старался участвовать во всех обсуждениях, и в
            целом, не отмалчиваться в стороне, а принимать активную роль в жизни
            проекта.
          </p>
          <p>
            По своей сути являюсь общительным и открытым человеком. Не боюсь
            задавать вопросы, а также высказывать свое мнение. Люблю доводить
            задачи до конца, поэтому могу даже пересиживать рабочее время, дабы
            доделать интересную задачу.
          </p>
          <p>
            Вполне неплохо владею английским языком. Очень хорошо воспринимаю
            информаицю (чтение документации / просмотр нужной видео-информации).
            Постоянно практикуюсь в общении со своими англоговорящими друзьями.
            Переодически пополняю свой словарный запас с помощью приложений -
            карточек.
          </p>
        </div>
        <img src="@/assets/img/me.png" alt="me" />
      </div>
      <div class="about__section about__section-second">
        <a href="http://htmlbook.ru/html" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/html.webp"
            alt="html"
          />
        </a>
        <a href="http://htmlbook.ru/css" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/css.webp"
            alt="css"
          />
        </a>
        <a href="https://learn.javascript.ru/" target="_blank" class="skill">
          <img class="skill__img" src="@/assets/img/skills/js.png" alt="js" />
        </a>
        <a href="https://vuejs.org/" target="_blank" class="skill">
          <img class="skill__img" src="@/assets/img/skills/vue.png" alt="vue" />
        </a>
        <a href="https://vuex.vuejs.org/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/vuex.png"
            alt="vuex"
          />
        </a>
        <a href="https://ru.reactjs.org/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/react.png"
            alt="react"
          />
        </a>
        <a href="https://redux.js.org/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/redux.png"
            alt="redux"
          />
        </a>
        <a href="https://sass-lang.com/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/sass.png"
            alt="sass"
          />
        </a>
        <a href="https://getbootstrap.com/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/bootstrap.png"
            alt="bootstrap"
          />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/ts.png"
            alt="typescript"
          />
        </a>
        <a href="https://git-scm.com/" target="_blank" class="skill">
          <img class="skill__img" src="@/assets/img/skills/git.jpg" alt="git" />
        </a>
        <a href="https://nodejs.org/en/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/node.png"
            alt="node"
          />
        </a>
        <a href="https://webpack.js.org/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/webpack.png"
            alt="webpack"
          />
        </a>
        <a href="https://www.npmjs.com/" target="_blank" class="skill">
          <img class="skill__img" src="@/assets/img/skills/npm.png" alt="npm" />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" class="skill">
          <img
            class="skill__img"
            src="@/assets/img/skills/mongo.png"
            alt="mongo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
.about {
  &__section {
    padding: 15px;
    border: 2px solid white;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    &-first {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;

      img {
        height: 400px;
        border: 1px solid white;
      }
    }
    &-second {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 15px;
      justify-items: center;
    }
  }
  &__text {
    margin-right: 15px;
  }

  .skill {
    display: flex;
    align-items: center;
    height: 200px;
    width: 200px;

    &__img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1330px) {
  .about {
    &__section {
      &-first {
        img {
          height: 350px;
        }
      }
      &-second {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .about {
    font-size: 16px;
    &__section {
      &-first {
        flex-direction: column;
        flex-flow: column-reverse;
        align-items: center;
        img {
          height: auto;
          width: 250px;
        }
      }
      &-second {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &__text {
      margin-right: 0;
    }
    .skill {
      width: 150px;
      height: 150px;
    }
  }
}
@media screen and (max-width: 500px) {
  .about {
    &__section {
      &-first {
        img {
          height: auto;
          width: 150px;
        }
      }
    }
    .skill {
      width: 75px;
      height: 75px;
    }
  }
}
</style>
