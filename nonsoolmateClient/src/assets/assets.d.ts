declare module "*.jpg" {
  const path: string;
  export default path;
}
declare module "*.png" {
  const path: string;
  export default path;
}

declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
