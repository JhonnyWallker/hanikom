"use client";

import CardHanikom from "@/components/CardHanikom";

function dashboard() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <CardHanikom />
      <CardHanikom />
      <CardHanikom />
      <CardHanikom />
    </div>
  );
}

export default dashboard;
