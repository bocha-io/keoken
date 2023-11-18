type ArrowIconProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({}) => {
  return (
    <svg
      width="58"
      height="49"
      viewBox="0 0 58 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.865 48.5086C29.4797 49.1729 28.5203 49.1729 28.135 48.5086L1.68071e-06 -8.89944e-07C1.68071e-06 -8.89944e-07 14.1883 24.3335 29.0003 24.3333C43.8122 24.3332 58 -5.96046e-06 58 -5.96046e-06L29.865 48.5086Z"
        fill="#F9017F"
      />
    </svg>
  );
};

export default ArrowIcon;
