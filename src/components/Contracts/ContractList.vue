<template>
  <ul>
    <li v-for="(item, index) in contracts" :key="index">
      <div>
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
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-top: 4.5rem;
  padding: 0 0 0 1.4em;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 70vh;
}

li {
  margin-top: 2em;
  cursor: pointer;
  opacity: 0.5;
}

li:hover {
  opacity: 1;
}

li:active {
  opacity: 1;
}

li:first-child {
  margin-top: 0;
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
