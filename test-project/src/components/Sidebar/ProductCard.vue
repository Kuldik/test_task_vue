<template>
  <div class="card">
    <div
      class="card__header"
      :class="{
        'header-unavailable': !product.available,
      }"
    >
      <div class="card__bestSeller" v-if="product.isBestSeller">
        Хит продаж
        <img src="../../assets/icons/fire.svg" alt="BestSeller" />
      </div>
      <div class="card__label" v-if="product.labelPercent !== 0">
        {{ product.labelPercent }}%
      </div>
    </div>
    <div class="card__brand">Бренд</div>
    <router-link to="" class="card__title">{{ product.name }}</router-link>
    <div class="card__price price" v-if="product.available">
      <div class="price__label">{{ product.labelPrice }} ₽</div>
      <div class="price__full">{{ product.fullPrice }} ₽</div>
    </div>
    <div
      class="card__button"
      :class="{ 'card__button--available': product.available }"
    >
      {{ buttonText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonText: this.product.available ? "Купить" : "Сообщить о поступлении",
    };
  },
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  min-height: 358px;
  position: relative;

  &__header {
    height: 200px;
    background: #f8f8fa url("../../assets/icons/product-pic.svg") no-repeat
      center;
    position: relative;
    margin-bottom: 16px;
  }

  .header-unavailable {
    background-color: #f8f8faa7;
    filter: invert(10%) sepia(100%) saturate(0%) hue-rotate(180deg);
  }

  &:hover &__header {
    background-size: 80px 80px;
    @include _840 {
      background-size: auto;
    }
  }

  &:hover &__title {
    color: $color-font-hover;
    @include _840 {
      color: inherit;
    }
  }

  &__bestSeller {
    background-color: $color-white;
    border-radius: 4px;
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 8px;
  }
  &__title {
    margin-bottom: 10px;
    text-decoration: none;
    color: $color-font-main;
    transition: color 0.2s;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__price {
    margin-bottom: 16px;
  }

  &__label {
    color: $color-white;
    background-color: $color-brand;
    padding: 6px 10px;
    font-weight: bold;
    position: absolute;
    left: 10px;
    bottom: 8px;
    border-radius: 4px;
  }

  &__brand {
    margin-bottom: 8px;
    color: $color-font-second;
  }

  &__button {
    border-radius: 4px;
    border: 1px solid $color-font-second;
    color: $color-font-second;
    font-weight: bold;
    padding: 12px 16px;
    line-height: 100%;
    transition: all 0.2s;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    &:hover {
      color: $color-font-main;
      border-color: $color-font-main;
    }
    &--available {
      color: $color-brand;
      border-color: $color-brand;
      min-width: 25%;
      width: 75px;
      margin-top: 0;
      &:hover {
        background-color: $color-brand;
        color: $color-white;
        border-color: $color-brand;
      }
    }
  }
}
.price {
  display: flex;
  align-items: center;
  line-height: 100%;
  &__label {
    font-weight: bold;
    font-size: 16px;
    margin-right: 8px;
  }
  &__full {
    font-size: 12px;
    color: $color-font-second;
    text-decoration: line-through;
  }
}
</style>
