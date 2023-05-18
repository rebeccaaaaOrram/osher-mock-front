/* eslint-disable react/no-children-prop */
"use client";

import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar
        children={
          <>
            <h1>Dashboard</h1>
          </>
        }
      />
    </>
  );
}
