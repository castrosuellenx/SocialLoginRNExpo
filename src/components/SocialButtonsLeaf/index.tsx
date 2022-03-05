import React from 'react';

import { images } from '@/assets';
import * as S from './styles';

export type Props = {
  onGoogleSignIn: () => void;
  onFacebookSignIn: () => void;
  onAppleSignIn: () => void;
  onLinkedinSignIn: () => void;
};

const SocialButtonsLeaf: React.FC<Props> = ({
  onGoogleSignIn,
  onFacebookSignIn,
  onAppleSignIn,
  onLinkedinSignIn,
}) => {
  return (
    <S.Container>
      <S.WrapperTop>
        <S.Button background="#FFEEEE" type="google" onPress={onGoogleSignIn}>
          <S.Image source={images.googleLogo} />
        </S.Button>

        <S.Button
          background="#ECF2FF"
          type="facebook"
          onPress={onFacebookSignIn}>
          <S.Image source={images.facebookLogo} />
        </S.Button>
      </S.WrapperTop>

      <S.WrapperBottom>
        <S.Button background="#F4F4F4" type="apple" onPress={onAppleSignIn}>
          <S.Image source={images.appleLogo} />
        </S.Button>

        <S.Button
          background="#EFFAFF"
          type="linkedin"
          onPress={onLinkedinSignIn}>
          <S.Image source={images.linkedinLogo} />
        </S.Button>
      </S.WrapperBottom>
    </S.Container>
  );
};

export default SocialButtonsLeaf;
