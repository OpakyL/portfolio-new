<template>
  <div class="container">
    <div class="portfolio">
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/fablab.jpg" alt="fablab" />
        </template>
        <template v-slot:back>
          <p>
            Frontend: React / Typescript / Redux
            <br />
            Backend: Node.js express / MongoDB
          </p>
          <hr />
          <a
            target="_blank"
            href="https://fablab-portfolio.herokuapp.com/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/delivery.png" alt="delivery" />
        </template>
        <template v-slot:back>
          <p>HTML / Scss / BEM</p>
          <hr />
          <a
            target="_blank"
            href="https://delivery-project-18oghtjxd.vercel.app/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/medium.png" alt="medium" />
        </template>
        <template v-slot:back>
          <p>Vue / Vuex / Vue Router</p>
          <hr />
          <a
            target="_blank"
            href="https://medium-clone-how8xpiht.vercel.app/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/spend.png" alt="spend" />
        </template>
        <template v-slot:back>
          <p>
            Frontend: React / Redux <br />Backend: Node.js express / MongoDB
          </p>
          <hr />
          <a
            target="_blank"
            href="https://spend-control-app.herokuapp.com/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/business.png" alt="business" />
        </template>
        <template v-slot:back>
          <p>HTML / Scss / BEM</p>
          <hr />
          <a
            target="_blank"
            href="https://remembrance-project-hzm8nudg2.vercel.app/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/swapi.png" alt="swapi" />
        </template>
        <template v-slot:back>
          <p>Vue / Vuex / Vue Router</p>
          <hr />

          <a
            target="_blank"
            href="https://vue-swapi-black.vercel.app/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/todo.png" alt="todo" />
        </template>
        <template v-slot:back>
          <p>Vue / Vuex / Vue Router</p>
          <hr />

          <a
            target="_blank"
            href="https://peshkariki-todo.vercel.app/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
      <portfolio-card>
        <template v-slot:front>
          <img src="@/assets/img/portfolio/poke.png" alt="poke" />
        </template>
        <template v-slot:back>
          <p>React</p>
          <hr />

          <a
            target="_blank"
            href="https://poke-blitz.vercel.app/"
            class="card__link"
            >Перейти на сайт</a
          >
        </template>
      </portfolio-card>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard";
export default {
  name: "Portfolio",
  components: { PortfolioCard },
};
</script>

<style lang="scss">
.portfolio {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
@media screen and (max-width: 1660px) {
  .portfolio {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 1000px) {
  .portfolio {
    grid-template-columns: 1fr;
  }
}
</style>
