<template>
  <div class="roadmap__container container">
    <div class="roadmap__title">
      <h2>Roadmap</h2>
    </div>
    <div class="roadmap__inner">
      <h5>Our roadmap represents our most obvious goals</h5>
    </div>
    <div class="paw bg">
      <img src="..//assets/img/paw.png" alt="" />
    </div>
    <div class="vector__first bg">
      <img src="..//assets/img/vector-road1.png" alt="" />
    </div>
    <div class="vector__second bg">
      <img src="..//assets/img/vector-road2.png" alt="" />
    </div>
    <div class="list">
      <div class="roadmap__list first">
        <img src="..//assets/img/road1.png" alt="" />
        <ul>
          <li>- $KUMA Uniswap Listing</li>
          <li>- CoinGecko Listing</li>
          <li>- CoinMarketCap Listing</li>
          <li>- 2,000 Telegram Members"</li>
          <li>- 5,000 Holders</li>
          <li>- Community Marketing Fund"</li>
        </ul>
      </div>
      <div class="roadmap__list second">
        <img src="..//assets/img/road2.png" alt="" />
        <ul>
          <li>- Website Redesign</li>
          <li>- $dKUMA Launch & Uniswap Listing</li>
          <li>- Kuma Breeder Launch</li>
          <li>- Centralized Exchange Listings"</li>
          <li>- 10,000 Holders</li>
        </ul>
      </div>
      <div class="roadmap__list thrid">
        <img src="..//assets/img/road3.png" alt="" />
        <ul>
          <li>- Kuma Breeder dApp Redesign</li>
          <li>- 20,000 Holders</li>
          <li>- Expand Marketing + Development Team</li>
          <li>- Smart Contract Audit</li>
          <li>- Kuma Dex Launch</li>
          <li>- Huge Partnerships</li>
        </ul>
      </div>
      <div class="roadmap__list fourth">
        <img src="..//assets/img/road4.png" alt="" />
        <ul>
          <li>- Kuma Dex Staking Launch</li>
          <li>- Market Expansion</li>
          <li>- Kuma Inu NFT Products <br/>(Marketplace + AuctionPad)</li>
          <li>- Influencer Marketing</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
// 	data() {
// 		return {
// 		firstList: "- $KUMA Uniswap Listing",
// 		secondList: "- CoinGecko Listing",
// 		thirdList: "- CoinMarketCap Listing",
// 		fourthList: "- 2,000 Telegram Members",
// 		fifthList: "- 5,000 Holders",
// 		sixList: "- Community Marketing Fund",
// 	}
// 	}
// };
</script>

<style lang="scss" scoped>
.roadmap__container {
  padding-top: 100px;
  position: relative;

  @media screen and (max-width: 767px) {
    padding-top: 32px;
  }
}
.roadmap__title {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;

  @media screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 1.3;

    h2 {
      margin: 0 0 16px;
    }
  }
}
.roadmap__inner {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 25px;

    h5 {
      margin: 0 0 12px;
    }
  }
}
.paw {
  position: absolute;
  top: 155px;
  right: -100px;
  width: 1250px;

  img {
    width: 100%;
  }
}
.vector__first {
  position: absolute;
  top: 370px;
  right: 42%;
  width: 273px;

  img {
    width: 100%;
  }
}
.vector__second {
  position: absolute;
  top: 925px;
  right: 42%;
  width: 295px;

  img {
    width: 100%;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
}
.roadmap__list {
  margin-bottom: 150px;
  flex-direction: column;
  list-style: none;
  align-items: start;
  justify-content: start;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  width: 35%;
  text-align: left;

  li {
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      margin-bottom: 12px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 16px;
    font-size: 16px;
    line-height: 18px;
    margin: 0 auto 16px;
    max-width: 310px;
    

    ul {
      padding: 0;
    }
  }
}
.roadmap__list ul {
  list-style: none;
}

.bg {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .vector__first {
    display: none;
  }
  .vector__second {
    display: none;
  }
  .paw {
    display: none;
  }
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
  .vector__first {
    display: none;
  }
  .vector__second {
    display: none;
  }
  .paw {
    display: none;
  }
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
  .vector__first {
    display: none;
  }
  .vector__second {
    display: none;
  }
  .paw {
    display: none;
  }
}

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .roadmap__inner h5 {
    padding: 0 20px;
  }
  .vector__first {
    display: none;
  }
  .vector__second {
    display: none;
  }
  .paw {
    display: none;
  }
}
</style>
