<template>
  <div>
    <Header></Header>
    <main class="main">
      <Sidebar></Sidebar>
      <grid-catalog-layout></grid-catalog-layout>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header/HeaderBlock.vue";
import Sidebar from "@/components/Sidebar/SidebarBlock.vue";
import GridCatalogLayout from "@/components/ItemsList/GridCatalogLayout.vue";
export default {
  name: "ProjectView",
  components: {
    Header,
    Sidebar,
    GridCatalogLayout,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin-top: 13px;
  gap: 36px;
}
</style>
