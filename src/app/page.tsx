"use client";

import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box background="#fff">
        <Image
          src="/images/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </Box>
    </>
  );
}
