import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from './footer';
import Header from './header';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header title={site.siteMetadata?.title || 'Title'} />
      <main>
        {children}
      </main>
      <Footer title={site.siteMetadata?.title || 'Title'} />
    </>
  );
};

export default Layout;
