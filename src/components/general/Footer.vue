<template>
  <footer>
    <div>
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="mailto:info@hovaere.be"
            ><svg
              class="logo"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            &nbsp;info@hovaere.be</a
          >
        </li>
        <li>
          <a href="tel:0032474023994"
            ><svg
              class="logo invert"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
            &nbsp;+32 474 02 39 94</a
          >
        </li>
        <li>Hovaere Nico BV</li>
        <li>
          <a
            href="https://www.google.com/maps/place/Hovaere+Nico/@50.878771,3.4339443,17z/data=!4m5!3m4!1s0x0:0x64a8acf04a4e5dc4!8m2!3d50.8787616!4d3.436003"
            target="_blank"
          >
            Gareelstraat 4, <br />8790 Waregem</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h2>Hovaere</h2>
      <ul>
        <li>Ramen</li>
        <li>Industriebouw</li>
        <li>Plinten</li>
        <li>Referenties</li>
        <li>Over ons</li>
        <li>Contact</li>
      </ul>
    </div>

    <div><img src="../../assets/Logo_DLChemicals.png" alt="" /></div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  /* -webkit-filter: grayscale(1) invert(1);
  filter: grayscale(1) invert(1); */
  width: 400px;
}
footer {
  padding: 20px;
  background-color: var(--color-dark-redd);
  display: flex;
  justify-content: space-around;
  text-align: center;
}
footer > div {
  flex: 2;
  align-content: center;
}
footer h2 {
  color: white;
}
ul {
  padding: 0;
}
ul > li,
ul > li > a {
  list-style-type: none;
  margin: 5px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
}
ul > li > a:hover {
  text-decoration: underline;
}
.logo {
  height: 1em;
}
.invert {
  transform: scale(-1, 1);
}
</style>
