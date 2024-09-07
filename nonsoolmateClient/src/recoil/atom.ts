import { atom } from "recoil";

export const takeTestPdfPlugin = atom<boolean>({
  key: "takeTestPdfPluginState",
  default: false,
});
