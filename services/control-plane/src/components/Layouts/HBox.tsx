import React from "react";

export const HBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
};
