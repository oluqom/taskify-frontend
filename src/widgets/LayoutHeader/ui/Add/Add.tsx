import { FC } from "react";

const Add: FC = () => {
  return (
    <>
      <div className="navbar-end">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y2="24" stroke="#202020" stroke-width="4" />
            <line y1="12" x2="24" y2="12" stroke="#202020" stroke-width="4" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Add;
