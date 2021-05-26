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
      <div class="burger" @click.stop="toggleMenu" v-if="!isMenuOpened">
        <img src="@/assets/img/hamburger.svg" alt="" />
      </div>
      <div
        :class="['mobile__nav', { active: isMenuOpened }]"
        v-click-outside="onClickOutside"
      >
        <div class="cross" @click.stop="toggleMenu">
          <img src="@/assets/img/cancel.svg" alt="" />
        </div>
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
    </div>
  </header>
</template>

<script>
import BaseButton from "@/components/Button.vue";
import vClickOutside from "v-click-outside";

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
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      NAV_LIST: NAV_LIST,
      scrollPosition: 0,
      isMenuOpened: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },

    onClickOutside() {
      if (this.isMenuOpened) {
        this.isMenuOpened = false;
      }
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
  max-width: 1200px;
  padding: 8px 0;
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
.nav__item {
	margin: 20px 0;
}

.buy_btn {
  margin-left: 20px;

  @media screen and (max-width: 767px) {
    margin: 0;
  }
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
  z-index: 12;

  @media screen and (max-width: 767px) {
    display: block;
  }

  img {
    width: 100%;
  }
}

.mobile__nav {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--brand);
  transform: translateX(100%);
  transition: 0.3s all ease-out;
  height: 100vh;
  width: 200px;
  padding: 0 12px;

  &.active {
    transform: none;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
}

.cross {
  position: absolute;
  width: 18px;
  height: 16px;
  right: 20px;
  top: 16px;
  cursor: pointer;
  z-index: 12;

  img {
    width: 100%;
  }
}
</style>
