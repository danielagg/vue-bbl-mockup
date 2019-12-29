<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

:root {
  --primary-color: #2d7df3;
  --gray: #707070;
  --lighter-gray: #a7a7a7;
  --lightest-gray: #fafafa;
}

body,
input {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.8em;
}

h2 {
  font-weight: normal;
}
</style>
