import {View, Text, StyleSheet} from 'react-native';

function AppHeader() {
  return (
    <View style={styleC.bg}>
      <Text style={styleC.txtColor}>App Distribution, Firebase Actions.</Text>
      <Text>This is a sample branch-1</Text>
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
