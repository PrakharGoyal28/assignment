import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Grid3x3 as Grid3X3, Shirt, Zap, Star, TrendingUp, Heart } from 'lucide-react-native';

const categories = [
  { id: 1, name: 'Trending', icon: TrendingUp, color: '#FF6B6B', count: 152 },
  { id: 2, name: 'Featured', icon: Star, color: '#4ECDC4', count: 89 },
  { id: 3, name: 'New Arrivals', icon: Zap, color: '#45B7D1', count: 234 },
  { id: 4, name: 'Popular', icon: Heart, color: '#96CEB4', count: 456 },
  { id: 5, name: 'Clothing', icon: Shirt, color: '#FECA57', count: 1200 },
  { id: 6, name: 'Accessories', icon: Grid3X3, color: '#FF9FF3', count: 890 },
];

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <Text style={styles.headerSubtitle}>Discover trending styles</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                <category.icon size={32} color="#fff" />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.count} items</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#00BCD4',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  categoryCount: {
    color: '#666',
    fontSize: 12,
  },
});