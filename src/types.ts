type SurveyOptions = {
  createdAt?: string;
  darkBackground?: boolean;
  email?: string;
  forceDisplay?: boolean;
  initialDelay?: number;
  minTimeForDisplay?: number;
  minTimeOnPage?: number;
  name?: string;
  onComment?: () => void;
  onHide?: () => void;
  onRespond?: () => void;
  onShow?: () => void;
  properties?: {
    [key: string]: string;
  },
  recurringPeriod?: number;
};

export declare interface Delighted
{
  push: (data: any) => void;
  survey: (options: SurveyOptions) => void;
  SNIPPET_VERSION: string;
}
