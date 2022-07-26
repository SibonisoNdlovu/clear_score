import * as React from "react";

export const CloseIcon = ({
  height = "32px",
  width = "32px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M25.152 5.82l1.029 1.028L17.028 16l9.153 9.152-1.029 1.029L16 17.028l-9.152 9.153-1.029-1.029L14.972 16 5.82 6.848l1.029-1.029L16 14.972z"></path>
  </svg>
);
