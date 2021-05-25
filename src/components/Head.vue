<template>
  <div class="head">
    <div class="container">
      <h1 class="head__title">
        We present you The <br /><span class="orange">New Icon</span>
      </h1>
      <p class="head__text">
        Kuma Inu ($KUMA) is a community-focused, decentralized cryptocurrency
        for different projects related to The Kuma Inu token. The Next project
        is here in your hands. <a href="/" class="link">Hold.</a>
      </p>
      <div class="main__img">
        <img src="@/assets/img/head/main.png" alt="" />
      </div>
      <div class="coin coin_1">
        <img src="@/assets/img/head/coin_1.png" alt="" />
      </div>
      <div class="coin coin_2">
        <img src="@/assets/img/head/coin_2.png" alt="" />
      </div>
      <div class="add">
        <img src="@/assets/img/head/text.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/img/head/bg.png");
  position: relative;
  padding-bottom: 140px;
  padding-top: 180px;
}

.head__title {
  margin: 0;
  font-family: "Patrick";
  font-weight: normal;
  font-size: 94px;
  line-height: 63px;
  color: #fefefe;
  max-width: 400px;
  text-align: left;
  position: relative;
  z-index: 2;

  .orange {
    position: relative;
    z-index: 3;
    margin-left: 16px;
    font-size: 48px;
    line-height: 1;

    &::after {
      content: "";
      position: absolute;
      background-color: var(--brand);
      top: -8px;
      bottom: -8px;
      left: -16px;
      right: -16px;
      z-index: -1;
      border-radius: 16px;
    }
  }
}

.head__text {
  margin-top: 60px;
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
  width: 51%;
  left: 55%;
  transform: translateX(-50%);
  bottom: -20%;
  z-index: 5;

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
        left: 73%;
        z-index: 4;
        bottom: 16px;
    }

    &.coin_2 {
        width: 136px;
        left: 65%;
        z-index: 4;
        bottom: 50%;
    }
}

.add {
    position: absolute;
    right: 50px;
    top: 50%;
    width: 195px;
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
	.main__img {
		position: static;
	}
}
</style>
