<template>
  <div class="card">
    <div class="card__headdr">
			<h1>{{title}}</h1>
		</div>
		<div class="card__text">
			<p>{{text}}</p>
		</div>
		<div class="card__btn">
			<a href="#">{{btnLabel}}</a>
			</div>
  </div>

</template>


<script>
export default {
  name: "Products",
	title: "String",
  props: {
    title: String,
		text: String,
		btnLabel: String,
  },
};
</script>