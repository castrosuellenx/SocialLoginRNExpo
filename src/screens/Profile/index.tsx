import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Header from '@/components/Header';
import * as S from './styles';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  const handleLogout = () => {
    navigate('SignIn');
    console.log('Logout');
  };

  return (
    <S.Container>
      <Header title="Profile" />

      <S.Content>
        <S.Image source={{ uri: 'https://github.com/castrosuellenx.png' }} />

        <S.Name>Suéllen Castro</S.Name>

        <S.Email>castrosuellenx@gmail.com</S.Email>

        <S.LineUser>
          <S.User>@castrosuellenx</S.User>
        </S.LineUser>
      </S.Content>

      <S.ButtonLogout onPress={handleLogout}>
        <S.ButtonLogoutText>Logout</S.ButtonLogoutText>
      </S.ButtonLogout>
    </S.Container>
  );
};

export default Profile;
