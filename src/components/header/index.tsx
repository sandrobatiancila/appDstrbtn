import {View, Text, StyleSheet} from 'react-native';

function AppHeader() {
  return (
    <View style={styleC.bg}>
      <Text style={styleC.txtColor}>App Diss, G Act.</Text>
      <Text>Branch-2</Text>
    </View>
  );
}

const styleC = StyleSheet.create({
  bg: {
    backgroundColor: 'red',
    padding: 10,
  },
  txtColor: {
    color: '#FFF',
  },
});

export default AppHeader;
