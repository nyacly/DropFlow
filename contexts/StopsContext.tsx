import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface StopsContextType {
  stops: Stop[];
  updateStop: (stop: Stop) => void;
  updateStops: (stops: Stop[]) => void;
  addStops: (stops: Stop[]) => void;
  clearStops: () => void;
}

const StopsContext = createContext<StopsContextType | undefined>(undefined);

export function StopsProvider({ children }: { children: ReactNode }) {
  const [stops, setStops] = useState<Stop[]>([]);

  const updateStop = (updatedStop: Stop) => {
    setStops(prevStops =>
      prevStops.map(stop => (stop.id === updatedStop.id ? updatedStop : stop))
    );
  };

  const updateStops = (newStops: Stop[]) => {
    setStops(newStops);
  };

  const addStops = (newStops: Stop[]) => {
    setStops(prevStops => [...prevStops, ...newStops]);
  };

  const clearStops = () => {
    setStops([]);
  };

  return (
    <StopsContext.Provider
      value={{
        stops,
        updateStop,
        updateStops,
        addStops,
        clearStops,
      }}
    >
      {children}
    </StopsContext.Provider>
  );
}

export function useStops() {
  const context = useContext(StopsContext);
  if (context === undefined) {
    throw new Error('useStops must be used within a StopsProvider');
  }
  return context;
}
