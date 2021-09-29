<template lang="pug">
  .supply-item
    .supply-item__top
      .supply-item__top-left
        .supply-item__icon
          img(:src="require(`images/${itemData.icon}.svg`)")
        .supply-item__name {{ itemData.name }}
      .supply-item__top-right
        .supply-item__total {{ beautifyNumber(itemData.totalSupply + itemData.reserves, true) }}
    .supply-item__content
      .supply-item__apy {{ formatApy(itemData.supplyApy) }}%
      .supply-item__label Supply APY
</template>

<script>
import Big from 'big.js';
import { beautifyNumber } from '@/helpers/utils/common';

export default {
  name: 'SupplySectionItem',
  props: {
    itemData: Object,
  },
  methods: {
    beautifyNumber,
    formatApy(apy) {
      return Big(apy).toFixed(2);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.supply-item
  width: calc(25% - 30px)
  margin: 0 15px 30px
  background: linear-gradient(180deg, #2542CC 0%, #2039AE 100%)
  border-radius: 25px
  overflow: hidden
  @media screen and (max-width: 991px)
    width: calc(50% - 30px)
  @media screen and (max-width: 767px)
    width: 100%
    margin-bottom: 20px

  &__top
    display: flex
    align-items: center
    justify-content: space-between
    padding: 10px 20px 8px 16px
    background-color: rgba(52,82,223, 0.39)

  &__top-left
    display: flex
    align-items: center

  &__icon
    display: flex
    align-items: center
    margin-right: 7px

  &__name
    font-weight: 600
    font-size: 14px
    line-height: 26px
    color: #FFFFFF

  &__total
    font-weight: 600
    font-size: 14px
    line-height: 26px
    text-align: right
    color: #FFFFFF

  &__content
    padding: 18px 20px

  &__apy
    margin-bottom: 5px
    font-weight: 600
    font-size: 30px
    line-height: 26px
    color: #FFFFFF

  &__label
    font-weight: 600
    font-size: 14px
    line-height: 26px
    color: #2B65D9

</style>
