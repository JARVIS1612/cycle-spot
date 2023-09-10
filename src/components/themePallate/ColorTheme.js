import React from "react";

export default function ColorTheme({mainColors}) {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            gap: 0
         }}
      >
         <div style={{ height: 16, width: 16, borderRadius: 32, backgroundColor: mainColors[0] }}></div>
         <div style={{ height: 16, width: 16, borderRadius: 32, backgroundColor: mainColors[1] }}></div>
         <div style={{ height: 16, width: 16, borderRadius: 32, backgroundColor: "rgb(21, 14, 31)" }}></div>
         <div style={{ height: 16, width: 16, borderRadius: 32, backgroundColor: "rgb(88, 77, 102)" }}></div>
         <div style={{ height: 16, width: 16, borderRadius: 32, backgroundColor: "rgb(243, 241, 246)" }}></div>
      </div>
   );
}
