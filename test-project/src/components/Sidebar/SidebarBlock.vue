<template>
  <aside class="sidebar-block">
    <div class="category-block">
      <div class="category" @click="curCategoryId = null">
        <div class="category__name">
          {{ category.name }}
        </div>
        <div class="category__count">
          {{ category.productsCount }}
        </div>
      </div>
      <div
        class="category subtitle"
        :class="{ 'category--selected': curCategoryId === subtitle.id }"
        v-for="subtitle in category.subtitles"
        @click="curCategoryId = subtitle.id"
        :key="subtitle.id"
      >
        <div class="category__name">
          {{ subtitle.name }}
        </div>
        <div class="category__count">
          {{ subtitle.productsCount }}
        </div>
      </div>
    </div>

    <div class="price-box">
      <div class="price-box__title">Цена</div>
      <div class="price-box__body">
        <div class="price-box__input price-box__input--left">
          <input
            type="number"
            @change="handleMinPriceChange"
            class="price-box__field"
            v-model="curMinPrice"
          />
        </div>

        <div class="price-box__divider"></div>

        <div class="price-box__input price-box__input--right">
          <input
            type="number"
            class="price-box__field"
            v-model="curMaxPrice"
            @change="handleMaxPriceChange"
          />
        </div>
      </div>
    </div>

    <chars-list
      :attribute="{
        name: 'Бренд',
        values: [
          'Цвет',
          'Размер',
          'Материал',
          'Бренд',
          'Стиль',
          'Подача',
          'Паттерн',
          'Длина',
          'Ширина',
          'Вес',
          'Форма',
          'Текстура',
          'Полировка',
          'Запах',
          'Вкус',
        ],
      }"
      class="brand-box"
    ></chars-list>
    <chars-list
      :attribute="{
        name: 'Размер',
        values: [
          'Размер по ширине',
          'Размер по высоте',
          'Размер по объёму',
          'Размер по длине',
          'Размер по форме',
        ],
      }"
    ></chars-list>
  </aside>
</template>

<script>
import CharsList from "../ItemsList/AttributeBlock.vue";
export default {
  components: { CharsList },
  data() {
    return {
      category: {
        id: 1,
        name: "Название категории",
        productsCount: 3,
        subtitles: [
          { id: 1, name: "Название категории", productsCount: 3 },
          { id: 2, name: "Название категории", productsCount: 3 },
          { id: 3, name: "Название категории", productsCount: 3 },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-block {
  min-width: 240px;
  max-width: 280px;
  font-family: PTsans, Arial, sans-serif;
  width: 100%;
  @include _1000 {
    flex-shrink: 1;
  }
  @include _840 {
    display: none;
  }
}
.category {
  padding: 7px 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;

  &--selected {
    background-color: $color-font-bg;
  }

  &__count {
    color: $color-font-second;
  }

  &:not(.category--selected):hover {
    color: $color-brand;
  }
}
.category-block {
  font-size: 15px;
  width: 100%;
  margin-bottom: 18px;
  padding-top: 10px;
}

.price-box {
  margin-bottom: 28px;
  &__title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin-bottom: 16px;
  }
  &__divider {
    height: 1px;
    width: 10px;
    background-color: $color-border;
  }
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__input {
    position: relative;
    width: 40%;
    max-width: 120px;
    &::before {
      position: absolute;
      left: 8px;
      top: 10px;
      width: 12px;
      font-size: 13px;
      color: $color-font-second;
    }
    &--left::before {
      content: "от";
    }
    &--right::before {
      content: "до";
    }
  }

  &__field {
    border: 1px solid $color-border;
    width: calc(100% + 5px);
    padding: 8px 0 8px 26px;
    font-size: 15px;
    border-radius: 4px;

    &:focus {
      border-color: $color-border-active;
    }
  }
}
.subtitle {
  padding-left: 32px;
}
.brand-box {
  margin-bottom: 28px;
}
</style>
