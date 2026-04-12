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
  location?: { lat: number; lng: number; name?: string }; // Geotagging
}

export interface CaptureSchedule {
  id: string;
  type: 'interval' | 'daily' | 'weekly';
  intervalMinutes?: number;
  timeOfDay?: string; // HH:mm
  daysOfWeek?: number[]; // 0-6
  endDate?: number; // timestamp
  isActive: boolean;
}

export interface CareReminder {
  id: string;
  title: string;
  type: 'water' | 'fertilize' | 'prune' | 'custom';
  frequencyDays: number;
  nextDue: number; // timestamp
  isActive: boolean;
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
  cloudSyncProvider?: 'firebase' | 'gdrive' | 'dropbox' | 'none';
  captureSchedules?: CaptureSchedule[];
  careReminders?: CareReminder[];
}