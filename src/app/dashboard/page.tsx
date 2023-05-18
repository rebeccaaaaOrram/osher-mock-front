/* eslint-disable react/no-children-prop */
"use client";

import Sidebar from "@/components/Sidebar";
import Multistep from "@/components/Stepform";

export default function Dashboard() {
  return (
    <>
      <Sidebar
        children={
          <>
            <Multistep />
          </>
        }
      />
    </>
  );
}
