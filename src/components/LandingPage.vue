<template>
  <section class="hero is-success is-fullheight">
    <!-- Hero head: will stick at the top -->
    <navigation></navigation>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Title
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>

    <standard-footer></standard-footer>

  </section>
</template>

<script>
import Navigation from './Navigation'
import StandardFooter from './StandardFooter'

export default {
  components: {
    'navigation': Navigation,
    'standard-footer': StandardFooter
  },
  name: 'LandingPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
