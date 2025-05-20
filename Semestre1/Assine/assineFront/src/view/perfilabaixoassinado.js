import React from 'react';
import { View, Text } from 'react-native';

class Section1Screen extends React.Component {
  static navigationOptions = {
    title: 'Seção 1',
  };

  render() {
    return (
      <View>
        <Text>Conteúdo da Seção 1</Text>
      </View>
    );
  }
}

export default Section1Screen;