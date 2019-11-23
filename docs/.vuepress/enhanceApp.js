import ComponentLibrary from "../../src/main";
import "../../src/assets/css/tailwind.css";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(ComponentLibrary, {
    theme: {
      primaryColor: "indigo-600",
      secondaryColor: "indigo-800",
      tertiaryColor: "indigo-300",
      danger: "red-500", 
      info: "teal-500"
    }
  });
};
