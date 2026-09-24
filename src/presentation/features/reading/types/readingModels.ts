export interface ReadingHistoryDto {
  id: string;
  type: string;
  title: string;
  fileName?: string;
  fileSize?: string;
  fileUri?: string;
  uploadDate: string;
  descriptionText: string;
}