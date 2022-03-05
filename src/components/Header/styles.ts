import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  border-bottom-left-radius: ${RFValue(15)}px;
  border-bottom-right-radius: ${RFValue(15)}px;
  padding-vertical: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.button.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.pink};
  text-align: center;
`;
