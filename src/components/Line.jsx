import React from "react";

export default function Line() {
  return (
    <div className="mx-auto my-8 w-[60%]">
      <div
        style={{
          height: "3px",
          borderRadius: 9999,
          background:
            "linear-gradient(to right, #7c3aed 0%, #7c3aed 30%, #ffffff 45%, #ffffff 55%, #7c3aed 70%, #7c3aed 100%)",
        }}
      />
    </div>
  );
}
