<template>
  <div class="products products_container">
		<h2>Our new products:</h2>
		<div class="cards__container">
			<ProductCard v-for="(item, index) in CARD_LIST" :key="index"
			:title="item.title"
			:text="item.text"
			:btn="item.btn"/>
		</div>
  </div>

</template>


<script>

import ProductCard from "@/components/ProductCard"
const CARD_LIST = [
	{
		title: "Kuma Breeder",
		text: "Yield Farming Protocol for meme coins. Deposit your meme coins, earn passive income.",
		btn: {
			label: "Go to the App",
		link: "https://app.kumatoken.com",
		}
		
	}, 
	{
		title: "Kuma Dex",
		text: "Decentralized, vAMM based perpetual contract trading protocol for meme coins.Up to 25x long/short leverage trading.",
		btn: {
			label: "Comming Soon",
		link: "1",
		disabled: true
		}
		
	},
];
export default {
  name: "Products",
	components: {
		ProductCard
	},
	data() {
    return {
      CARD_LIST: CARD_LIST,
    };
  },
};
</script>

<style lang="scss" scoped>
.cards__container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.products_container {
	max-width: 1376px;
	margin: 0 auto;
}
.products_container h2 {
font-family: "Patrick";
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 65px;
text-align: center;

color: #232323;

}
</style>