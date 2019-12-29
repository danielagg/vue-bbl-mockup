<template>
  <div>
    <div class="container">
      <div class="inner-container">
        <router-link class="btnHomeLink" to="/">S2P Contract Maintenance</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style scoped>
.container {
  background: #2d7df3;
  height: 4em;
}

.inner-container {
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.btnHomeLink {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 26px;
}
</style>
