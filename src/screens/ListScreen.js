import { StyleSheet, Text, View, Button } from 'react-native';

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Lista</Text>
      <Button title="Ver detalle" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
