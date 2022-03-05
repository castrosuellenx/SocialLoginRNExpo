import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${RFValue(200)}px;
  width: ${RFValue(200)}px;
  border-radius: ${RFValue(35)}px;
  margin-bottom: ${RFValue(30)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${RFValue(5)}px;
`;

export const Email = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${RFValue(30)}px;
`;

export const User = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.blue};
`;

export const LineUser = styled.View`
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(15)}px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  align-self: center;
`;

export const ButtonLogoutText = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: underline;
  margin-bottom: ${RFValue(50)}px;
`;
