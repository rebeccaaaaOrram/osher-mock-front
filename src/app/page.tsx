"use client";

import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Login from "../components/Login";

export default function Home() {
  return (
    <>
      <Box background="#fff">
        <Login />
      </Box>
    </>
  );
}
