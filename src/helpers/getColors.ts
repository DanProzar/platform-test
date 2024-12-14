import type { Config } from "tailwindcss";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const getColors = () => {
  return resolveConfig(tailwindConfig as Config).theme
    ?.colors as unknown as Record<string, any>;
};
