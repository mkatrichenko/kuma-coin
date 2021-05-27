<template>
  <a
    :href="!disabled ? link : null"
    :class="['btn', type, size, { disabled: disabled }]"
    >{{ label }}</a
  >
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
    disabled: {
      type: Boolean,
      default: false,
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
  white-space: nowrap;

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

  &.accent {
    background-color: #ffe3bd;
    color: var(--brand);

    &:hover {
      background-color: #ffac40;
      color: #fff;
    }

    &:active {
      background-color: #eb8e22;
      color: #fff;
    }
  }

  &.sm {
    font-weight: 500;
    font-size: 16px;
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

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #fff;
    color: var(--brand);

    &:hover {
      background-color: #fff;
      color: var(--brand);
      box-shadow: none;
    }

    &:active {
      background-color: #fff;
      color: var(--brand);
      box-shadow: none;
    }
  }
}
</style>
