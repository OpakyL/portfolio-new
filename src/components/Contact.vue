<template>
  <div class="contact">
    <div class="contact__image"><slot name="image" /></div>
    <div class="contact__text"><slot name="text" /></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.contact {
  border: 2px solid white;
  width: 320px;
  display: flex;
  border-radius: 5px;
  padding: 15px;

  &__text {
    padding-left: 15px;
    display: flex;
    align-items: center;

    border-left: 1px solid white;
  }
  &__image {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      display: inherit;
    }

    img {
      width: 60px;
      margin-right: 15px;

      &:hover {
        transition: transform 0.3s;
        transform: translateY(-5px);
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .contact {
    font-size: 12px;
    width: 180px;
    img {
      width: 30px;
    }
  }
}
</style>
