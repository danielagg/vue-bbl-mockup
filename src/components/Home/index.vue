<template>
  <div class="container">
    <div class="inner-container">
      <div v-show="userName.length">
        <h1>Source to Pay Contract Maintenance</h1>
        <h2>Hi there, {{ userName }}.</h2>
        <p>
          Welcome to an end-to-end contract management platform, where you can
          easily view and edit contracts.
        </p>
        <router-link class="btnContracts" to="contracts"
          >Manage Contracts</router-link
        >
      </div>
      <div v-show="!userName.length">
        <h1>Loading user information...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeComponent",
  data() {
    return {
      userName: ""
    };
  },
  async created() {
    const result = await axios.get("/api/Users/me");
    this.userName = result.data.name;
  }
};
</script>

<style scoped>
h1,
h2,
p {
  color: white;
  text-shadow: 2px 1px 1px #313131;
}

h1 {
  font-size: 2.8em;
}

h2 {
  font-weight: normal;
}

.container {
  background: url(../../assets/landingBackground.jpg) no-repeat center center
    fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner-container {
  width: 34%;
  min-height: 60%;
  transform: translateX(-10em);
}

.btnContracts {
  display: inline-block;
  margin-top: 1em;
  padding: 1.2em 2.6em;
  background: #2d7df3;
  color: white;
  border-radius: 36px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
