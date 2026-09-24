import { VoiceType, ThemeType } from "./preferencesModels";

export interface UserPreferencesResponse {
  screenReader: boolean;
  speechRate: number;
  voiceType: VoiceType;
  volumeLevel: number;
  theme: ThemeType;
  vibrationEnabled: boolean;
  alertSoundEnabled: boolean;
}