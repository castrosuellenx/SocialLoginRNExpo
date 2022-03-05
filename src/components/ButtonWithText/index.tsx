import React from 'react';

import * as S from './styles';

export type Props = {
  title: string;
  onPress: () => void;
};

const ButtonWithText: React.FC<Props> = ({ title, onPress }) => {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ButtonWithText;
