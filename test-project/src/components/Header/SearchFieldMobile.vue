<template>
  <form class="search" :class="{ 'search--focused': inFocus }">
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
    <input type="submit" value="Найти" class="search__submit" />
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
  display: flex;
  height: 2.5em;
  align-items: center;
  border-bottom: 1px solid $color-border;
  font-size: 16px;
  transition: all 0.2s;
  flex-grow: 1;

  &--focused {
    border-color: $color-brand;
  }

  &__field {
    margin-right: 16px;
    flex-grow: 1;
  }

  &__submit {
    font: normal 16px PTsans;
    background-color: $color-brand;
    color: $color-white;
    border-radius: 5px;
    height: 38px;
    padding: 0 16px;
    min-width: auto;
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
}
</style>
