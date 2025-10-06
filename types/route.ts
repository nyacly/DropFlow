export interface Stop {
  id: string;
  label: string;
  rawAddress: string;
  status: 'pending' | 'done' | 'skipped';
  geo?: {
    lat: number;
    lng: number;
  };
  notes?: string;
  pod?: ProofOfDelivery;
}

export interface ProofOfDelivery {
  timestamp: string;
  note?: string;
  photoUri?: string;
}

export interface RouteOptimization {
  orderedStops: Stop[];
  totalDistance: number;
  totalDuration: number;
  decodedPolyline?: Array<{ latitude: number; longitude: number }>;
}
