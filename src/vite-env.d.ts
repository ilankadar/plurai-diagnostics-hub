/// <reference types="vite/client" />

interface Window {
  gtag: (type: string, ...args: any[]) => void;
  dataLayer: any[];
  GA_MEASUREMENT_ID?: string;
}