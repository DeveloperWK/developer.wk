"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

import { Suspense } from "react";
import loading from "../../../public/loading.json";
import software_dev from "../../../public/software_dev.json";

const Software_dev_Animation = () => {
  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function fetchData() {
    return wait(2000).then(() => {
      return <Lottie animationData={software_dev} loop={true} />;
    });
  }
  const resource = fetchData();

  function DataComponent() {
    // Read the resource (this will suspend if the data is not ready)
    const data = resource;
    return <div>{data}</div>;
  }

  return (
    <Suspense fallback={<Lottie animationData={loading} loop={true} />}>
      <DataComponent />
    </Suspense>
  );
};

export default Software_dev_Animation;
