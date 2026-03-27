import React, { useState, useRef, useContext, createContext, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const MouseContext = createContext({ x: 0, y: 0 });

function DockIcon({ icon, href }) {
  const ref = useRef(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 100], [60, 48]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noreferrer">
      <motion.div
        ref={ref}
        style={{ width: springW, height: springW }}
        className="rounded-full bg-white/5 border border-white/10 hover:border-white/30 grid place-items-center text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        {icon}
      </motion.div>
    </a>
  );
}

export default function MagneticDock({ items }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="flex items-end justify-center gap-4 px-4 pb-4"
      >
        {items.map((item, idx) => (
          <DockIcon key={idx} icon={item.icon} href={item.href} />
        ))}
      </div>
    </MouseContext.Provider>
  );
}
