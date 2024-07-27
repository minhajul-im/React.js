import { IconType } from '.';

const MenuIcon = ({ isDark }: IconType) => {
  return (
    <svg
      className={`${isDark ? 'text-white' : 'text-[#000000]'}`}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
    </svg>
  );
};

export default MenuIcon;
