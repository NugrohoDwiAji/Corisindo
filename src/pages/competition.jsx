import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import { Layout } from "lucide-react";
import LayoutKegiatan from "../layouts/LayoutKegiatan";

function Competition() {
  return (
    <PrimaryLayout>
      <LayoutKegiatan title="Corisindo Competition 2024">
        <h1 className="font-bold">Competition Subject</h1>
      </LayoutKegiatan>
    </PrimaryLayout>
  );
}

export default Competition;
