<template>
  <div class="buy">
    <div class="container">
      <h2 class="buy__title">How to buy <span class="orange">$KUMA?</span></h2>
      <div class="buy__subtitle">Contract address:</div>

      <div class="copy__container">
        <div id="address" class="copy_address">
          0xb525ecee288b99216cd481c56b6efbdbe9bf90b5
        </div>
        <div class="copy_icon">
          <img
            @click="copyToClipboard()"
            :title="showTooltip ? 'Copied' : null"
            src="@/assets/img/buy/copy.svg"
            alt=""
          />
        </div>
      </div>

      <div class="card__container">
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/settings.png" alt="" />
          </div>
          <div class="card__title">
            1. <span class="orange">Installation.</span>
          </div>
          <div class="card__text">
            <h4>
              Download and install <br /><a href="#1" class="link"
                >Metamask wallet.</a
              >
            </h4>
          </div>
        </div>
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/ETH.png" alt="" />
          </div>
          <div class="card__title">2. <span class="orange">Buy ETH.</span></div>
          <div class="card__text">
            <h4>
              Run <a href="#1" class="link">Metamask</a> and then <br />
              press "BUY".
            </h4>
          </div>
        </div>
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/Swap.png" alt="" />
          </div>
          <div class="card__title">3. <span class="orange">Swap.</span></div>
          <div class="card__text">
            <h4>Go to UNISWAP to swap <br />ETH to $KUMA.</h4>
          </div>
        </div>
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/Hold.png" alt="" />
          </div>
          <div class="card__title">4. <span class="orange">Hold.</span></div>
          <div class="card__text">
            <h4>
              Now you just watch your <br />
              $KUMA tokens grow.
            </h4>
          </div>
        </div>
      </div>

      <div class="buy__block">
        <div class="arrow__icon">
          <img src="@/assets/img/arrow.png" alt="" />
        </div>
        <div class="block__title">Currently you can buy $KUMA here:</div>
        <BaseButton
          class="buy_btn"
          link="https://app.uniswap.org/#/swap?outputCurrency=0xb525ecee288b99216cd481c56b6efbdbe9bf90b5&use=V2"
          label="Buy Kuma Inu"
          type="secondary"
        />
        <div class="block__subtitle">Price chart is here:</div>
        <BaseButton
          class="buy_btn"
          link="https://www.dextools.io/app/uniswap/pair-explorer/0x27fd2f5942049bcd601428c7bcede364180b4b3f"
          label="WATCH PRICE ON DEXTOOLS"
          type="accent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/Button.vue";
export default {
  name: "Buy",
  components: {
    BaseButton,
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  methods: {
    copyToClipboard() {
      const range = document.createRange();
      range.selectNode(document.getElementById("address"));
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges(); // to deselect
      this.showTooltip = true;
      setTimeout(() => {
        this.showTooltip = false;
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buy {
  margin-top: 100px;
  padding-bottom: 100px;

  @media screen and (max-width: 767px) {
    margin-top: 0;
    padding-top: 24px;
    padding-bottom: 32px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buy__title {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  color: var(--text-primary);
  margin: 0;

  .orange {
    color: var(--brand);
  }
}

.buy__subtitle {
  margin-top: 10px;
  margin-bottom: 32px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: var(--text-primary);
}

.copy__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 40px;
  background: #f9f9f9;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
}

.copy_address {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: var(--text-primary);
}

.copy_icon {
  cursor: pointer;
  transition: 0.3s opacity ease-out;
  width: 24px;

  img {
    width: 100%;
  }

  &:hover {
    opacity: 0.5;
  }
}

.card__container {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1376px;
  padding: 0 16px;

  @media screen and (max-width: 1400px) {
    max-width: 1012px;
  }

  @media screen and (max-width: 124px) {
    max-width: 880px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }

  .buy__card {
    display: flex;
    flex-direction: column;
    align-items: none;
    text-align: left;

    @media screen and (max-width: 767px) {
      text-align: center;
      align-items: center;
    }
  }

  .card__icon {
    width: 75px;
    margin-bottom: 24px;

    @media screen and (max-width: 767px) {
      width: 55px;
      margin-bottom: 12px;
    }

    img {
      width: 100%;
    }
  }

  .card__title {
    margin-bottom: 16px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: var(--text-primary);

    @media screen and (max-width: 767px) {
      font-size: 18px;
      margin-bottom: 8px;
    }

    .orange {
      color: var(--brand);
    }
  }

  .card__text {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: var(--text-primary);

    @media screen and (max-width: 767px) {
      h4 {
        margin: 0;
      }
      margin-bottom: 8px;
    }

    .link {
      text-decoration: underline;
      color: #1a1e25;
    }
  }
}

.buy__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  position: relative;

  .block__title {
    margin-bottom: 32px;
    margin-top: 95px;
    font-size: 27px;
    line-height: 28px;
  }

  .block__subtitle {
    margin: 41px 0 32px;
    font-size: 28px;
    line-height: 28px;
  }

  .arrow__icon {
    position: absolute;
    width: 120px;
    top: 104px;
    right: -88px;

    img {
      width: 100%;
    }
  }
}

// Responsive

/* 992px - 1200px */
@media screen and(max-width: 1200px) {
}

/* 768px - 992px */
@media screen and(max-width: 992px) {
  .buy__title {
    padding: 0 20px;
  }
  .buy__block .block__title {
    padding: 0 10px;
  }
  .buy__block {
    padding: 10px 15px;
  }
  .buy__block .arrow__icon img {
    display: none;
  }
  
  .copy__container {
    padding: 15px 30px;
    width: 300px;
  }
  .copy_address {
    font-size: 10px;
  }
}

/* 576px - 768px */
@media screen and(max-width: 768px) {
  .buy__title {
    padding: 0 20px;
  }
  .buy__block .block__title {
    padding: 0 10px;
  }
  .buy__block {
    padding: 10px 15px;
  }
  .buy__block .arrow__icon img {
    display: none;
  }
  .card__container {
    justify-content: start;
    flex-direction: column;
    
  }
  .copy__container {
    padding: 15px 30px;
    width: 300px;
  }
  .copy_address {
    font-size: 10px;
  }
}

/* 0 - 576px */
@media screen and(max-width: 576px) {
  .buy__title {
    padding: 0 20px;
  }
  .buy__block .block__title {
    padding: 0 10px;
  }
  .buy__block {
    padding: 10px 15px;
  }
  .buy__block .arrow__icon img {
    display: none;
  }
  .card__container {
    justify-content: start;
    flex-direction: column;
  }
  .copy__container {
    padding: 15px 30px;
    width: 300px;
  }
  .copy_address {
    font-size: 10px;
  }
  .buy__title {
    font-size: 36px;
  }
  .card__container .buy__card {
    text-align: center;
    align-items: center;
    padding: 0;
  }
}
</style>
