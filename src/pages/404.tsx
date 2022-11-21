import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => (
  <>
    <h1 className="text-center text-5xl font-bold">Page not found</h1>
    <p className="text-center text-xl mt-8">
      Sorry 😔, we couldn’t find what you were looking for.
      <br />
      <Link to="/">Go home</Link>
      .
    </p>
  </>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
