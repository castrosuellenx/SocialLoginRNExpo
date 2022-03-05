import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const StatusBar = styled.StatusBar``;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Divisor = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-vertical: ${RFValue(40)}px;
`;

export const WrapperWithoutAccount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(40)}px;
`;

export const TextWithoutAccount = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-right: ${RFValue(5)}px;
`;
