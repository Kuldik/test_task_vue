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
      @click="showModal = !showModal"
    >
      {{ buttonText }}
    </div>
    <ModalPopup
      v-if="!product.available && showModal"
      @close="showModal = false"
      class="modal"
    >
      <template v-slot:header>
        <div>
          <h2 class="modal__title">Сообщите о поступлении</h2>
        </div>
      </template>
      <template v-slot:body>
        <!-- prettier-ignore -->
        <p class="modal__text">Введите ваш email, чтобы получать уведомления о поступлении товара.</p>
        <div class="modal__form">
          <input class="modal__input" type="email" placeholder="Ваш email" />
          <div class="modal__button-box">
            <button class="modal__button" @click="showModal = false">
              Отправить
            </button>
            <button class="modal__button" @click="showModal = false">
              Закрыть
            </button>
          </div>
        </div>
      </template>
    </ModalPopup>
  </div>
</template>

<script>
import ModalPopup from "./ModalPopup.vue";

export default {
  components: {
    ModalPopup,
  },
  data() {
    return {
      buttonText: this.product.available ? "Купить" : "Сообщить о поступлении",
      showModal: false,
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

.modal {
  &__title {
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  &__text {
    font-size: 14px;
    padding-bottom: 10px;
  }
  &__input {
    margin-bottom: 10px;
    background-color: transparent;
    border: 1px solid $color-border-active;
    border-radius: 5px;
    padding: 5px;
  }
  &__button-box {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  &__button {
    border-radius: 4px;
    border: 1px solid #7397f5;
    color: #7397f5;
    font-weight: bold;
    padding: 12px 16px;
    line-height: 100%;
    transition: all 0.2s;
    text-align: center;
    bottom: 0;

    &:hover {
      color: $color-white;
      background-color: #7397f5;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
}
</style>
