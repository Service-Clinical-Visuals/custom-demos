"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AosInit() {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            easing: "ease-out-cubic",
            offset: 50,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [pathname]);

    return null;
}
