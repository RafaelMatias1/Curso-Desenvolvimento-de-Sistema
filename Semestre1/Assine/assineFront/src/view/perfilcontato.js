import React from 'react';
import { View, Text } from 'react-native';

class Section2Screen extends React.Component {
  static navigationOptions = {
    title: 'Seção 2',
  };

  render() {
    return (
      <View>
        <Text>Conteúdo da Seção 2</Text>
      </View>
    );
  }
}

export default Section2Screen;