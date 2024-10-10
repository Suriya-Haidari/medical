// @ts-nocheck
interface BtnProps {
  text: string;
}

const Btn: React.FC<BtnProps> = ({ text }) => {
  return (
    <a style={{ "--clr": "#000" }} className="btn-3" href="/about">
      <span className="button__icon-wrapper">
        <svg
          width="10"
          className="button__icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="currentColor"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          ></path>
        </svg>
      </span>
      <p className="font-cold text-xl">{text}</p>
    </a>
  );
};

export default Btn;
