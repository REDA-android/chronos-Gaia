export interface CapturedImage {
  id: string;
  uid: string;
  timestamp: number;
  dataUrl: string;
  analysis?: string;
  confidence?: number;
  growthStage?: string;
  eventTags?: string[];
  healthStatus?: 'HEALTHY' | 'STRESSED' | 'CRITICAL';
  advice?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  plantType?: string;
  hasCompletedOnboarding?: boolean;
  settings?: MonitorSettings;
}

export enum AppMode {
  MONITOR = 'MONITOR',
  CHAT = 'CHAT',
  LIVE = 'LIVE',
  GALLERY = 'GALLERY'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: number;
  isThinking?: boolean;
  groundingUrls?: Array<{ title?: string; uri: string }>;
  imageUrl?: string;
}

export interface MonitorSettings {
  intervalHours: number;
  autoAnalyze: boolean;
  wakeLockActive: boolean;
  facingMode: 'user' | 'environment';
  resolution: 'low' | 'med' | 'high';
  playbackFps: number;
  timestampPrecision: 'date' | 'time' | 'both';
  minConfidenceThreshold: number;
  autoAdvance: boolean;
  plantType?: string;
  hasCompletedOnboarding?: boolean;
}