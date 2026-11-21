import { useState } from 'react';
import { VALLEY_ARTWORK_URL } from '../data/portfolio';

interface PainterlyArtworkProps {
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onImageLoad?: () => void;
}

/**
 * Renders the hotlinked Ghibli-inspired valley painting with a seamless
 * painterly SVG meadow landscape underneath so the art stage never breaks
 * or displays an unstyled fallback box if external hotlinking fails.
 */
export function PainterlyArtwork({
  alt,
  className = '',
  style,
  onImageLoad,
}: PainterlyArtworkProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#DCE8DF]">
      {/* Painterly SVG landscape fallback layer */}
      <svg
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        style={style}
      >
        <defs>
          <linearGradient id="skyWash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5F8F4" />
            <stop offset="38%" stopColor="#DDE9DF" />
            <stop offset="72%" stopColor="#C1D8C5" />
            <stop offset="100%" stopColor="#A9C7A7" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="68%" cy="28%" r="48%">
            <stop offset="0%" stopColor="#FFF7DC" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F5DFAB" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#DDE9DF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="distantRidge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8CAE9B" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#658B76" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="midHill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6F9A66" />
            <stop offset="55%" stopColor="#4F7B4E" />
            <stop offset="100%" stopColor="#2F593D" />
          </linearGradient>
          <linearGradient id="nearMeadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7BA05B" />
            <stop offset="45%" stopColor="#4C7744" />
            <stop offset="100%" stopColor="#1E3A2F" />
          </linearGradient>
          <linearGradient id="foregroundSlope" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#355B3D" />
            <stop offset="100%" stopColor="#152B22" />
          </linearGradient>
        </defs>

        {/* Atmospheric sky */}
        <rect width="1440" height="640" fill="url(#skyWash)" />
        <rect width="1440" height="640" fill="url(#sunGlow)" />

        {/* Soft painterly clouds */}
        <g opacity="0.58" fill="#FFFFFF">
          <ellipse cx="290" cy="140" rx="190" ry="42" />
          <ellipse cx="380" cy="128" rx="130" ry="34" />
          <ellipse cx="1030" cy="158" rx="220" ry="44" />
          <ellipse cx="1140" cy="144" rx="135" ry="32" />
        </g>

        {/* Far misty mountain range */}
        <path
          d="M0 325 Q 190 250, 380 295 T 760 275 T 1130 255 T 1440 290 L 1440 640 L 0 640 Z"
          fill="url(#distantRidge)"
        />

        {/* Mid valley rolling slopes */}
        <path
          d="M0 390 Q 240 315, 520 368 T 1040 338 T 1440 375 L 1440 640 L 0 640 Z"
          fill="url(#midHill)"
        />

        {/* Sunlit meadow ribbon */}
        <path
          d="M0 445 Q 320 395, 680 432 T 1240 404 T 1440 430 L 1440 640 L 0 640 Z"
          fill="url(#nearMeadow)"
        />

        {/* Painterly sunlit wildflower path */}
        <path
          d="M 610 430 Q 700 475, 650 535 T 745 640 L 820 640 Q 755 545, 765 485 T 680 426 Z"
          fill="#E5C88A"
          opacity="0.45"
        />

        {/* Cypress & cedar silhouettes */}
        <g fill="#224132" opacity="0.88">
          <ellipse cx="145" cy="405" rx="26" ry="74" />
          <ellipse cx="192" cy="422" rx="20" ry="56" />
          <ellipse cx="1190" cy="382" rx="28" ry="82" />
          <ellipse cx="1240" cy="405" rx="22" ry="60" />
          <ellipse cx="1285" cy="415" rx="18" ry="48" />
        </g>

        {/* Foreground shadow foliage */}
        <path
          d="M0 535 Q 260 475, 540 535 T 1080 515 T 1440 545 L 1440 640 L 0 640 Z"
          fill="url(#foregroundSlope)"
          opacity="0.72"
        />

        {/* Golden wildflower flecks */}
        <g fill="#E9C272" opacity="0.75">
          <circle cx="260" cy="520" r="3" />
          <circle cx="310" cy="542" r="2.5" />
          <circle cx="440" cy="510" r="3" />
          <circle cx="520" cy="555" r="2.5" />
          <circle cx="885" cy="500" r="3" />
          <circle cx="935" cy="535" r="2.5" />
          <circle cx="1040" cy="495" r="3" />
          <circle cx="1140" cy="545" r="2.5" />
        </g>
      </svg>

      {/* Hotlinked artwork from reference HTML */}
      {!failed && (
        <img
          src={VALLEY_ARTWORK_URL}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => {
            setLoaded(true);
            onImageLoad?.();
          }}
          onError={() => setFailed(true)}
          className={`relative z-10 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={style}
        />
      )}
    </div>
  );
}
