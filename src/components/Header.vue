<template>
  <header :class="['header', { scrolled: scrollPosition > 400 }]">
    <div class="container header__container">
      <div class="logo__container">
        <img src="@/assets/img/logo.png" alt="" class="logo" />
      </div>
      <div class="nav">
        <ul class="nav__container">
          <li v-for="(item, index) in NAV_LIST" :key="index" class="nav__item">
            <a :href="item.link" class="nav_link">{{ item.label }}</a>
          </li>
        </ul>
        <BaseButton
          class="buy_btn"
          link="https://app.uniswap.org/#/swap?outputCurrency=0xb525ecee288b99216cd481c56b6efbdbe9bf90b5&use=V2"
          label="Buy Kuma Inu"
          size="sm"
        />
      </div>
      <div class="burger">
        <img src="@/assets/img/hamburger.svg" alt="" />
      </div>
      <div class="mobile__nav"></div>
      <!-- <Slide right class="burger_menu">
        <div class="burger">
          <ul class="burger__list">
<li v-for="(item, index) in NAV_LIST" :key="index" class="nav__item">
            <a :href="item.link" class="nav_link">{{ item.label }}</a>
          </li>
          </ul>
          
          <BaseButton
            class="buy_btn"
            link="https://app.uniswap.org/#/swap?outputCurrency=0xb525ecee288b99216cd481c56b6efbdbe9bf90b5&use=V2"
            label="Buy Kuma Inu"
            size="sm"
          />
        </div>
      </Slide> -->
    </div>
  </header>
</template>

<script>
import BaseButton from "@/components/Button.vue";
// import { Slide } from "vue-burger-menu";

const NAV_LIST = [
  {
    label: "Apps",
    link: "/",
  },
  {
    label: "Price Chart",
    link: "/",
  },
  {
    label: "Donate",
    link: "/",
  },
  {
    label: "More",
    link: "/",
  },
];
export default {
  name: "Header",
  components: {
    BaseButton,
    // Slide,
  },
  data() {
    return {
      NAV_LIST: NAV_LIST,
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s background-color ease-out;
  z-index: 10;

  &.scrolled {
    background-color: var(--brand);
  }
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo__container {
  max-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
}

.nav {
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.nav__container {
  display: flex;
  list-style: none;
}

.nav_link {
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  margin: 0 17px;
  text-decoration: none;
}

.buy_btn {
  margin-left: 20px;
}

.burger_menu {
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
}

.burger__list {
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
  text-align: left;
}

.burger {
  position: absolute;
  width: 18px;
  height: 16px;
  right: 20px;
  top: 16px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }

  img {
    width: 100%;
  }
}

::v-deep {
  .bm-burger-button {
    position: fixed;
    width: 18px;
    height: 16px;
    left: 20px;
    top: 16px;
    cursor: pointer;
  }
}

@media screen and (max-width: 1200px) {
  .header__container {
    width: 960px;
  }
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
  .header__container {
    width: 720px;
  }
}

/* 576px - 768px */
@media screen and (max-width: 768px) {
  .header__container {
    width: 560px;
  }
}

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .header__container {
    width: 90%;
  }
}
</style>
