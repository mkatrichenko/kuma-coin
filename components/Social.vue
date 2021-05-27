<template>
  <div class="smm">
    <a
      :href="item.link"
      class="smm__item"
      v-for="(item, index) in SMM_LIST"
      :key="index"
    >
      <img :src="item.img" alt="" />
    </a>
  </div>
</template>

<script>
const SMM_LIST = [
  {
    img: "/smm/coingek.png",
    link: "https://www.coingecko.com/en/coins/kuma-inu"
  },
  {
    img: "/smm/defipulse.png",
    link: "https://www.coingecko.com/en/coins/kuma-inu"
  },
  {
    img: "/smm/Unicorn.png",
    link:
      "https://app.uniswap.org/#/swap?outputCurrency=0x3f5dd1a1538a4f9f82e543098f01f22480b0a3a8&use=V2"
  },
  {
    img: "/smm/web.png",
    link: "https://www.kumatoken.com/"
  },
  {
    img: "/smm/medium.png",
    link: "https://kumainu.medium.com/"
  },
  {
    img: "/smm/reddit.png",
    link: "https://www.reddit.com/r/KumaInu/"
  },
  {
    img: "/smm/twitter.png",
    link: "https://twitter.com/KumaInuOfficial"
  },
	{
		img: "/smm/telegra.png",
    link: "https://t.me/KumaInuOfficial"
	},
];
export default {
  name: "SMM",
  data() {
    return {
      SMM_LIST: SMM_LIST
    };
  }
};
</script>

<style lang="scss" scoped>
.smm {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0 32px;

  .smm__item {
    width: 48px;
    margin: 0 8px;
    transition: 0.2 all ease-out;

    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }

    @media screen and (max-width: 767px) {
      width: 32px;
      margin: 0 4px;
    }

    img {
      width: 100%;
    }
  }
}
</style>
