export enum VoiceType {
  Feminina = 0,
  Masculina = 1,
}

export enum ThemeType {
  Light = 0,
  Dark = 1,
}

export interface UpdateUserPreferencesDto {
    screenReader: boolean;
    speechRate: number;
    voiceType: VoiceType;
    volumeLevel: number;
    theme: ThemeType;
    vibrationEnabled: boolean;
    alertSoundEnabled: boolean;
}