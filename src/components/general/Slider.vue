<template>
  <div class="slider">
    <img
      v-for="image in images"
      :src="require(`@/assets/${image}`)"
      :key="image"
      class="mySlides"
    />

    <button class="button-left" v-on:click="plusDivs(-1)">&#10094;</button>
    <button class="button-right" v-on:click="plusDivs(1)">&#10095;</button>
  </div>
</template>
<script>
var slideIndex = 1;
var timeOut = undefined;
export default {
  props: {
    images: Array,
  },
  mounted: function () {
    this.showDivs(slideIndex);
    this.plusDivs();
  },
  unmounted: function () {
    if (timeOut) {
      clearTimeout(timeOut);
    }
  },
  methods: {
    plusDivs: function (n) {
      if (!n) n = 1;
      this.showDivs((slideIndex += n));
      if (timeOut !== undefined) {
        clearTimeout(timeOut);
        timeOut = setTimeout(this.plusDivs, 5000);
      } else {
        timeOut = setTimeout(this.plusDivs, 5000);
      }
    },
    showDivs: function (n) {
      var x = document.getElementsByClassName("mySlides");
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
<style>
.slider {
  position: relative;
}
.mySlides {
  height: 300px;
  margin: auto;
  display: none;
}
.button-left,
.button-right {
  position: absolute;
  height: 2em;
  width: 2em;
  transform: translate(0, -50%);
}
.button-left {
  top: 50%;
  left: 0;
}
.button-right {
  top: 50%;
  right: 0;
}
</style>
