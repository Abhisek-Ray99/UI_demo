import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, LeaderBoard, Leagues, Profile, Research } from '../screens';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { HomeIcon, LeaderboardIcon, LeaguesIcon, ProfileIcon, ResearchIcon } from '../constants/Icons.constant';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#6231AD',
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
               <HomeIcon color={focused ? '#6231AD' : '#B5C0C8'} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Leagues" 
        component={Leagues} 
        options={{
            tabBarIcon: ({ focused }) => (
                <LeaguesIcon color={focused ? '#6231AD' : '#B5C0C8'} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Research" 
        component={Research} 
        options={{
            tabBarIcon: ({ focused }) => (
                <ResearchIcon color={focused ? '#6231AD' : '#B5C0C8'} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Leaderboard" 
        component={LeaderBoard} 
        options={{
            tabBarIcon: ({ focused }) => (
                <LeaderboardIcon color={focused ? '#6231AD' : '#B5C0C8'} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon: ({ focused }) => (
                <ProfileIcon color={focused ? '#6231AD' : '#B5C0C8'} /> 
            )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs