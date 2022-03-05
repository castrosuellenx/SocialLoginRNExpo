/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import ButtonWithText from '@/components/ButtonWithText';
import SocialButtonsLeaf from '@/components/SocialButtonsLeaf';
import Header from '@/components/Header';
import * as S from './styles';

const SignIn: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const onSignIn = (social: string) => {
    navigate('Profile');
    console.log(`Login with ${social}`);
  };

  const handleGoogleSignIn = () => {
    onSignIn('Google');
  };

  const handleFacebookSignIn = () => {
    onSignIn('Facebook');
  };

  const handleAppleSignIn = () => {
    onSignIn('Apple');
  };

  const handleLinkedinSignIn = () => {
    onSignIn('Linkedin');
  };

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.secondary}
      />

      <Header title="Login" />

      <S.Content>
        <ButtonWithText
          title="Sign in with email"
          onPress={() => {
            console.log('Sign in with email flux');
          }}
        />

        <S.Divisor>Or</S.Divisor>

        <SocialButtonsLeaf
          onGoogleSignIn={handleGoogleSignIn}
          onFacebookSignIn={handleFacebookSignIn}
          onAppleSignIn={handleAppleSignIn}
          onLinkedinSignIn={handleLinkedinSignIn}
        />

        <S.WrapperWithoutAccount>
          <S.TextWithoutAccount>Don't have an account?</S.TextWithoutAccount>

          <ButtonWithText
            title="Sign Up"
            onPress={() => {
              console.log('Sign Up flux');
            }}
          />
        </S.WrapperWithoutAccount>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
