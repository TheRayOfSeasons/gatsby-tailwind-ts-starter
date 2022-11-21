import React from 'react';
import './src/styles/main.scss';
import type { WrapPageElementBrowserArgs, RenderBodyArgs } from 'gatsby';
import Layout from './src/components/layout';

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => (
  <Layout {...props}>{element}</Layout>
);

export const onRenderBody = ({ setHtmlAttributes }: RenderBodyArgs) => {
  setHtmlAttributes({ lang: 'en' });
};
