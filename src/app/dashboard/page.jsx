"use client";

import CardHanikom from "@/components/CardHanikom";
import Search from "@/components/Search";

function dashboard() {
  return (
    <>
      <div className="h-20 flex items-center justify-between">
        <h3 className="text-4xl font-bold p-3">Dashboard</h3>
        <Search/>
      </div>
      <div className="flex flex-wrap gap-3">
        <CardHanikom />
        <CardHanikom />
        <CardHanikom />
        <CardHanikom />
      </div>
    </>
  );
}

export default dashboard;
