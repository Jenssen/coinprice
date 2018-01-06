var coinList = []
var bitcoinSupply

export default {
  process (response) {
    if (response.body[0].id === 'bitcoin') {
      bitcoinSupply = response.body[0].total_supply
    }

    console.log(response)
    var marketCap
    var adjustedPrice = 0
    for (var currency of response.body) {
      marketCap = currency.market_cap_usd

      adjustedPrice = marketCap / bitcoinSupply
      coinList.push({
        name: currency.name,
        rank: currency.rank,
        symbol: currency.symbol,
        price: adjustedPrice.toFixed(2)
      })
    }
    console.log(coinList)
    return coinList
  }
}
