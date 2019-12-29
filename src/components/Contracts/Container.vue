<template>
  <div class="wrapper">
    <TopBar />
    <div class="container">
      <ContractList class="contract-list" />
      <ContractDetail class="contract-detail" />
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import ContractList from "./ContractList";
import ContractDetail from "./ContractDetail";
export default {
  components: {
    TopBar,
    ContractList,
    ContractDetail
  }
};
</script>

<style scoped>
.wrapper {
  background: #f3f3f3;
  min-height: 100vh;
}
.container {
  display: flex;
  width: 75%;
  margin: 0 auto;
}
.contract-list {
  width: 25%;
}
.contract-detail {
  width: 75%;
  margin: 3rem 0;
}
</style>
