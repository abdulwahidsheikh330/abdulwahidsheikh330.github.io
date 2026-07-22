"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", isDecimal = false, duration = 2000 }: Props) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  const display = isDecimal
    ? count.toFixed(2)
    : Math.floor(count).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}
