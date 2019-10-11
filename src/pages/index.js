import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Support and development for React applications.</h1>
    <h2>Scalable, fast, and secure cloud-based apps to meet your needs.</h2>
    <Card>
      We don’t just build software -- we build solutions. Our team of engineers
      is always available to help you support, expand, or develop your React or
      React Native application or website.
    </Card>
  </Layout>
);

export default IndexPage;
