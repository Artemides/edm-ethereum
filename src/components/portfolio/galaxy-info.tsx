"use client";

import { useParams, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { SectionDevelop } from "./section-develop";
import { ApproachTitle } from "@/utils/types";
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
        className="w-full h-[85%]  fixed   gradient-base2 drop-shadow border-[1px] 
        border-secondary/80
        lg:w-[80%] lg:h-[95%] lg:left-[calc(50%-40%)]
        xl:w-[50%] xl:left-[calc(50%-25%)]
        2xl:h-[75%] 2xl:w-[40%] 2xl:left-[calc(50%-20%)]
        
   "
      >
        {!!active ? sections[active] : null}
      </DrawerContent>
    </Drawer>
  );
};
