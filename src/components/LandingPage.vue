<template>
  <div class="container">

    <navigation></navigation>

      <div class="container">
        <coin-list></coin-list>
      </div>

    <standard-footer></standard-footer>

  </div>
</template>

<script>
import Navigation from './Navigation'
import StandardFooter from './StandardFooter'
import CoinList from './CoinList'

export default {
  components: {
    'navigation': Navigation,
    'standard-footer': StandardFooter,
    'coin-list': CoinList
  },
  name: 'LandingPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
