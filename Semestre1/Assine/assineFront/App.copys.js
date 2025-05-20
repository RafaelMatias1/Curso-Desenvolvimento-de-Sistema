import { createAppContainer } from 'react-navigation';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabBar,
} from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack';

// Importe as telas
import PerfilScreen from './src/view/perfil';
import Section1Screen from './src/view/perfilabaixoassinado';
import Section2Screen from './src/view/perfilcontato';

// Defina as telas internas do perfil (Section1Screen e Section2Screen)
const PerfilStack = createStackNavigator({
  Section1: Section1Screen,
  Section2: Section2Screen,
});

// Defina as guias de navegação
const TabNavigator = createMaterialBottomTabNavigator({
  Perfil: PerfilStack,
  // Adicione outras guias aqui, se necessário
});

// Crie o contêiner de navegação
const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;