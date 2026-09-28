import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/core/contexts/AuthContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="inverted" hidden={false} />
      <RootNavigator />
    </AuthProvider>
  );
}