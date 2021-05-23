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
            Download and install <a href="#1" class="link">Metamask wallet.</a>
          </div>
        </div>
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/ETH.png" alt="" />
          </div>
          <div class="card__title">2. <span class="orange">Buy ETH.</span></div>
          <div class="card__text">
            Run <a href="#1" class="link">Metamask</a> and then press "BUY".
          </div>
        </div>
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/Swap.png" alt="" />
          </div>
          <div class="card__title">3. <span class="orange">Swap.</span></div>
          <div class="card__text">Go to UNISWAP to swap ETH to $KUMA.</div>
        </div>
        <div class="buy__card">
          <div class="card__icon">
            <img src="@/assets/img/buy/settings.png" alt="" />
          </div>
          <div class="card__title">4. <span class="orange">Hold.</span></div>
          <div class="card__text">
            Now you just watch your $KUMA tokens grow.
          </div>
        </div>
      </div>

      <div class="buy__block">
          <div class="arrow__icon">
            <img src="@/assets/img/arrow.png" alt="" />
          </div>
        <div class="block__title">Currently you can buy $KUMA here:</div>
        <BaseButton class="buy_btn" link="#ololo" label="Buy Kuma Inu" type="secondary"/>
        <div class="block__subtitle">Price chart is here:</div>
        <BaseButton
          class="buy_btn"
          link="#ololo"
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
  padding-top: 80px;
  padding-bottom: 100px;
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
  display: flex;
  align-items: center;
  justify-content: start;

  .buy__card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .card__icon {
    width: 75px;
    margin-bottom: 24px;

    img {
      width: 100%;
    }
  }

  .card__title {
    margin-bottom: 16px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: var(--text-primary);

    .orange {
      color: var(--brand);
    }
  }

  .card__text {
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: var(--text-primary);

    .link {
      text-decoration: underline;
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
</style>
