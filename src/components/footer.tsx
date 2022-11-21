import React from 'react';

interface Props {
  title: string
}

const Footer: React.FC<Props> = ({ title }: Props) => (
  <footer>
    {title}
  </footer>
);

export default Footer;
