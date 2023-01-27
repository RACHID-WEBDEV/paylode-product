export const SelectArrowIcon = (props) => (
  <svg width={12} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m1 1.5 5 5 5-5" stroke="#98A9BC" strokeWidth={1.667} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const XIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.526 32.526"
      style={{ enablebackground: 'new 32.526 32.526' }}
      xmlSpace="preserve"
      {...props}
    >
      <path d="M32.526 2.828 29.698 0 16.263 13.435 2.828 0 0 2.828l13.435 13.435L0 29.698l2.828 2.828 13.435-13.435 13.435 13.435 2.828-2.828-13.435-13.435z" />
    </svg>
  );
};

export const Cancel = (props) => (
  <svg width={17} height={17} {...props} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.5" cy="8.5" r="7.5" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.7494 6.24963L6.2494 10.7496" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M6.2494 6.24963L10.7494 10.7496" stroke="black" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);

export const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-search"
    width={18}
    height={18}
    {...props}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#ffffff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx={10} cy={10} r={7} />
    <line x1={21} y1={21} x2={15} y2={15} />
  </svg>
);
