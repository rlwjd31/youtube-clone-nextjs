"use client";

import useUIState from "@/hooks/useUIState";
import { useEffect } from "react";

type HeaderBgChangerProps = {
  imageSrc: string;
};

export default function HeaderBgChanger({ imageSrc }: HeaderBgChangerProps) {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc, setHeaderImageSrc]);
  return null;
}
