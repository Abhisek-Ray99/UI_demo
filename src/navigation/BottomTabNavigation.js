import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, LeaderBoard, Leagues, Profile, Research } from '../screens';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { HomeIcon, LeaderboardIcon, LeaguesIcon, ProfileIcon, ResearchIcon } from '../constants/Icons.constant';
import { COLORS } from '../constants/color.constant';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: COLORS.primary100,
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
               <HomeIcon color={focused ? COLORS.primary100 : COLORS.gray100} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Leagues" 
        component={Leagues} 
        options={{
            tabBarIcon: ({ focused }) => (
                <LeaguesIcon color={focused ? COLORS.primary100 : COLORS.gray100} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Research" 
        component={Research} 
        options={{
            tabBarIcon: ({ focused }) => (
                <ResearchIcon color={focused ? COLORS.primary100 : COLORS.gray100} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Leaderboard" 
        component={LeaderBoard} 
        options={{
            tabBarIcon: ({ focused }) => (
                <LeaderboardIcon color={focused ? COLORS.primary100 : COLORS.gray100} /> 
            )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon: ({ focused }) => (
                <ProfileIcon color={focused ? COLORS.primary100 : COLORS.gray100} /> 
            )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs