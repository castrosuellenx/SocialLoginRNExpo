import React from 'react';

import * as S from './styles';

export type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
