<template>
  <nav class="level">
    <p class="level-item has-text-centered">
      <table class="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
            <td>38</td>
          </tr>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
            <td>38</td>
          </tr>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
            <td>38</td>
          </tr>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
            <td>38</td>
          </tr>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
            <td>38</td>
          </tr>
        </tbody>
      </table>
    </p>
  </nav>


</template>

<script>
export default {
  name: 'CoinList',
  data: function () {
    return {
      tickerData: ''
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then(response => {
          console.log(response)
          this.tickerData = response
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
