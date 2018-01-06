<template>
  <div class="coin-list">
    <nav class="level is-marginless">
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
    <nav class="level">
      <p class="level-item">
        <button class="button" @click="loadMore" :class="{ 'is-loading': loading, 'is-danger': error }">Load more</button>
      </p>
    </nav>
  </div>


</template>

<script>
import ProcessResponse from './CoinList/ProcessResponse'

export default {
  name: 'CoinList',
  data: function () {
    return {
      start: 0,
      limit: 100,
      coinList: '',
      loading: false,
      error: false
    }
  },
  created: function () {
    this.loading = true
    this.fetchData(this.start, 100)
  },
  methods: {
    fetchData: function (start, limit) {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/?start=' +
      start + '&limit=' + limit)
        .then(response => {
          this.coinList = ProcessResponse.process(response)
          this.loading = false
        }, response => {
          this.error = true
        })
    },
    loadMore: function () {
      this.loading = true
      this.start += 100
      this.fetchData(this.start, this.limit)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  margin: 0px;
}
.button {
  margin: 24px;
}
</style>
