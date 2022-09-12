import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SigIn from '../pages/SigIn'
import Home from '../pages/Home'
import SigUp from '../pages/SigUp'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" component={Welcome}
        options={{headerShown: false}}>
        </Stack.Screen>
      
        <Stack.Screen 
        name="SigIn" component={SigIn}
        options={{headerShown: false}}>
        </Stack.Screen>

        <Stack.Screen 
        name="Home" component={Home}
        options={{headerShown: false}}>
        </Stack.Screen>

        <Stack.Screen 
        name="SigUp" component={SigUp}
        options={{headerShown: false}}>
        </Stack.Screen>

        </Stack.Navigator>
    );
    }