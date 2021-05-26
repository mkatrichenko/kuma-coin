<template>
  <div class="overlay">
    <div class="loader">
      <div class="loadingio-spinner-spin-dzcjlxuiuci"><div class="ldio-cb2ii5njr5e">
<div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  .loader {
    width: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    img {
      width: 100%;
    }
  }
}


@keyframes ldio-cb2ii5njr5e {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.ldio-cb2ii5njr5e div > div {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f6a32f;
  animation: ldio-cb2ii5njr5e 1s linear infinite;
}.ldio-cb2ii5njr5e div:nth-child(1) > div {
  left: 148px;
  top: 88px;
  animation-delay: -0.875s;
}
.ldio-cb2ii5njr5e > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 160px 100px;
}.ldio-cb2ii5njr5e div:nth-child(2) > div {
  left: 130px;
  top: 130px;
  animation-delay: -0.75s;
}
.ldio-cb2ii5njr5e > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 142px 142px;
}.ldio-cb2ii5njr5e div:nth-child(3) > div {
  left: 88px;
  top: 148px;
  animation-delay: -0.625s;
}
.ldio-cb2ii5njr5e > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 100px 160px;
}.ldio-cb2ii5njr5e div:nth-child(4) > div {
  left: 46px;
  top: 130px;
  animation-delay: -0.5s;
}
.ldio-cb2ii5njr5e > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 58px 142px;
}.ldio-cb2ii5njr5e div:nth-child(5) > div {
  left: 28px;
  top: 88px;
  animation-delay: -0.375s;
}
.ldio-cb2ii5njr5e > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 40px 100px;
}.ldio-cb2ii5njr5e div:nth-child(6) > div {
  left: 46px;
  top: 46px;
  animation-delay: -0.25s;
}
.ldio-cb2ii5njr5e > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 58px 58px;
}.ldio-cb2ii5njr5e div:nth-child(7) > div {
  left: 88px;
  top: 28px;
  animation-delay: -0.125s;
}
.ldio-cb2ii5njr5e > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 100px 40px;
}.ldio-cb2ii5njr5e div:nth-child(8) > div {
  left: 130px;
  top: 46px;
  animation-delay: 0s;
}
.ldio-cb2ii5njr5e > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 142px 58px;
}
.loadingio-spinner-spin-dzcjlxuiuci {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
}
.ldio-cb2ii5njr5e {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-cb2ii5njr5e div { box-sizing: content-box; }
</style>
