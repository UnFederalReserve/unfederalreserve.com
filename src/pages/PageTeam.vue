<template lang="pug">
  .PageTeam.team
    h2 Meet the team
    h2 Leadership
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
          image: 'team/howard100x100.png',
          description: '<p> Howard Krieger currently serves as co-founder and CEO, UnFederalReserve. '
            + 'Krieger also serves as Managing Director, CBIZ Valuation Group (“CBIZ”), '
            + 'where he specializes in the valuation of complex financial instruments including '
            + 'crypto-currency loans, interest rate swaps, agency, and non-agency mortgage-backed '
            + 'securities (MBS), and collateralized debt obligations (CDOs).</p>'
            + '<p>Prior to founding UnFederalReserve, Krieger served as Valuation Director '
            + 'at WithumSmith+Brown and KPMG and was also a Senior Manager at one of the Big 4 '
            + 'Accounting Firms. Krieger is well-versed in intangible business valuation, '
            + 'intellectual property valuation, financial modeling, valuation of equity-participating '
            + 'instruments, and exotic financial assets and liabilities. Krieger holds a bachelor\'s '
            + 'degree in business administration from James Madison University and an MBA with a '
            + 'concentration in qualitative finance from Rutgers University.</p>',
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
          image: 'team/kevin-t100x100.png',
          description: '<p><b>Publications</b></p>'
            + '<p>Avoiding Surprises in Structuring Stock-Based Compensation Awards Considerations to Keep in '
            + 'Mind When Issuing Stock Options.</p>'
            + '<p><b>Organizations</b></p>'
            + '<p>Fair Value Measurements Impact on Financial Reporting.</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/kevin-t-81b71b3/',
            },
          ],
        },
        {
          name: 'Ryan Medlin',
          title: 'Founder & CTO',
          image: 'team/ryan100x100.png',
          description: '<p> Ryan Medlin is a seasoned Silicon Valley entrepreneur and technologist '
            + 'whose most recent success was the sale of his proximity tracking and measurement '
            + 'company, Datasnap.io, to Neustar in 2015.</p> '
            + 'Medlin stayed with the company and led '
            + 'a team of engineers to build out Neustar\'s IoT Identity initiatives. IoT Identity '
            + 'improved upon already existing public key infrastructure (PKI) by providing '
            + 'cryptography-based policy enforcement and identity management in a secure, decentralized architecture.</p>'
            + '<p>The IoT Identity project became the foundation for building out additional blockchain and '
            + 'DLT-based prototypes: IoTA, Ethereum, Hyperledger, Rootstock, Lisk, NEO, Telehash, and Cothority protocols.</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/ryanmedlin/',
            },
          ],
        },
        {
          name: 'Vladyslav Tarasenko',
          title: 'Solution Architect',
          image: 'team/vlad100x100.png',
          description: '<p> Vlad is a software developer with 10 years of experience and a wide range of skills in various '
          + 'technologies. Vlad has a Master\'s Degree in Computer  Science. He has a proven track record in the financial '
          + 'services sector. As a lead engineer, Vlad has successfully managed all stages of the development process '
          + 'from idea to product launch. He is a good problem solver who knows how to find a balance between the quality '
          + 'of the product and development speed. He can grasp the essence of the project at hand. Vlad has launched 3 '
          + 'big projects with hit rate more than 1 000 000+ requests per day. Today he’s a founder of Webdevelop Pro '
          + 'and an experienced team leader building strong development teams.</p>',
          social: [
            {
              name: 'linkedin',
              path: 'https://www.linkedin.com/in/vladyslav-tarasenko-16600372',
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
  @media screen and (max-width: 767px)
    margin-top: 100px
  h2
    color: $white
    margin-bottom: 45px
  &-founders
    ::v-deep .thumbnail
      margin-bottom: 40px
      @media screen and (max-width: 991px)
        flex-direction: column
        align-items: center
        .thumbnail-image
          height: 300px
          margin-bottom: 20px
      @media screen and (max-width: 767px)
        background: rgba(0, 0, 0, 0.08)
        margin-bottom: 10px
        &.active
          background: transparent
      @media screen and (max-width: 767px)
        .thumbnail-description
          .desc
            opacity: 0
            overflow: hidden
            height: 0
            margin-top: 0
      &:last-child
        margin-bottom: 0
        .thumbnail-image
          .image
            background-position: left
      &.active
        @media screen and (max-width: 767px)
          .thumbnail-description
            .desc
              opacity: 1
              overflow: visible
              height: 100%
              margin-top: 20px
      &:nth-child(2)
        .thumbnail-image
          background-color: rgba(255, 255, 255, 0.08)
          border-radius: 40px
          .image
            background-size: contain
            background-position: right bottom
        @media screen and (max-width: 767px)
          .thumbnail-mobile-image
            background-color: rgba(255, 255, 255, 0.08)
            border-radius: 10px
            .image
              background-size: contain
              background-position: right bottom
  .advisors-title
    margin-top: 130px
    @media screen and (max-width: 767px)
      margin-top: 100px
      margin-bottom: 0
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
