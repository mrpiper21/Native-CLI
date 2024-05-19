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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from '../../widget/Button';
import React from 'react';
import {Color} from '../../constants/Colors';

const LoginScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View>
          <Text style={{color: isDarkMode ? 'white' : 'black'}}>Clocking</Text>
        </View>
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
        <View style={{marginTop: wp(20)}}>
          <Button Lable={'Login'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
