import React from "react";
import LayoutKegiatan from "../layouts/LayoutKegiatan";
import PrimaryLayout from "../layouts/PrimaryLayout";

export default function Seminar() {
  return (
    <PrimaryLayout>
      <LayoutKegiatan title={"Seminar Nasional"}></LayoutKegiatan>
    </PrimaryLayout>
  );
}
