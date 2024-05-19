import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export const Color = {
    light: {
        PRIMARY: "#9AC8CD",
        SECONDARY: "#CDE8E5"
    },
    dark: {
        PRIMARY: "#577B8D",
        SECONDARY: "#344C64"
    }
}

export const Theme = () => {
    const isDarkMode = useColorScheme() === 'dark';
      const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, flex: 1,
    };
    return backgroundStyle;
  }