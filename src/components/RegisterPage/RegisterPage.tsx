import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { RegisterSuccess } from "./RegisterSuccess";
import React from 'react';

type RegisterPageProps = {
  registerPageOpen: boolean;
  setRegisterPageOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegisterPage = ({
  registerPageOpen,
  setRegisterPageOpen,
}: RegisterPageProps) => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const pageOverlay = React.useRef(null);

  const closeRegisterPage = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === pageOverlay.current) {
      setRegisterPageOpen((prev) => !prev);
    }
  };

  const handleOverlayClassName = () => {
    return registerPageOpen
      ? "h-full min-w-full flex flex-col justify-center items-center text-black fixed overflow-y-auto backdrop-brightness-75"
      : "hidden";
  };

  return (
    <div
      ref= {pageOverlay}
      onClick={(e) => closeRegisterPage(e)}
      className={handleOverlayClassName()}
    >
      <div className="w-4/5 max-w-3xl px-8 py-12 flex flex-col rounded-2xl bg-black">
        {!formSubmitted ? (
          <RegisterForm setFormSubmitted={setFormSubmitted} />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </div>
  );
};