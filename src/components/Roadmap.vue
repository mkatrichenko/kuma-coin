<template>
  <div class="roadmap__container container">
    <div class="roadmap__title">
      <h2>Roadmap</h2>
    </div>
		<div class="roadmap__inner">
        <h5>Our roadmap represents our most obvious goals</h5>
      </div>
		<div class="paw">
			<img src="..//assets/img/paw.png" alt="">
		</div>
		<div class="vector__first">
			<img src="..//assets/img/vector-road1.png" alt="">
		</div>
		<div class="vector__second">
			<img src="..//assets/img/vector-road2.png" alt="">
		</div>
    <div class="list">
      <div class="roadmap__list first">
				<img src="..//assets/img/road1.png" alt="">
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
				<img src="..//assets/img/road2.png" alt="">
        <ul>
          <li>- Website Redesign</li>
          <li>- $dKUMA Launch & Uniswap Listing</li>
          <li>- Kuma Breeder Launch</li>
          <li>- Centralized Exchange Listings"</li>
          <li>- 10,000 Holders</li>
        </ul>
      </div>
      <div class="roadmap__list thrid">
				<img src="..//assets/img/road3.png" alt="">
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
				<img src="..//assets/img/road4.png" alt="">
        <ul>
          <li>- Kuma Dex Staking Launch</li>
          <li>- Market Expansion</li>
          <li>- Kuma Inu NFT Products (Marketplace + AuctionPad)</li>
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
}
.roadmap__title {
	font-family: "Patrick";
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 65px;
}
.roadmap__inner {
	font-family: "Quicksand";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 28px;
}
.paw {
	position: absolute;
  bottom: 870px;
  right: 74%;
  width: 180px;
}
.vector__first {
	position: absolute;
  bottom: 1550px;
  right: 46%;
  width: 180px;
}
.vector__second {
	position: absolute;
  bottom: 1160px;
  right: 48%;
  width: 180px;
}

.list {
	margin-top: -100px;
  display: flex;
	flex-wrap: wrap;
}
.roadmap__list {
	margin-top: 150px;
	flex-direction: column;
	list-style: none;
	font-family: "Quicksand";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 28px;
	width: 50%;
}
// .first {
// 	background: url(..//assets/img/road1.png) no-repeat left top;
// }
// .second {
// 	background: url(..//assets/img/road2.png) no-repeat left top;
// }
// .thrid {
// 	background: url(..//assets/img/road3.png) no-repeat left top;
// }
// .fourth {
// 	background: url(..//assets/img/road4.png) no-repeat left top;
// }
.roadmap__list ul {
	list-style: none;
}
</style>