"use client";
import Imgage from "next/image";
import PreviewImg from "../../../public/preview.jpg";
export default function Preview() {
  return (
    <div>
      <Imgage src={PreviewImg} alt="Preview" />
    </div>
  );
}
