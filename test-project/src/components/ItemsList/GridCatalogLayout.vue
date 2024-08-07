<template>
  <div class="grid-catalog-layout">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "../Sidebar/ProductCard.vue";
export default {
  data() {
    return {
      products: this.$store.state.products,
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>
.grid-catalog-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 24px;
  margin-top: 10px;

  @include _1200 {
    grid-template-columns: repeat(3, 1fr);
  }

  @include _1000 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
