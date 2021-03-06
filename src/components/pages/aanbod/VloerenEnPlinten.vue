<template>
  <div>
    <header><h1 style="text-align: center">Vloeren en plinten</h1></header>
    <section id="information">
      <div>
        <span>Badkamer / vloeren / plinten</span>
      </div>
    </section>
    <section id="fotos">
      <div>
        <div class="imagecontainer">
          <img src="../../../assets/mockimg/ramenendeuren.png" alt="" />
          <span class="title">Badkamer</span>
          <span class="text"
            >Voegen tussen wandtegels en douchebakken worden opgekit met een sanitaire
            polymeer.</span
          >
        </div>
        <div class="imagecontainer">
          <img src="../../../assets/mockimg/industriebouw.jpg" alt="" />
          <span class="title">Vloeren</span>
          <span class="text"
            >Zowel uitzettingsvoegen de vloeren als overgangen tussen verschillende
            materialen.</span
          >
        </div>
        <div class="imagecontainer">
          <img src="../../../assets/mockimg/vloerenenplinten.jpg" alt="" />
          <span class="title">Plinten</span>
          <span class="text"
            >Plinten worden opgekit met een afwerkingskit speciaal voor het opspuiten van
            plinten en vloeren.</span
          >
        </div>
      </div>
      <div class="imagecontainer">
        <img src="../../../assets/mockimg/vloerenenplinten.jpg" alt="" />
        <div>
          <span class="title">Kleuren keuze</span>
          <span class="text"
            >Door ons groot assortiment aan kleuren creëren we de perfecte overgang tussen
            verschillende soorten vloeren, plinten en wandtegels.</span
          >
        </div>
      </div>
    </section>
    <section id="slider">
      <h3>Projecten</h3>
      <Slider
        v-bind:images="['mockimg/foto6.jpg', 'mockimg/foto7.jpg', 'mockimg/foto8.jpg']"
      ></Slider>
    </section>
    <section></section>
  </div>
</template>
<script>
import Slider from "@/components/general/Slider";
export default {
  components: {
    Slider,
  },
};
</script>
<style scoped>
/* Information */
#information {
  margin: auto;
  padding: 100px 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

#information > div {
  display: flex;
  flex-direction: column;
}
#information > div > span {
  text-align: center;
}

/* Images */
#fotos {
  max-width: 900px;
  margin: auto;
}
#fotos > div {
  display: flex;
  flex-direction: row;
}
#fotos > div > .imagecontainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px;
  text-align: center;
}
#fotos > .imagecontainer > div {
  display: flex;
  flex-direction: column;
}
#fotos span {
  margin: 10px;
}
.title {
  font-size: 1.3em;
  text-align: left;
}
.text {
  text-align: left;
}

#slider h3 {
  text-align: center;
}

section#fotos img {
  width: 100%;
}
</style>
