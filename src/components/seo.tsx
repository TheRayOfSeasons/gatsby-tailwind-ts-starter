import React from 'react';

interface Props {
  title?: string
  description?: string
  children?: React.ReactNode
}

const Seo: React.FC<Props> = ({ title, description, children }: Props) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:site_name" content={title} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {children}
  </>
);

Seo.defaultProps = {
  title: 'My Website Title',
  description: 'Marketing Website',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  children: <></>,
};

export default Seo;
