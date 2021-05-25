<template>
  <div class="products_container">
    <h2>Our new products:</h2>
    <div class="card">
      <div class="cards__container">
        <ProductCard
          v-for="(item, index) in CARD_LIST"
          :key="index"
          :title="item.title"
          :text="item.text"
          :btn="item.btn"
        />
      </div>
    </div>
  </div>
</template>


<script>
import ProductCard from "@/components/ProductCard";
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
    ProductCard,
  },
  data() {
    return {
      CARD_LIST: CARD_LIST,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
	width: 100%;
}
.products_container {
  max-width: 1376px;
  margin: 0 auto;
}

.cards__container {
	display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 1200px) {
	.card {
		display: block;
		padding: 0px 10px 0px 10px;
	}
	.cards__container {
		justify-content: space-between;
	}
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
	.card {
		display: block;
		padding: 0px 10px 0px 10px;
	}
	.cards__container {
	}
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
}
	.card {
		display: block;
		padding: 0px 10px 0px 10px;
	}
	.cards__container {
	}
/* 0 - 576px */
@media screen and (max-width: 576px) {
	.card {
		display: block;
		padding: 0px 10px 0px 10px;
	}
	.cards__container {
		flex-direction: column;
		width: 100%;
		display: block;
		justify-content: center;
	}
}
</style>
