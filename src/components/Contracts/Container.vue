<template>
  <div class="wrapper">
    <TopBar />
    <div class="container">
      <ContractList v-if="contracts.length" :contracts="contracts" class="contract-list" />
      <ContractDetail class="contract-detail" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopBar from "./TopBar";
import ContractList from "./ContractList";
import ContractDetail from "./ContractDetail";

export default {
  components: {
    TopBar,
    ContractList,
    ContractDetail
  },
  data() {
    return {
      contracts: [],
      selectedContract: null
    };
  },
  async created() {
    const result = await axios.get(
      "/api/sapdata/Get?query=ContractHeadSet?$filter=((CompanyCode eq 'Z200')) and ((ValidityStart eq '20181229'))&$top=10&$inlinecount=allpages"
    );
    this.contracts = result.data.d.results.slice(0, 10);
    this.selectedContract = this.contracts[0];
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
  width: 30%;
}
.contract-detail {
  width: 70%;
  margin: 3rem 0 3rem 1rem;
}
</style>
