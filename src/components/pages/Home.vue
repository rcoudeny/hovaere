<template>
  <div class="wrapper">
    <header id="intro">
      <div>
        <span
          >De firma Hovaere is opgericht in 1999 en is sinds dien een begrip in het
          opkitten van ramen, industriebouw, plinten, …
        </span>
        <br />
        <br />
        <router-link to="/over ons"><button>Lees meer...</button></router-link>
      </div>
      <div>
        <span>+ 1 miljoen LM gekit</span>
        <br />
        <br />
        <router-link to="/contact"><button>Contact</button></router-link>
      </div>
    </header>

    <section id="fotos">
      <div class="imagecontainer">
        <img src="../../assets/mockimg/ramenendeuren.png" alt="" />
        <span>Ramen en deuren</span>
      </div>
      <div class="imagecontainer">
        <img src="../../assets/mockimg/industriebouw.jpg" alt="" />
        <span>Industriebouw</span>
      </div>
      <div class="imagecontainer">
        <img src="../../assets/mockimg/vloerenenplinten.jpg" alt="" />
        <span>Splitramen</span>
      </div>
    </section>
    <section id="begrippen">
      <div>
        <h2>22</h2>
        <h3>Jaren ervaring</h3>
      </div>
      <div>
        <span>
          <svg
            class="logo"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </span>
        <h3>Belgisch bedrijf</h3>
      </div>
      <div>
        <h2>+30</h2>
        <h3>Kleurenleuren</h3>
      </div>
      <div>
        <h2>+1.000.000 LM</h2>
        <h3>gekit</h3>
      </div>
      <div>
        <h2>22</h2>
        <h3>ATG gekeurd</h3>
      </div>
    </section>
    <section id="projecten">
      <h3>Projecten</h3>
      <div class="slider">
        <img class="mySlides" src="../../assets/mockimg/foto1.jpg" />
        <img class="mySlides" src="../../assets/mockimg/foto2.jpg" />
        <img class="mySlides" src="../../assets/mockimg/foto3.jpg" />
        <img class="mySlides" src="../../assets/mockimg/foto4.jpg" />
        <img class="mySlides" src="../../assets/mockimg/foto5.jpg" />

        <button class="button-left" v-on:click="plusDivs(-1)">&#10094;</button>
        <button class="button-right" v-on:click="plusDivs(1)">&#10095;</button>
      </div>
    </section>
  </div>
</template>

<script>
var slideIndex = 1;

var x = document.getElementsByClassName("mySlides");

export default {
  name: "Home",
  props: {
    msg: String,
  },
  mounted: function () {
    this.showDivs(slideIndex);
    carousel();
    function carousel() {
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1;
      }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 5000);
    }
  },
  methods: {
    plusDivs: function (n) {
      this.showDivs((slideIndex += n));
    },
    showDivs: function (n) {
      var i;
      if (n > x.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex - 1].style.display = "block";
    },
  },
};
</script>
<style scoped>
/* Home */
.wrapper {
  margin: 20px;
  align-content: center;
}

/* Header */
header {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 100px auto;
}
header > div {
  flex: 1;
  width: 200px;
  margin: 0 50px 0 50px;
}

/* Images */
#fotos {
  max-width: 900px;
  display: flex;
  flex-direction: row;
  margin: auto;
}
#fotos > .imagecontainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px;
  text-align: center;
}
#fotos > .imagecontainer > span {
  margin-top: 10px;
  font-size: 1.3em;
}
section#fotos img {
  width: 100%;
}

/* Random info */
#begrippen {
  display: flex;
  max-width: 1200px;
  margin: auto;
}
#begrippen > div {
  flex: 1;
  text-align: center;
}

/* Foto slider */
#projecten {
  text-align: center;
  max-width: 1200px;
  margin: auto;
}
#projecten h3 {
  font-size: 2em;
}

#projecten .mySlides {
  height: 300px;
  margin: auto;
  display: none;
}
#projecten > .slider {
  position: relative;
}
#projecten .button-left,
#projecten .button-right {
  position: absolute;
  height: 2em;
  width: 2em;
  transform: translate(0, -50%);
}
#projecten .button-left {
  top: 50%;
  left: 0;
}
#projecten .button-right {
  top: 50%;
  right: 0;
}

/* General */
.logo {
  height: 50px;
}
</style>
