import React from 'react';

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => (
  <header>
    {title}
  </header>
);

export default Header;
