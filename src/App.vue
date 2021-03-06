<template>
  <div id="appContent">
    <div>
      <Navigation></Navigation>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/general/Footer";
import Navigation from "@/components/general/Navigation";
export default {
  name: "App",
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style>
@import "./assets/globalVariables.css";
html,
body {
  height: 100%;
  margin: 0;
}
#appContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
footer {
  flex-shrink: 0;
}
button {
  cursor: pointer;
  background-color: white;
  border: 2px solid black;
}
button.inverse {
  color: white;
  border: 2px solid white;
  background-color: black;
}
</style>
