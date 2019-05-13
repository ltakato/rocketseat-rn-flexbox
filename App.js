import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Voltar</Text>
          <Text>Título</Text>
          <Text>Perfil</Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC'
  },

  header: {
    height: 60,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
