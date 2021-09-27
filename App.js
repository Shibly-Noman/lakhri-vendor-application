import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen imports
import CraftsRegistration from './src/StationaryScreens/Craftsmen/Registration';
import FoodRegistration from './src/StationaryScreens/Food/Registration';
import MakeupArtistRegistration from './src/StationaryScreens/MakeupArtist/Registration';
import ProfessionalHomechef from './src/StationaryScreens/Food/ProfessionalHomechef.js';
import ServingGoodFood from './src/StationaryScreens/Craftsmen/ServingGoodFood.js';
import SomethingGoodContent from './src/StationaryScreens/MakeupArtist/SomethingGoodContent.js';
import AvailableServices from './src/StationaryScreens/MakeupArtist/AvailableServices.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AvailableServices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;