<template>
  <nav>
    <div>
      <router-link to="/"><img src="../../assets/logo.png" alt="" /></router-link>

      <div class="navbar">
        <div class="dropdown">
          <span class="link" style="cursor: default"
            >Aanbod <span style="font-size: 10px">▼</span></span
          >
          <div class="dropdown-content">
            <span class="spacer"></span>
            <div class="dropdown-links">
              <router-link class="link" to="/ramen en deuren"
                >Ramen en deuren</router-link
              >
              <router-link class="link" to="/industriebouw">Industriebouw</router-link>
              <router-link class="link" to="/vloeren en plinten"
                >Vloeren en plinten</router-link
              >
            </div>
          </div>
        </div>

        <router-link class="link" to="/over ons">Over ons</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
  border-bottom: 2px solid var(--color-medium-red);
  padding: 20px;
}
nav > div {
  margin: auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  transform: translate(-20px);
  min-width: 200px;
  width: 100%;
  z-index: 1;
}
.dropdown-links {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.dropdown:hover .dropdown-content,
.dropdown:hover .dropdown-links {
  display: flex;
  flex-direction: column;
}
.link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
}
.link:hover {
  color: var(--color-dark-redd);
}
.spacer {
  background-color: transparent;
  height: 20px;
}

.dropdown:hover .dropdown-links > .link {
  padding: 10px;
  background-color: white;
}

.dropdown:hover .dropdown-links > .link:hover {
  background-color: rgb(250, 250, 250);
}

.navbar > * {
  margin: 0 20px;
}
</style>
