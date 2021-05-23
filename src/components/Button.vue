<template>
  <a :href="link" :class="['btn', type, size]">{{ label }}</a>
</template>

<script>
export default {
  name: "Header",
  props: {
    label: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  font-family: "Lato";
  transition: 0.3s all ease-out;
	display: block;
	

  &.primary {
    background-color: #fff;
    color: var(--brand);

    &:hover {
      color: #fff;
      background: #ffbf65;
      box-shadow: inset 0px -2px 0px #ffddad, inset 0px 2px 0px #f39324;
    }

    &:active {
      background: #eb8e22;
      box-shadow: none;
    }
  }

  &.secondary {
    background-color: var(--brand);
    color: #fff;

    &:hover {
      background: #ffac40;
      box-shadow: inset 0px -4px 0px #ffbc5f, inset 0px 4px 0px #f39324;
    }

    &:active {
      background: #eb8e22;
      box-shadow: none;
    }
  }

  &.sm {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border-radius: 16px;
    padding: 8px 16px;
  }

  &.md {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    border-radius: 56px;
    padding: 16px 40px;
  }
}
</style>
