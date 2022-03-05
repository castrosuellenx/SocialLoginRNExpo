import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.button.background};
`;
