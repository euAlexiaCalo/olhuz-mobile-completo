import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

interface AuthBackButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
}

export function AuthBackButton({ onPress, style }: AuthBackButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.backButton, style]}
    >
      <ArrowLeft size={36} color={"#0E0E0E"} strokeWidth={1.6} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 18,
    marginLeft: 24,
    padding: 6,
    alignSelf: "flex-start",
  },
});