<template>
  <div class="container is-fluid">

    <section class="section is-paddingless">
      <div class="column is-8 is-offset-2">
        <p class="description-text has-text-centered is-size-3 has-text-white">
          Show coin price if they had the same supply as Bitcoin.
        </p>
        <coin-list></coin-list>
      </div>

    </section>
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
<style>
.description-text {
  padding: 24px;
}
</style>
