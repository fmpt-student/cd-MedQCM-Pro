nterface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const process: {
  env: {
    GEMINI_API_KEY?: string;
    [key: string]: string | undefined;
  };
};
