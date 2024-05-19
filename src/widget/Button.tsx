import {View, Text, TouchableOpacity, useColorScheme} from 'react-native';
import React from 'react';
import {Color} from '../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  Lable: String;
}
const Button: React.FC<Props> = ({Lable}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={{
        width: wp(90),
        height: hp(6.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: isDarkMode ? Color.dark.PRIMARY : Color.light.PRIMARY,
      }}>
      <Text>{Lable}</Text>
    </TouchableOpacity>
  );
};

export default Button;
