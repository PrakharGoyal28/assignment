import { Tabs } from 'expo-router';
import {
  Chrome as Home,
  Grid3x3 as Grid3X3,
  Camera,
  ShoppingCart,
  User,
} from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#333',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#00BCD4',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ size, color }) => (
            <Grid3X3 size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: 'posts',
          tabBarIcon: ({ size, color }) => <Camera size={size} color={color} />,
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
      <Tabs.Screen
        name="tryon"
        options={{
          title: 'Try-on',
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ size, color }) => (
            <ShoppingCart size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
    </Tabs>
  );
}
