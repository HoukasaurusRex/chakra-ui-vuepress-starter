<template>
  <CBox
    as="main"
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    mx="auto"
  >
    <CBox
      as="header"
      d="flex"
      flexDir="column"
      alignItems="center"
      paddingTop="2rem"
      textAlign="center"
    >
      <CStack :is-inline="[false, true]" v-if="data.heroImages">
        <CBox v-for="image in data.heroImages">
          <CBox
            as="img"
            :key="image.name"
            :src="$withBase(image.src)"
            :alt="image.alt"
            maxH="280px"
            w="280px"
          />
        </CBox>
      </CStack>

      <CHeading
        as="h1"
        v-if="data.heroText !== null"
        fontSize="3rem"
        m="1.8rem auto"
      >
        {{ data.heroText || $title || "Hello" }}
      </CHeading>

      <CText
        v-if="data.tagline !== null"
        m="1.8rem auto"
        maxWidth="35rem"
        fontSize="1.6rem"
        lineHeight="1.3"
        color="gray.500"
      >
        {{ data.tagline || $description || "Welcome to your VuePress site" }}
      </CText>

      <CButton
        as="a"
        v-if="data.actionText && data.actionLink"
        :href="data.actionLink"
        backgroundColor="vue.500"
        color="white"
        p="2rem 1.5rem"
        fontSize="1.2rem"
        :_hover="{
          backgroundColor: 'vue.400'
        }"
      >
        {{ data.actionText }}
      </CButton>
    </CBox>
    <CBox
      v-if="data.features && data.features.length"
      borderTop="1px solid #eee"
      p="1.2rem 0"
      margin-top="2.5rem"
      d="flex"
      :flexDir="['column', 'row']"
      flex-wrap="wrap"
      align-items="flex-start"
      align-content="stretch"
      justify-content="space-between"
    >
      <CBox
        v-for="(feature, index) in data.features"
        :key="index"
        flex-grow="1"
        flex-basis="30%"
        :max-width="['100%', '30%']"
        :p="['0.5rem', '0']"
      >
        <CHeading
          as="h2"
          fontSize="1.4rem"
          fontWeight="500"
          color="gray.600"
          borderBottom="none"
        >
          {{ feature.title }}
        </CHeading>
        <CText color="gray.600">{{ feature.details }}</CText>
      </CBox>
    </CBox>

    <Content />

    <CBox
      as="footer"
      v-if="data.footer"
      padding="2.5rem"
      borderTop="1px solid #eee"
      textAlign="center"
      color="gray.500"
    >
      {{ data.footer }}
    </CBox>
  </CBox>
</template>

<script>
import { CBox, CHeading, CImage, CText, CButton, CStack } from "@chakra-ui/vue"

export default {
  name: "Home",
  components: {
    CBox,
    CHeading,
    CImage,
    CText,
    CButton,
    CStack
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
}
</style>
