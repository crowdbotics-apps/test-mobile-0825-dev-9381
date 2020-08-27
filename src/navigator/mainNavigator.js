import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen410350Navigator from '../features/BlankScreen410350/navigator';
import BlankScreen210313Navigator from '../features/BlankScreen210313/navigator';
import BlankScreen110312Navigator from '../features/BlankScreen110312/navigator';
import BlankScreen010259Navigator from '../features/BlankScreen010259/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen410350: { screen: BlankScreen410350Navigator },
BlankScreen210313: { screen: BlankScreen210313Navigator },
BlankScreen110312: { screen: BlankScreen110312Navigator },
BlankScreen010259: { screen: BlankScreen010259Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
