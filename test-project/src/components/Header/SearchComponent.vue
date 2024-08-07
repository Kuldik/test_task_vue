<template>
  <form class="search" :class="{ 'search--focused': inFocus }">
    <img src="../../assets/icons/search.svg" alt="Поиск" class="search__logo" />
    <input
      v-model="text"
      type="text"
      class="search__field"
      :placeholder="placeholder"
      @focus="inFocus = true"
      @blur="inFocus = false"
    />
    <input
      v-if="text"
      type="button"
      value=""
      class="search__reset"
      @click="clearField"
    />
    <input
      v-if="text && submitBtn"
      type="submit"
      value="Найти"
      class="search__submit"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      inFocus: false,
    };
  },
  props: {
    placeholder: String,
    submitBtn: Boolean,
  },
  methods: {
    clearField() {
      this.text = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid $color-border;
  border-radius: 5px;
  height: 2.5em;
  flex-grow: 1;
  display: flex;
  align-items: center;
  transition: border-color 0.2s;

  &--focused {
    border-color: $color-border-active;
  }

  &__reset {
    background-image: url("@/assets/icons/reset-light.svg");
    background-size: auto;
    height: 24px;
    min-width: 24px;
    margin-right: 8px;
    transition: background-image 0.2s;

    &:hover {
      background-image: url("@/assets/icons/reset-dark.svg");
    }
  }

  &__submit {
    font: bold 14px PTsans;
    background-color: $color-border-active;
    color: $color-white;
    border-radius: 8px;
    height: 38px;
    padding: 0 16px;
    margin-right: 4px;
    transition: background-color 0.2s;
    min-width: auto;
    &:hover {
      background-color: $color-brand;
    }
  }

  &__logo {
    margin-left: 10px;
    margin-right: 7px;
  }

  &__field {
    flex-grow: 1;
    margin-right: 8px;
    min-width: 100px;
  }
}
</style>
