// THIS FILE IS OPTIONAL, you can delete it if you don't want to use it
// App level enhancements for your VuePress app
// See the documentation for more information
// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements

import Chakra, {
  internalIcons,
  defaultTheme,
  parsePackIcons
} from "@chakra-ui/vue"
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons"

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  Vue.use(Chakra)
  Vue.mixin({
    provide() {
      return {
        $chakraTheme: () => defaultTheme,
        $chakraColorMode: () => this.colorMode,
        $toggleColorMode: this.toggleColorMode,
        // icons must be parsed and spread into the icons provider to be available globally
        $chakraIcons: {
          ...internalIcons,
          ...parsePackIcons({ faHandHoldingHeart })
        }
      }
    },
    methods: {
      toggleColorMode() {
        this.colorMode = this.colorMode === "light" ? "dark" : "light"
      }
    }
  })
}
