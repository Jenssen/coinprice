<template>
  <nav class="level">
    <p class="level-item has-text-centered">
      <table class="table is-hoverable">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in coinList">
            <th>{{ coin.rank }}</th>
            <td>{{ coin.name }}</td>
            <td>${{ coin.price }}</td>
          </tr>
        </tbody>
      </table>
    </p>
  </nav>


</template>

<script>
import ProcessResponse from './CoinList/ProcessResponse'

export default {
  name: 'CoinList',
  data: function () {
    return {
      coinList: ''
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/?limit=30')
        .then(response => {
          this.coinList = ProcessResponse.process(response)
        }, response => {
          console.log('error')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
