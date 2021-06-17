<template>
  <div class="card">
    <div class="card__back">
      <slot name="back" />
    </div>
    <div class="card__front">
      <slot name="front" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 260px;
  width: 480px;

  &__front,
  &__back {
    width: 100%;
    height: 100%;
  }

  &__front {
    background: #484848;
    color: white;
    overflow: hidden;
  }

  &__back {
    opacity: 0;
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;

    &:hover,
    &:active {
      transition: opacity 0.3s;
      opacity: 1;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    color: white;
    padding: 5px;
    margin-top: 0.5em;
    text-align: center;
    transition: color 0.3s;
    &:hover {
      color: red;
    }
  }

  img {
    width: 100%;
  }
}
@media screen and (max-width: 1180px) {
  .card {
    height: 180px;
    width: 400px;
  }
}
@media screen and (max-width: 1000px) {
  .card {
    font-size: 16px;
    height: auto;
    width: 100%;
  }
}
@media screen and (max-width: 480px) {
  .card {
    font-size: 12px;
  }
}
@media screen and (max-width: 380px) {
  .card {
    font-size: 8px;
  }
}
</style>
