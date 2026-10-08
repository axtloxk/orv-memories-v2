// "use client";

// import { motion } from "motion/react";
// import { ReactNode } from "react";

// interface GlowCardProps {
//   children?: ReactNode;
//   className?: string;
// }

// export default function MovingLightBox({
//   children,
//   className = "",
// }: GlowCardProps) {
//   return (
//     <div
//       className={`relative rounded-2xl p-[1px] overflow-hidden bg-neutral-900/80 ${className}`}
//     >
//       {/* Moving Dim Light Beam */}
//       <motion.div
//         className="absolute -inset-[100%] w-[300%] h-[300%] m-auto"
//         style={{
//           background: `conic-gradient(
//             from 0deg at 50% 50%,
//             transparent 0deg,
//             transparent 300deg,
//             rgba(255, 255, 255, 0.15) 330deg,
//             rgba(255, 255, 255, 0.5) 345deg,
//             rgba(255, 255, 255, 0.15) 360deg
//           )`,
//         }}
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Optional Outer Ambient Glow Blur */}
//       <motion.div
//         className="absolute -inset-[100%] w-[300%] h-[300%] m-auto blur-md opacity-50"
//         style={{
//           background: `conic-gradient(
//             from 0deg at 50% 50%,
//             transparent 0deg,
//             transparent 300deg,
//             rgba(255, 255, 255, 0.2) 345deg,
//             transparent 360deg
//           )`,
//         }}
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Inner Card Masking Layer */}
//       <div className="relative h-full w-full rounded-[15px] bg-neutral-950 p-6 text-neutral-200">
//         {children || (
//           <div className="space-y-2">
//             <h3 className="text-lg font-semibold text-white">
//               Light Beam Border
//             </h3>
//             <p className="text-sm text-neutral-400">
//               A subtle light rotates along the perimeter of this container.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlowCardProps {
  children?: ReactNode;
  className?: string;
}

export default function MovingLightBox({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-[4px] overflow-hidden bg-neutral-900/80 ${className}`}
    >
      {/* Small, concentrated moving light beam */}
      <motion.div
        className="absolute -inset-[100%] w-[300%] h-[300%] m-auto pointer-events-none"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            transparent 345deg,
            rgba(255, 255, 255, 0.2) 352deg,
            rgba(255, 255, 255, 0.8) 357deg,
            transparent 360deg
          )`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner Card Masking Layer */}
      <div className="relative h-full w-full rounded-[15px] bg-neutral-950 p-6 text-neutral-200">
        {children || (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Small Light Beam
            </h3>
            <p className="text-sm text-neutral-400">
              A much shorter, sharper light rotates along the perimeter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
