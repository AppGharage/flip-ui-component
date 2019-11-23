import * as components from "./components";

const ComponentLibary = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options = {}) {
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);

      // Declaring theme color properties
      Vue.prototype.$primaryColor = options.theme.primaryColor;
      Vue.prototype.$secondaryColor = options.theme.secondaryColor;
      Vue.prototype.$tertiaryColor = options.theme.tertiaryColor;
      Vue.prototype.$danger = options.theme.danger;
      Vue.prototype.$info = options.theme.info;
    }
  }
};

export default ComponentLibary;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibary);
}
