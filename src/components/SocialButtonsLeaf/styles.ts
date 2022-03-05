import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type ButtonProps = {
  background: string;
  type: string;
};

export const Container = styled.View`
  width: ${RFValue(225)}px;
  height: ${RFValue(225)}px;
  justify-content: space-between;
`;

export const WrapperTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonProps>`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;

  border-top-left-radius: ${({ type }) =>
    type === 'linkedin' ? 0 : RFValue(50)}px;

  border-top-right-radius: ${({ type }) =>
    type === 'apple' ? 0 : RFValue(50)}px;

  border-bottom-left-radius: ${({ type }) =>
    type === 'facebook' ? 0 : RFValue(50)}px;

  border-bottom-right-radius: ${({ type }) =>
    type === 'google' ? 0 : RFValue(50)}px;

  background-color: ${({ background }) => background};
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
`;
