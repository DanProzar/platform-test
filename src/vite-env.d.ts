/// <reference types="vite/client" />
declare module "../tailwind.config.js" {
  const config: {
    [key: string]: any; // You can replace 'any' with specific types if needed.
  };
  export default config;
}