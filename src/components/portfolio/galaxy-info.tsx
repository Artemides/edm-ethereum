"use client";

import { useParams, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { SectionDevelop } from "./section-develop";
import { topics } from "@/utils/data";
import { Approach, ApproachTitle } from "@/utils/types";
import { SectionDesign } from "./section-design";
import { SectionTest } from "./section-test";
import { SectionSecurity } from "./section-security";
import { SectionVerify } from "./section-verify";
import { SectionDeploy } from "./section-deploy";
import { SectionMonitor } from "./section-monitor";
import Resume from "./resume";

type SectionInfo = Record<`sm-info-${ApproachTitle | "resume"}`, ReactNode>;

export const sections: SectionInfo = {
  "sm-info-design": <SectionDesign />,
  "sm-info-develop": <SectionDevelop />,
  "sm-info-test": <SectionTest />,
  "sm-info-audit": <SectionSecurity />,
  "sm-info-verify": <SectionVerify />,
  "sm-info-deploy": <SectionDeploy />,
  "sm-info-monitor": <SectionMonitor />,
  "sm-info-resume": <Resume />,
};

export const GalaxyInfo = () => {
  const [active, setActive] = useState<keyof SectionInfo | null>(null);
  const router = useRouter();
  const params = useParams();
  const handleClose = () => {
    router.replace(window.location.pathname);
    setActive(null);
  };
  useEffect(() => {
    const handleChange = () => {
      let hash = window.location.hash.slice(1);

      if (!Object.keys(sections).includes(hash)) return;

      setActive(hash as keyof SectionInfo);
    };
    handleChange();

    // Cleanup listener on component unmount
  }, [params]);

  return (
    <Drawer open={!!active} onClose={handleClose}>
      <DrawerTitle className="hidden">info</DrawerTitle>
      <DrawerHeader className="hidden">
        <DrawerDescription>approach info</DrawerDescription>
      </DrawerHeader>
      <DrawerContent
        title={"approach-section"}
        className="h-[95%] 2xl:h-[75%] w-[50%] 2xl:w-[40%] fixed left-[calc(50%-25%)] 2xl:left-[calc(50%-20%)] gradient-base2 drop-shadow border-[1px] border-secondary/80
   "
      >
        {!!active ? sections[active] : null}
      </DrawerContent>
    </Drawer>
  );
};
