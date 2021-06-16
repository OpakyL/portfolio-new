<template>
  <div class="modal">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppModal",
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: #000;
  padding: 15px;
  border: 2px solid white;
  border-radius: 5px;

  &-buttons {
    margin-top: 15px;
    display: flex;
  }
  button {
    cursor: pointer;
    background: white;
    color: black;
    border: none;
    height: 40px;
    width: 100%;
    &:first-of-type {
      margin-right: 15px;
    }
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
    width: 80%;
  }
}
</style>
