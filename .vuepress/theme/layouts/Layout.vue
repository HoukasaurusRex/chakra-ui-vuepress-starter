<template>
  <CThemeProvider>
    <!-- NOTE: Resetting styles may have adverse effects on some themes -->
    <CReset />
    <Layout />
  </CThemeProvider>
</template>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue"
import Layout from "@parent-theme/layouts/Layout.vue"

export default {
  name: "ChakraLayout",
  components: {
    CThemeProvider,
    CReset,
    Layout
  }
}
</script>