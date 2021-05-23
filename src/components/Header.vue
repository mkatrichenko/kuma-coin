<template>
  <header>
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
      </div>
    </div>
  </header>
</template>

<script>
const NAV_LIST = [
  {
    label: "Apps",
    link: "#kokoko",
  },
  {
    label: "Price Chart",
    link: "#kokoko",
  },
  {
    label: "Donate",
    link: "#kokoko",
  },
  {
    label: "More",
    link: "#kokoko",
  },
];
export default {
  name: "Header",
  data() {
    return {
      NAV_LIST: NAV_LIST,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

.nav__container {
  display: flex;
  list-style: none;

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
}
</style>
