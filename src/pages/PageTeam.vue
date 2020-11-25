<template lang="pug">
  .PageTeam.team
    h2 Meet the team
    .team-founders
      TeamBigThumbnail(
        v-for="(item, i) in founders",
        :key="i",
        v-bind="item"
      )
    h2.advisors-title Advisors
    .team-advisors
      TeamSmallThumbnail(
        v-for="(item, i) in advisors",
        :key="i",
        v-bind="item"
      )
</template>

<script>
import TeamBigThumbnail from 'Components/TeamBigThumbnail/TeamBigThumbnail';
import TeamSmallThumbnail from 'Components/TeamSmallThumbnail/TeamSmallThumbnail';

export default {
  name: 'PageTeam',
  components: { TeamBigThumbnail, TeamSmallThumbnail },
  computed: {
    founders() {
      return [
        {
          name: 'Howard Krieger',
          title: 'Founder & CEO',
          image: 'team/howard-1.png',
          description: '<p>Howard is a Managing Director in CBIZ Valuation Group, LLC (“CBIZ”).'
            + ' He specializes in the valuation of complex financial instruments including'
            + ' crypto-currency loans,  interest rate swaps, agency and non-agency mortgage-backed'
            + ' securities (MBS), and collateralized debt obligations (CDOs).</p>'
            + '<p>He is a former Big-4 Senior Manager responsible for a variety of assignments'
            + ' including: intangible business valuation, intellectual property valuation, financial'
            + ' modeling, valuation of equity participating instruments and other exotic financial'
            + ' assets/liabilities with almost 20 years’ experience. Howard has an MBA from Rutgers'
            + ' Business School with a concentration in Quantitative Finance</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/howardjkrieger/',
            },
          ],
        },
        {
          name: 'Kevin Thompson',
          title: 'Publications',
          image: 'team/kevin-t.png',
          description: '<p>Avoiding Surprises in Structuring Stock-Based Compensation Awards Considerations to Keep in</p>'
            + '<p> Mind When Issuing Stock Options Fair Value Measurements Impact on Financial Reporting</p>'
            + '<i>Organizations</i><p>American Society of Appraisers National Association of Certified Valuators and Analysts</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/kevin-t-81b71b3/',
            },
          ],
        },
        {
          name: 'Ryan Medlin',
          title: 'Founder & CEO',
          image: 'team/ryan-1.png',
          description: '<p>Ryan Medlin is a seasoned Silicon Valley entrepreneur and technologist.</p>'
            + '<p>His most recent exit was the sale of his proximity tracking and measurement company'
            + ' Datasnap.io in 2015 to Neustar where he then led a team of engineers to build out Neustar\'s'
            + ' IoT Identity  initiatives. This included a product for IoT which was an improvement over normal'
            + ' PKI providing cryptography based policy enforcement and Identity Management in a highly decentralized architecture.</p>'
            + '<p>As part of this responsibility for the past 2 years,  many Blockchain and DLT based prototypes and'
            + ' concepts were given a lot of resources for prototype assessments. Platforms and protocols included:'
            + ' IoTA, Ethereum, Hyperledger, Rootstock, Lisk, NEO and many lower level protocols including things such'
            + ' as Telehash and Cothority.</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/ryanmedlin/',
            },
          ],
        },
      ];
    },
    advisors() {
      return [
        {
          name: 'Kumar Sriram',
          title: 'Technical Blockchain Advisor Symantec',
          image: 'team/kumar.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/kumarsriram/',
            },
          ],
        },
        {
          name: 'Katy Atkinson',
          title: 'Product Development Director - ForgeRock',
          image: 'team/katy.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/katkinso/',
            },
          ],
        },
        {
          name: 'Stanley Krieger',
          title: 'Engineering Advisor  – Quality Assurance',
          image: 'team/stanley.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/stan-krieger-89b6b91/',
            },
          ],
        },
        {
          name: 'Michael Gale',
          title: 'International Tax',
          image: 'team/michael.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/michaelgalecpa/',
            },
          ],
        },
        {
          name: 'John Owens',
          title: 'Operations',
          image: 'team/john.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/john-owens-8a54a72/',
            },
          ],
        },
        {
          name: 'Daniel Love',
          title: 'Product Design',
          image: 'team/daniel.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/dan-l-59773621/',
            },
          ],
        },
        {
          name: 'Scott Banks, CPA',
          title: 'FP&A / Controls',
          image: 'team/scott.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/scott-banks-59405b4/',
            },
          ],
        },
        {
          name: 'Edward Eaton',
          title: 'Operations',
          image: 'team/edward.png',
          social: [],
        },
        {
          name: 'Alan Alford, PhD',
          title: 'Risk Pricing (Ecomonics)',
          image: 'team/alan.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/alan-alford-ba36795',
            },
          ],
        },
        {
          name: 'Melissa Barbera, Esq',
          title: 'Legal',
          image: 'team/melissa.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/melissa-barbera-4599a64/',
            },
          ],
        },
        {
          name: 'Martin Williams',
          title: 'Technology and Operations',
          image: 'team/martin.png',
          social: [],
        },
        {
          name: 'Michael Forester, CFE, CMB, CPA',
          title: 'Compliance',
          image: 'team/michael-f.png',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/mikeforester/',
            },
          ],
        },
      ];
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.team
  width: 100%
  max-width: 1140px
  padding-left: 15px
  padding-right: 15px
  margin: 0 auto
  margin-top: 200px
  margin-bottom: 110px
  h2
    color: $white
    margin-bottom: 45px
  &-founders
    ::v-deep .thumbnail
      margin-bottom: 70px
      @media screen and (max-width: 991px)
        flex-direction: column
        align-items: center
        .thumbnail-image
          height: 300px
          margin-bottom: 20px
      &:last-child
        margin-bottom: 0
        .thumbnail-image
          .image
            background-position: left
  .advisors-title
    margin-top: 130px
  &-advisors
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    margin: 0 -20px
    ::v-deep .thumbnail
      width: 350px
      margin: 20px 15px
      @media screen and (max-width: 1129px)
        width: calc(33.333% - 30px)
      @media screen and (max-width: 991px)
        width: calc(50% - 30px)
      @media screen and (max-width: 767px)
        width: 100%
</style>
