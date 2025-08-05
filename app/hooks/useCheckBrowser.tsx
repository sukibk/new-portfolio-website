import { useEffect, useState } from "react";

/**
 * Custom hook for browser detection.
 * Detects Chrome, Safari, Firefox, Edge, and other browsers.
 * Also provides information about the operating system.
 *
 * @returns {Object} Browser and OS information
 */
const useBrowserDetection = () => {
  // Default state - all browsers set to false initially
  const [browserInfo, setBrowserInfo] = useState({
    isChrome: false,
    isSafari: false,
    isFirefox: false,
    isEdge: false,
    isIE: false,
    isOpera: false,
    isBrave: false,
    isYandex: false,
    isMobile: false,
    isDesktop: false,
    isTablet: false,
    isIOS: false,
    isAndroid: false,
    isMacOS: false,
    isWindows: false,
    isLinux: false,
    browserName: "",
    browserVersion: "",
    osName: "",
    userAgent: "",
    isClient: false,
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return;

    const detectBrowser = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const vendor = window.navigator.vendor.toLowerCase();

      // Browser detection
      const isChrome =
        /chrome/.test(userAgent) &&
        /google inc/.test(vendor) &&
        !/edg/.test(userAgent);
      const isSafari =
        /safari/.test(userAgent) &&
        /apple computer/.test(vendor) &&
        !/chrome/.test(userAgent) &&
        !/chromium/.test(userAgent);
      const isFirefox = /firefox/.test(userAgent);
      const isEdge = /edg/.test(userAgent);
      const isIE = /trident/.test(userAgent);
      const isOpera = /opr/.test(userAgent);

      // More specialized browser detection
      const isBrave = isChrome && (window.navigator as any).brave !== undefined;
      const isYandex = /yabrowser/.test(userAgent);

      // Device type detection
      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;

      // OS detection
      const isIOS = /iphone|ipad|ipod/i.test(userAgent);
      const isAndroid = /android/i.test(userAgent);
      const isMacOS = /mac os x/i.test(userAgent) && !isIOS;
      const isWindows = /windows nt/i.test(userAgent);
      const isLinux = /linux/i.test(userAgent) && !isAndroid;

      // Browser name extraction
      let browserName = "Unknown";
      if (isEdge) browserName = "Edge";
      else if (isBrave) browserName = "Brave";
      else if (isChrome) browserName = "Chrome";
      else if (isSafari) browserName = "Safari";
      else if (isFirefox) browserName = "Firefox";
      else if (isOpera) browserName = "Opera";
      else if (isIE) browserName = "Internet Explorer";
      else if (isYandex) browserName = "Yandex";

      // OS name extraction
      let osName = "Unknown";
      if (isIOS) osName = "iOS";
      else if (isAndroid) osName = "Android";
      else if (isMacOS) osName = "macOS";
      else if (isWindows) osName = "Windows";
      else if (isLinux) osName = "Linux";

      // Browser version extraction - simplified version
      let browserVersion = "";
      if (isChrome) {
        browserVersion = userAgent.match(/chrome\/(\d+(\.\d+)?)/i)?.[1] || "";
      } else if (isSafari) {
        browserVersion = userAgent.match(/version\/(\d+(\.\d+)?)/i)?.[1] || "";
      } else if (isFirefox) {
        browserVersion = userAgent.match(/firefox\/(\d+(\.\d+)?)/i)?.[1] || "";
      } else if (isEdge) {
        browserVersion = userAgent.match(/edg\/(\d+(\.\d+)?)/i)?.[1] || "";
      }

      setBrowserInfo({
        isChrome,
        isSafari,
        isFirefox,
        isEdge,
        isIE,
        isOpera,
        isBrave,
        isYandex,
        isMobile,
        isDesktop,
        isTablet,
        isIOS,
        isAndroid,
        isMacOS,
        isWindows,
        isLinux,
        browserName,
        browserVersion,
        osName,
        userAgent,
        isClient: true,
      });
    };

    detectBrowser();
  }, []);

  return browserInfo;
};

export default useBrowserDetection;
