<template lang="pug">
  section.SupplySection.s-supply
    .s-container
      h2.s-title.text-left Total Supply
      .total-supply {{ formatToCurrency(totalSupply.toFixed(2)) }}
      .supply-items
        SupplySectionItem(
          v-for="item in supplyItems"
          :key="item.icon"
          :itemData="item"
        )

</template>


<script>

import CONFIG from 'Config';
import SupplySectionItem from './SupplySectionItem';
import {
  formatToCurrency,
} from '@/helpers/utils/common';

export default {
  name: 'SupplySection',
  components: {
    SupplySectionItem,
  },
  data() {
    return {
      marketData: [],
      supplyItems: [],
      totalSupply: 0,
    };
  },
  async mounted() {
    await this.marketDetailsHundler();
  },
  methods: {
    formatToCurrency,
    handleError(response) {
      if (!response.ok) throw new Error(response);

      return response.json();
    },
    getMarketDetails(apiUrl) {
      const url = `${apiUrl}/all_markets`;

      return fetch(url)
        .then(this.handleError)
        .catch(err => console.error(err));
    },
    pushToSupplyItem(data, name) {
      this.supplyItems.push({
        ...data,
        name,
      });
    },
    async marketDetailsHundler() {
      this.marketData = await this.getMarketDetails(CONFIG.urls.marketApi);

      this.marketData.forEach((market) => {
        const [nowSupply] = market.supplyDaily;
        const symbol = market.symbol.slice(2);
        this.totalSupply += Number(nowSupply.total);

        const supplyData = {
          icon: market.symbol,
          totalSupply: Number(nowSupply.total),
          supplyApy: nowSupply.apy || 0,
          reserves: market.reserves,
        };

        if (symbol === 'USDC') {
          this.pushToSupplyItem(supplyData, 'USD Coin');
        } else if (symbol === 'USDT') {
          this.pushToSupplyItem(supplyData, 'Tether');
        } else if (symbol === 'DAI') {
          this.pushToSupplyItem(supplyData, 'Dai');
        } else if (symbol === 'eRSDL') {
          this.pushToSupplyItem(supplyData, 'ERSDL');
        }
      });
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.s-supply
  padding-bottom: 60px
.total-supply
  margin-bottom: 57px
  font-weight: 700
  font-size: 100px
  line-height: 100%
  letter-spacing: 0.01em
  color: #FFFFFF
.supply-items
  margin: 0 -15px
  display: flex
  flex-wrap: wrap
</style>
