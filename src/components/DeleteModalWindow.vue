<template>
  <div class="delete-modal-window">

      <h2 class="delete-modal-window__title">Видалити фільм?</h2>
      <div class="delete-modal-window__btns">

        <!-- Delete movie -->
        <button
            class="delete-modal-window__btn"
            @click="deleteMovie"
        >
          Так
        </button>

        <!-- Close modal -->
        <button
            class="delete-modal-window__btn"
            @click="closeModal"
        >
          Ні
        </button>

      </div>
    </div>

</template>

<script>
export default {
  name: "DeleteModalWindow",
  props: {
    index: {
      type: Number
    }
  },
  methods: {
    deleteMovie() {
      this.$store.commit("deleteMovie", this.index)
      this.closeModal()
    },
    closeModal() {
      this.$emit('closeModal')
    },
  }
}
</script>

<style lang="scss" scoped>
.delete-modal-window {
  height: 235px;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.9);
  &__title {
    font-size: 40px;
    line-height: 40px;
    margin: 50px auto;
    color: #fff;
    text-align: center;
  }
  &__btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &__btn + &__btn {
    margin-left: 40px;
  }
  &__btn {
    width: 150px;
    height: 50px;
    border: 5px solid rgb(84, 6, 6);
    border-radius: 30px;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(84, 6, 6);
    color: #fff;
    transition: all .5s;
  }
  &__btn:hover {
    transform:scale(1.05);
    transition: all .5s;
  }
}
</style>