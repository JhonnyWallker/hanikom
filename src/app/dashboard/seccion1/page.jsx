"use client";

import CardHanikom from "@/components/CardHanikom";
import Search from "@/components/Search";
import React from "react";

function seccion1() {
  return (
    <div>
      <div className="h-20 flex items-center justify-between">
        <h3 className="text-4xl font-bold p-3">Sección 1</h3>
        <Search/>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <CardHanikom />
      </div>
    </div>
  );
}

export default seccion1;
