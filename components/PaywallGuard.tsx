import { Alert } from 'react-native';
import { router } from 'expo-router';
import { useSubscription } from '../contexts/SubscriptionContext';

export function usePaywallGuard() {
  const { isProUser, subscription } = useSubscription();

  const checkStopLimit = (stopCount: number): boolean => {
    if (isProUser) {
      return true;
    }

    if (stopCount > subscription.stopsLimit) {
      Alert.alert(
        'Upgrade Required',
        `Free users are limited to ${subscription.stopsLimit} stops. Upgrade to Pro for unlimited stops and advanced route optimization.`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Upgrade to Pro',
            onPress: () => router.push('/profile'),
          },
        ]
      );
      return false;
    }

    return true;
  };

  return {
    checkStopLimit,
    isProUser,
  };
}
