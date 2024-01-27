const CloseIcon = ({ changeIcon, setChangeIcon }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x size-9 stroke-green-600/80 md:hidden hover:cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setChangeIcon(!changeIcon)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default CloseIcon;
