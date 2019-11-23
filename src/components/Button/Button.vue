<template>
  <button
    class="py-2 px-4 cursor-pointer focus:outline-none"
    :class="
      `${this.variantStyle} ${this.roundedStyle} ${this.labelStyle} text-${size} font-${fontWeight} `
    "
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "FlipButton",
  props: {
    label: { type: String, required: true },
    uppercaseLabel: { type: Boolean, default: false },
    fontWeight: {
      type: String,
      default: "semibold",
      validator: function(value) {
        // The value must match one of these strings
        return ["normal", "medium", "semibold", "bold"].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: "base",
      validator: function(value) {
        // The value must match one of these strings
        return ["xs", "sm", "base", "lg", "xl"].indexOf(value) !== -1;
      }
    },
    borderWidth: {
      type: Number,
      default: 2,
      validator: function(value) {
        // The value must match one of these strings
        return [0, 1, 2, 4, 8].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: "primary",
      validator: function(value) {
        // The value must match one of these strings
        return (
          ["primary", "secondary", "outline", "link"].indexOf(value) !== -1
        );
      }
    },
    rounded: {
      type: String,
      default: "base",
      validator: function(value) {
        // The value must match one of these strings
        return ["none", "sm", "base", "lg", "full"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    variantStyle: function() {
      let buttonVariantStyle = null;
      switch (this.variant) {
        case "primary":
          buttonVariantStyle = `bg-${this.$primaryColor} text-white hover:bg-${this.$secondaryColor}`;
          break;
        case "secondary":
          buttonVariantStyle = `bg-${this.$tertiaryColor} text-${this.$secondaryColor}`;
          break;
        case "outline":
          buttonVariantStyle = `border-${this.borderWidth} border-${this.$primaryColor} text-${this.$primaryColor} hover:border-${this.$secondaryColor} hover:text-${this.$secondaryColor}`;
          break;
        case "link":
          buttonVariantStyle = `text-${this.$primaryColor} hover:text-${this.$secondaryColor}`;
          break;
        default:
          buttonVariantStyle = `bg-${this.$primaryColor} text-white hover:bg-${this.$secondaryColor}`;
          break;
      }
      return buttonVariantStyle;
    },
    roundedStyle: function() {
      return this.rounded === "base" ? "rounded" : `rounded-${this.rounded}`;
    },
    labelStyle: function() {
      return this.uppercaseLabel ? "uppercase" : "";
    }
  }
};
</script>
