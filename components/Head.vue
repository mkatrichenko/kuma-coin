<template>
  <div class="head">
    <transition name="bg">
      <div class="bg" v-if="isLoaded"></div>
    </transition>
    <div class="container">
      <transition name="text">
        <h1 class="head__title" v-if="isLoaded">
          Kuma Dex
        </h1>
      </transition>
      <transition name="text">
        <p class="head__text" v-if="isLoaded">
          Kuma Inu ($KUMA) is a community-focused, decentralized cryptocurrency
          for different projects related to The Kuma Inu token. The Next project
          is here in your hands. <a href="/" class="link">Hold.</a>
        </p>
      </transition>
      <transition name="fade">
        <div class="main__img" v-if="isLoaded">
          <img src="@/assets/img/head/main.png" alt="" />
        </div>
      </transition>
      <transition name="coin_1_animation">
        <div class="coin coin_1" v-if="isLoaded">
          <img src="@/assets/img/head/coin_1.png" alt="" />
        </div>
      </transition>
      <transition name="coin_2_animation">
        <div class="coin coin_2" v-if="isLoaded">
          <img src="@/assets/img/head/coin_2.png" alt="" />
        </div>
      </transition>
      <div class="add">
        <img src="@/assets/img/head/text.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      isLoaded: false
    };
  },
  created() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  width: 100%;

  position: relative;
  padding-bottom: 140px;
  padding-top: 180px;

  .bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("../assets/img/head/bg.png");
  }

  @media screen and (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 32px;
  }
}

.container {
  max-width: 1200px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;
  }
}

.head__title {
  margin: 0;
  font-family: "Patrick";
  font-weight: 600;
  font-size: 94px;
  line-height: 83px;
  color: #fefefe;
  max-width: 275px;
  text-align: left;
  position: relative;
  z-index: 2;
}

.head__text {
  margin-top: 36px;
  max-width: 335px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #fefefe;
  text-align: left;

  .link {
    text-decoration: underline;
    color: #fefefe;
  }
}

.main__img {
  position: absolute;
  max-width: 730px;
  width: 33%;
  left: 55%;
  transform: translateX(-50%);
  bottom: -90px;
  z-index: 5;
	@media screen and (max-width: 1919px) {
		width: 38%;
	}
  @media screen and (max-width: 767px) {
    position: static;
    transform: none;
    width: 350px;
  }

  img {
    width: 100%;
  }
}

.coin {
  position: absolute;
  transform: translateX(-50%);

  img {
    width: 100%;
  }

  &.coin_1 {
    width: 206px;
    right: 10%;
    z-index: 4;
    bottom: 16px;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &.coin_2 {
    width: 136px;
    right: 15%;
    z-index: 4;
    bottom: 50%;

    @media screen and (max-width: 767px) {
      left: -50px;
      width: 50px;
    }
  }
}

.add {
  position: absolute;
  right: 45px;
  top: 44%;
  width: 205px;
  transform: rotateZ(8deg);

  @media screen and (max-width: 767px) {
    position: static;
    transform: none;
    width: 200px;
  }

  img {
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .head__title {
    max-width: 100%;
  }
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
}

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .head__title {
    width: 100%;
    max-width: none;
  }
  .head__text {
    max-width: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.coin_1_animation-enter-active,
.coin_1_animation-leave-active {
  transition: all 0.5s;
}
.coin_1_animation-enter, .coin_1_animation-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10%);
}

.coin_2_animation-enter-active,
.coin_2_animation-leave-active {
  transition: all 0.5s;
}
.coin_2_animation-enter, .coin_1_animation-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.bg-enter-active,
.bg-leave-active {
  transition: all 0.5s;
}
.bg-enter, .bg-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}

.text-enter-active,
.text-leave-active {
  transition: all 0.5s;
}
.text-enter, .text-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(15px);
}
</style>
