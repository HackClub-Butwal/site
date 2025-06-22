import React from "react";
import { Box } from "theme-ui";

export default function Card({ children, sx, ...props }) {
  return (
    <Box
      sx={{
        bg: "background",
        borderRadius: "lg",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        p: 3,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
