<template>
  <div class="card">
    <div class="card__header">
			<h3 class="card__title">{{title}}</h3>
		</div>
		<div class="card__text">
			<p>{{text}}</p>
		</div>
		<div class="card__btn">
			<BaseButton :link="btn.link" :label="btn.label" size="md"  />
			</div>
  </div>

</template>


<script>
import BaseButton from '@/components/Button.vue'
export default {
  name: "ProductCard",
	components: {
		BaseButton
	},
  props: {
    title: String,
		text: String,
		btn: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
	background: #F6A32F;
	border-radius: 16px;
	max-width: 650px;
}
.card__title {
	font-family: "Patrick";
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 65px;
	color: #FFFFFF;
}
.card__text {
	font-family: "Quicksand";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 28px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #FFFFFF;
}
.card__btn {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>