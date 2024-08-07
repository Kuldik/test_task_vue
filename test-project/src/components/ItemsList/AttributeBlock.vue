<template>
  <div class="attribute-list">
    <div class="attribute-list__head">
      <div
        class="attribute-list__title"
        :class="{ 'attribute-list__title--centred': inputsIsClear }"
      >
        {{ attribute.name }}
      </div>
      <div
        class="attribute-list__clear"
        @click="clearAllInputs"
        v-if="!inputsIsClear"
      >
        Очистить
      </div>
    </div>
    <div class="attribute-list__search" v-if="attribute.values.length > 6">
      <search-field placeholder="Поиск" :submitBtn="false"></search-field>
    </div>
    <div class="attribute-list__body">
      <div
        class="attribute-element"
        v-for="(value, index) in attribute.values"
        :key="index"
      >
        <label class="attribute-element__name">
          <input
            type="checkbox"
            class="attribute-element__checkbox"
            v-model="checkboxses[index]"
            :id="`${attribute.name}checkbox${index}`"
          />
          <div class="attribute-element__custom-checkbox"></div>
          {{ value }}
        </label>
        <div class="attribute-element__count">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchField from "../Header/SearchComponent.vue";
export default {
  data() {
    return {
      checkboxses: new Array(this.attribute.values.length).fill(false),
    };
  },
  components: {
    SearchField,
  },
  props: {
    attribute: Object,
  },
  methods: {
    clearAllInputs() {
      for (let i = 0; i < this.attribute.values.length; i++) {
        this.checkboxses.splice(i, 1, false);
      }
    },
  },
  computed: {
    inputsIsClear() {
      return this.checkboxses.every((checkbox) => !checkbox);
    },
  },
};
</script>

<style lang="scss" scoped>
.attribute-list {
  &__head {
    position: relative;
    font-size: 16px;
    margin-bottom: 16px;
    height: 20px;
  }

  &__search {
    margin-bottom: 16px;
  }

  &__title {
    position: absolute;
    left: 0;
    font-weight: bold;
    transition: all 0.3s ease-out;
    flex-grow: 0;
    &--centred {
      left: 50%;
      flex-grow: 1;
      text-align: center;
      transform: translateX(-50%);
    }
  }

  &__clear {
    cursor: pointer;
    font-size: 12px;
    color: $color-font-second;
    text-decoration: underline;
    transition: color 0.2s;
    position: absolute;
    right: 0;

    &:hover {
      color: $color-font-main;
    }
  }

  &__body {
    max-height: 180px;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $color-icons;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #7397f5;
    }
  }
}
.attribute-element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &__checkbox {
    display: none;
  }

  &__name:hover &__custom-checkbox {
    border-color: $color-brand;
  }

  &__name {
    display: flex;
    align-items: center;
  }

  &__count {
    font-size: 12px;
    color: $color-font-second;
  }

  &__checkbox:checked + &__custom-checkbox {
    background: url("../../assets/icons/checkbox-checked.svg");
    background-size: contain;
  }

  &__checkbox:not(:checked) + &__custom-checkbox {
    background: none;
  }

  &__custom-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid $color-border;
    border-radius: 3px;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;
  }
}
</style>
