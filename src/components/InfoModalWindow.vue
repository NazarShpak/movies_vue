<template>
  <div class="info-modal-window">

    <div class="info-modal-window__modal"
    >
      <h2 class="info-modal-window__modal-title">Фільм додано</h2>
    </div>
  </div>

</template>

<script>
export default {
  name: "InfoModalWindow"
}
</script>

<style lang="scss" scoped>
.info-modal-window {
  position: relative;
  &__modal {
    position: absolute;
    z-index: 3;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    height: 200px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &__modal-title {
    font-size: 60px;
    line-height: 70px;
    margin: 50px auto;
    color: #fff;
    text-align: center;
  }
  &__modal-btn {
    margin: 20px 50px 0;
    width: 400px;
  }
}
</style>