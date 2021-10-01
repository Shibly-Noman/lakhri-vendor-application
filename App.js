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
import History from './src/StationaryScreens/MakeupArtist/History.js';
import Dashboard from './src/StationaryScreens/Craftsmen/Dashboard.js';
import MakeupDashboard from './src/StationaryScreens/MakeupArtist/MakeupDashboard.js';
import FoodDashboard from './src/StationaryScreens/Food/FoodDashboard.js';
import FoodHistory from './src/StationaryScreens/Food/FoodHistory.js';
import CraftsmenHistory from './src/StationaryScreens/Craftsmen/CraftsmenHistory.js';
import ProductInStock from './src/StationaryScreens/Craftsmen/ProductInStock.js';
import FoodProductInStock from './src/StationaryScreens/Food/FoodProductInStock.js';
import ActiveOrder from './src/StationaryScreens/Food/ActiveOrder.js';
import CraftsActiveOrder from './src/StationaryScreens/Craftsmen/CraftsActiveOrder.js';
import WelcomeBack from './src/StationaryScreens/Food/WelcomeBack.js';
import CraftsmenWelcomeBack from './src/StationaryScreens/Craftsmen/CraftsmenWelcomeBack.js';
import MakeupArtistWelcomeBack from './src/StationaryScreens/MakeupArtist/MakeupArtistWelcomeBack.js';
import MakeupServiceDelivered from './src/StationaryScreens/MakeupArtist/MakeupServiceDelivered.js';
import CraftsOrderDelivered from './src/StationaryScreens/Craftsmen/CraftsOrderDelivered.js';
import FoodOrderDelivered from './src/StationaryScreens/Food/FoodOrderDelivered.js';
import MakeupPaymentHistory from './src/StationaryScreens/MakeupArtist/MakeupPaymentHistory.js';
import FoodPaymentHistory from './src/StationaryScreens/Food/FoodPaymentHistory.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FoodPaymentHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;