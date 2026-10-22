import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { COLORS, SPACE, TYPO, RADIUS } from '../styles/tokens';

export default function DiaryDetailModal({ visible, entry, onClose }) {
  if (!entry) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image source={entry.moodImage} style={styles.heroImage} />
          
          <View style={styles.header}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{entry.title}</Text>
              <Text style={styles.date}>{entry.date}</Text>
            </View>
            
            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>
          </View>

          <ScrollView contentContainerStyle={styles.bodyContainer}>
            <Text style={styles.body}>{entry.body}</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: COLORS.surface, borderTopLeftRadius: RADIUS.card, borderTopRightRadius: RADIUS.card, height: '85%', overflow: 'hidden' },
  heroImage: { width: '100%', height: 220, backgroundColor: COLORS.border },
  header: { flexDirection: 'row', padding: SPACE.l, borderBottomWidth: 1, borderColor: COLORS.border, alignItems: 'flex-start' },
  title: { fontSize: TYPO.h1, fontWeight: 'bold', color: COLORS.text, marginBottom: SPACE.xs },
  date: { fontSize: TYPO.caption, color: COLORS.muted },
  closeBtn: { padding: SPACE.s, backgroundColor: '#f3f4f6', borderRadius: RADIUS.avatar, width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  closeText: { fontSize: 16, fontWeight: 'bold', color: COLORS.text },
  bodyContainer: { padding: SPACE.l, paddingBottom: 40 },
  body: { fontSize: TYPO.body, color: COLORS.text, lineHeight: 24 }
});