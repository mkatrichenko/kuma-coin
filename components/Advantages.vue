<template>
  <div class="advantages">
    <div class="coin coin_1">
      <img src="@/assets/img/advantages/coin_3.png" alt="" />
    </div>
    <div class="coin coin_2">
      <img src="@/assets/img/advantages/coin_4.png" alt="" />
    </div>
    <div class="paws">
      <img src="@/assets/img/advantages/paws.png" alt="" />
    </div>
    <div class="container">
      <div class="advantages__card">
        <div class="card__icon">
          <img src="@/assets/img/advantages/simple.png" alt="" />
        </div>
        <h4 class="card__title">Simple as that!</h4>
        <p class="card__text">
          Token Name - Kuma Inu<br />Token Symbol - $KUMA <br />Total Supply - 1
          Quadrillion<br />Liquidity - Locked
        </p>
      </div>
      <div class="advantages__card">
        <div class="card__icon">
          <img src="@/assets/img/advantages/tokenomics.png" alt="" />
        </div>
        <h4 class="card__title">No advanced tokenomics</h4>
        <p class="card__text">
          We believe this token should be as simple as possible. No advanced
          functions of smart contracts are used.
        </p>
      </div>
      <div class="advantages__card">
        <div class="card__icon">
          <img src="@/assets/img/advantages/simple.png" alt="" />
        </div>
        <h4 class="card__title">Community Driven</h4>
        <p class="card__text">
          This token is fully decentralized and is community-driven. Thins are
          on rails because of our beloved Kuma Ina Family.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantages",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advantages {
  padding-top: 195px;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 767px) {
    padding: 50px 0 32px;
  }
}
.container {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin: 0 -23px;
  max-width: 971px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    box-sizing: border-box;
  }
}

.advantages__card {
  border: 3px solid var(--brand);
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  margin: 0 23px;
	padding: 75px 15px 10px 15px;
  width: calc(33% - 23px);

  @media screen and (max-width: 767px) {
    padding: 45px 12px 0;
  }

  .card__title {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;

    @media screen and (max-width: 767px) {
        margin: 0 0 12px;
    }
  }
  .card__text {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  .card__icon {
    position: absolute;
    width: 144px;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 767px) {
      width: 100px;
      top: -50px;
    }

    img {
      width: 100%;
    }
  }
}

.coin {
  position: absolute;

  img {
    width: 100%;
  }

  &.coin_1 {
    right: 0;
    top: 50px;
    width: 50px;
  }

  &.coin_2 {
    left: 0;
    bottom: 0;
    width: 90px;
  }
}

.paws {
  position: absolute;
  bottom: -180px;
  right: 24%;
  width: 180px;

  img {
    width: 100%;
  }
}

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .container {
    display: block;
    padding: 16px;
  }
  .advantages__card {
    width: 100%;
    margin: 70px 0 0;
  }
  .paws {
    display: none;
  }
  .coin img {
    display: none;
  }
}
</style>
