"use client";

import { useEffect, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useAnimatedNumber(target: number, isActive: boolean, duration = 2000) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();

    function update() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCurrent(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [target, isActive, duration]);

  return current;
}
