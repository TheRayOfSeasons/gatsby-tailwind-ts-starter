import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => (
  <h1 className="text-5xl font-bold">Home</h1>
);

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
