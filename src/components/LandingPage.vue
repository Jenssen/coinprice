<template>
  <div class="container is-fluid">

    <navigation></navigation>

      <div class="container">
        <nav class="level">
          <p class="level-item has-text-centered is-size-2 has-text-white">
            Show coin price if they had the same supply as Bitcoin.
          </p>
        </nav>
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
<style lang="sass">

</style>
