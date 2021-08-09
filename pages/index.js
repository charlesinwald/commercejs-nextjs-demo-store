import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HomeBanner from '../components/homepage/HomeBanner';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';

const Home = () => (
  <Root transparentHeader={false}>
    <Head>
      <title>SideHustLA</title>
    </Head>
    <HomeBanner />
    <CategoryBanner />
    {/* <ProductsBanner /> */}
    {/* <ExploreBanner /> */}
    {/* <SocialMedia /> */}
  </Root>
);

export default Home;
