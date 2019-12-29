<template>
  <ul>
    <li v-for="(item, index) in contracts" :key="index" @click="onClick(item)">
      <div :class="[contractClass, (selectedContract === item) ? activeClass : '']">
        <h1>{{ item.AgreementNo }}</h1>
        <p class="supplier">
          Supplied by
          <span class="supplier-name">{{ item.CompanyCodeDesc }}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contracts: {
      type: Array,
      required: true
    },
    selectedContract: {
      type: Object,
      required: true
    },
    setSelectedContract: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      activeClass: "activeClass",
      contractClass: "contractClass"
    };
  },
  methods: {
    onClick: function(item) {
      this.setSelectedContract(item);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 4.5rem;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 70vh;
}

.contractClass {
  cursor: pointer;
  opacity: 0.5;
  padding: 1.5rem;
}

.contractClass:hover {
  opacity: 1;
}

.activeClass {
  opacity: 1;
  background: white;
  border-radius: 36px 0 0 36px;
}

h1 {
  font-size: 1.3rem;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #e4e4e4;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--lighter-gray);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gray);
}
</style>
