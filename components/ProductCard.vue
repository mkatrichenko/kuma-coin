<template>
  <div class="card__container">
    <div class="card__header">
      <h3 class="card__title">{{ title }}</h3>
    </div>
    <div class="card__text">
      <p>{{ text }}</p>
    </div>
    <div class="card__btn">
      <BaseButton
        :link="btn.link"
        :label="btn.label"
        size="md"
        :disabled="btn.disabled"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/Button.vue";
export default {
  name: "ProductCard",
  components: {
    BaseButton,
  },
  props: {
    title: String,
    text: String,
    btn: Object,
  },
};
</script>

<style lang="scss" scoped>
.card__container {
  width: 45%;
  background: #f6a32f;
  border-radius: 16px;
  padding: 0 10px 40px 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
}
.cards__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.card__title {
  font-family: "Patrick";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
}
.card__text {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.card__btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1200px) {
}

/* 768px - 992px */
@media screen and (max-width: 992px) {
}

/* 576px - 768px */

/* 0 - 576px */
@media screen and (max-width: 576px) {
  .card__btn {
    display: flex;
  }
}
</style>
