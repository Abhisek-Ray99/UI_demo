import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Badges, GamesPlayed } from '../screens';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { textTransform: 'none', fontSize: 15, fontWeight: '600', top: 4},
            tabBarStyle: { elevation: 1, height: 60 },
            tabBarActiveTintColor: '#6231AD',
            tabBarInactiveTintColor: '#727682',
            tabBarPressColor: "transparent",
            tabBarIndicatorStyle:{
                borderColor: '#6231AD',
                borderBottomWidth: 2,
            }
        }}
    >
      <Tab.Screen name="Games played" component={GamesPlayed} />
      <Tab.Screen name="Badges" component={Badges} />
    </Tab.Navigator>
  );
}

export default TopTabNavigation