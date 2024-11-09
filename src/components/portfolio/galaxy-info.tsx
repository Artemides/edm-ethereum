"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { SectionDevelop } from "./section-develop";
import { topics } from "@/utils/data";
import { Approach } from "@/utils/types";
import { SectionDesign } from "./section-design";
import { SectionTest } from "./section-test";
import { SectionSecurity } from "./section-security";
import { SectionVerify } from "./section-verify";
import { SectionDeploy } from "./section-deploy";
import { SectionMonitor } from "./section-monitor";

export const sections: { [key: string]: React.ReactNode } = {
  "sm-approach-design": <SectionDesign />,
  "sm-approach-develop": <SectionDevelop />,
  "sm-approach-test": <SectionTest />,
  "sm-approach-audit": <SectionSecurity />,
  "sm-approach-verify": <SectionVerify />,
  "sm-approach-deploy": <SectionDeploy />,
  "sm-approach-monitor": <SectionMonitor />,
};

export const GalaxyInfo = () => {
  const [active, setActive] = useState<Approach | null>(null);
  const router = useRouter();
  const params = useParams();
  const handleClose = () => {
    router.replace(window.location.pathname);
    setActive(null);
  };
  useEffect(() => {
    console.log("Mounting info");
    const handleChange = () => {
      const hash = window.location.hash;

      console.log("hash:", hash);
      const topic = topics.find((t) => t.id === hash.substring(1));
      if (!topic) return;

      console.log({ topic });
      setActive(hash ? topic : null);
    };
    handleChange();

    // Cleanup listener on component unmount
  }, [params]);

  return (
    <Drawer open={!!active} onClose={handleClose}>
      <DrawerContent
        className="h-[95%] w-[50%] fixed left-[calc(50%-25%)] gradient-base2 drop-shadow border-[1px] border-secondary/80
   "
      >
        {!!active ? sections[active?.id] : null}
      </DrawerContent>
    </Drawer>
  );
};
