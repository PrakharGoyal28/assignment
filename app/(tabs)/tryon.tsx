import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Scan, Sparkles, Zap, Camera } from 'lucide-react-native';

export default function TryOnScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Try-On Studio</Text>
        <Text style={styles.headerSubtitle}>Virtual fitting powered by AI</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.featureSection}>
          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#FF6B6B' }]}>
              <Camera size={32} color="#fff" />
            </View>
            <Text style={styles.featureTitle}>Virtual Try-On</Text>
            <Text style={styles.featureSubtitle}>
              See how clothes look on you using AR technology
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#4ECDC4' }]}>
              <Scan size={32} color="#fff" />
            </View>
            <Text style={styles.featureTitle}>Body Scan</Text>
            <Text style={styles.featureSubtitle}>
              Get accurate measurements for perfect fit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#45B7D1' }]}>
              <Sparkles size={32} color="#fff" />
            </View>
            <Text style={styles.featureTitle}>Style Match</Text>
            <Text style={styles.featureSubtitle}>
              AI-powered recommendations based on your preferences
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#96CEB4' }]}>
              <Zap size={32} color="#fff" />
            </View>
            <Text style={styles.featureTitle}>Quick Fit</Text>
            <Text style={styles.featureSubtitle}>
              Instant size recommendations for any item
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to try on?</Text>
          <Text style={styles.ctaSubtitle}>
            Start your virtual fitting experience and discover clothes that fit perfectly
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Start Try-On Experience</Text>
          </TouchableOpacity>
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
  featureSection: {
    gap: 16,
    marginBottom: 32,
  },
  featureCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureSubtitle: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  ctaSection: {
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ctaSubtitle: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: '#00BCD4',
    borderRadius: 25,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});