import React from 'react';
import { View, Button } from 'react-native';

class PerfilScreen extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Button
          title="Ir para a Seção 1"
          onPress={() => navigation.navigate('Section1')}
        />
        <Button
          title="Ir para a Seção 2"
          onPress={() => navigation.navigate('Section2')}
        />
      </View>
    );
  }
}

export default PerfilScreen;