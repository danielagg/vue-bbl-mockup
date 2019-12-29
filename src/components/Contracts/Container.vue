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
  height: 100vh;
}
.container {
  display: flex;
  width: 75%;
  margin: 0 auto;
}
.contract-list {
  background: blue;
  width: 30%;
  padding: 1em;
}
.contract-detail {
  background: green;
  width: 70%;
  padding: 1em;
}
</style>
