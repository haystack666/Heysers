import { useState, useEffect } from 'react';

// 响应式断点
export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export interface ResponsiveInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  isXxl: boolean;
}

const useResponsive = (): ResponsiveInfo => {
  const [screenInfo, setScreenInfo] = useState<ResponsiveInfo>(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    return {
      width,
      height,
      isMobile: width <= breakpoints.md,
      isTablet: width > breakpoints.md && width <= breakpoints.lg,
      isDesktop: width > breakpoints.lg,
      isXs: width <= breakpoints.xs,
      isSm: width > breakpoints.xs && width <= breakpoints.sm,
      isMd: width > breakpoints.sm && width <= breakpoints.md,
      isLg: width > breakpoints.md && width <= breakpoints.lg,
      isXl: width > breakpoints.lg && width <= breakpoints.xl,
      isXxl: width > breakpoints.xl,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenInfo({
        width,
        height,
        isMobile: width <= breakpoints.md,
        isTablet: width > breakpoints.md && width <= breakpoints.lg,
        isDesktop: width > breakpoints.lg,
        isXs: width <= breakpoints.xs,
        isSm: width > breakpoints.xs && width <= breakpoints.sm,
        isMd: width > breakpoints.sm && width <= breakpoints.md,
        isLg: width > breakpoints.md && width <= breakpoints.lg,
        isXl: width > breakpoints.lg && width <= breakpoints.xl,
        isXxl: width > breakpoints.xl,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenInfo;
};

export default useResponsive;
