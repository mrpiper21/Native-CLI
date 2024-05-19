import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../widget/Button';
import React from 'react';
import {Color} from '../../constants/Colors';

const LoginScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: 'tomato',
      }}>
      <Text style={{color: 'white'}}>LoginScreen</Text>
      <View>
        <View
          style={{
            width: wp(90),
            borderColor: isDarkMode ? 'white' : 'black',
            borderRadius: wp(1),
            borderWidth: 0.5,
            padding: 2,
          }}>
          <TextInput
            placeholder="Enter your email or phone number"
            placeholderTextColor={isDarkMode ? 'white' : 'black'}
            style={{height: hp(6), width: wp(80)}}
          />
        </View>
        <View
          style={{
            width: wp(90),
            borderColor: isDarkMode ? 'white' : 'black',
            marginTop: hp(3),
            borderRadius: wp(1),
            borderWidth: 0.5,
            padding: 2,
          }}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={isDarkMode ? 'white' : 'black'}
            style={{height: hp(6), width: wp(80)}}
          />
        </View>
      </View>
      <Button Lable={'Login'} />
    </SafeAreaView>
  );
};

export default LoginScreen;
