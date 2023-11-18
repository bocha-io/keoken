type ArrowIconProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({}) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_77_690)">
        <circle cx="40" cy="36" r="36" fill="#BAFBFF" />
        <circle cx="40" cy="36" r="34.5" stroke="black" strokeWidth="3" />
      </g>
      <path
        d="M59.0526 25L40 58L20.9474 25L59.0526 25Z"
        fill="#FFC8DE"
        stroke="black"
        strokeWidth="3"
      />
      <defs>
        <filter
          id="filter0_d_77_690"
          x="0"
          y="0"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_77_690"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_77_690"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowIcon;
