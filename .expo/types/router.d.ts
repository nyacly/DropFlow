/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/profile` | `/(tabs)/routes` | `/_sitemap` | `/auth` | `/navigate` | `/onboarding` | `/plan` | `/profile` | `/routes`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
