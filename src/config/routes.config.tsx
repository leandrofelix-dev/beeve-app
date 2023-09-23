import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export const TabConfig: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#ffffff',
  tabBarInactiveTintColor: '#6B6B6B',
  tabBarStyle: {
    height: 60,
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: '#09090b',
    borderTopColor: 'transparent',
    paddingHorizontal: 40,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
}

export const StackConfig = {
  headerShown: false,
  cardStyleInterpolator: ({ current, layouts }: any) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  }),
}
