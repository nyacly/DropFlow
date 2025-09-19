import React from 'react';
import { Slot } from 'expo-router';
import { SubscriptionProvider } from '../contexts/SubscriptionContext';

export default function RootLayout() {
  return (
    <SubscriptionProvider>
      <Slot />
    </SubscriptionProvider>
  );
}
