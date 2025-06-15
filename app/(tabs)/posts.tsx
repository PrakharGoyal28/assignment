import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Camera, Plus, Video, Image } from 'lucide-react-native';

export default function PostsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Post</Text>
        <Text style={styles.headerSubtitle}>Share your style with the world</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.createSection}>
          <TouchableOpacity style={styles.createButton}>
            <View style={styles.createIcon}>
              <Video size={32} color="#00BCD4" />
            </View>
            <Text style={styles.createText}>Create Video</Text>
            <Text style={styles.createSubtext}>Record a new style video</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createButton}>
            <View style={styles.createIcon}>
              <Image size={32} color="#00BCD4" />
            </View>
            <Text style={styles.createText}>Upload Photo</Text>
            <Text style={styles.createSubtext}>Share your outfit photos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createButton}>
            <View style={styles.createIcon}>
              <Camera size={32} color="#00BCD4" />
            </View>
            <Text style={styles.createText}>Live Stream</Text>
            <Text style={styles.createSubtext}>Go live with your audience</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Posts</Text>
          <View style={styles.emptyState}>
            <Plus size={48} color="#666" />
            <Text style={styles.emptyTitle}>No posts yet</Text>
            <Text style={styles.emptySubtitle}>
              Start creating content to see your posts here
            </Text>
          </View>
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
  createSection: {
    gap: 16,
    marginBottom: 32,
  },
  createButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0, 188, 212, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  createText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    flex: 1,
  },
  createSubtext: {
    color: '#666',
    fontSize: 12,
    flex: 1,
  },
  recentSection: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});