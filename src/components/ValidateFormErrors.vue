<template>
  <div class="validate-form-errors">
    <p
        class="validate-form-errors__text"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ValidateFormErrors",
  data() {
    return {
      errorText: ''
    }
  },
  props: {
    validateError: {
      type: String
    }
  },
  created() {
    if(this.validateError === 'title') {
      this.errorText = 'Помилка валідації, не менше 3 символів'
    } else if (this.validateError === 'rating') {
      this.errorText =  'Помилка валідації, введіть число від 0 до 10'
    } else if (this.validateError === 'actors' || this.validateError === 'directors') {
      this.errorText =  'Помилка валідації, не менше 5 символів'
    } else if (this.validateError === 'img' || this.validateError === 'video') {
      this.errorText =  'Помилка валідації, додайте посилання'
    } else if (this.validateError === 'description') {
      this.errorText =  'Помилка валідації, не менше 15 символів'
    }
  }
}

</script>

<style scoped>
.validate-form-errors__text {
  color: red;
}
</style>