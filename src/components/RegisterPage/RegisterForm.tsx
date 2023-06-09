import { useState } from "react";

type RegisterFormProps = {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormFields = {
  username: string;
  email: string;
};

export const RegisterForm = ({ setFormSubmitted }: RegisterFormProps) => {
  const [formFields, setFormFields] = useState<FormFields>({
    username: "",
    email: "",
  });

  const validateUsername = () => {
    if (!formFields.username || formFields.username.length < 3) {
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!formFields.email || !formFields.email.match(emailRegex)) {
      return false;
    }
    return true;
  };

  const handleFormInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!validateUsername() || !validateEmail()) {
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <form className="w-full flex flex-col gap-6 items-center">
      <div className="w-11/12 flex flex-col gap-2 text-center pb-7 border-b-[1px] border-gray-400">
        <h2 className="text-3xl text-fuchsia-400 font-bold">Fill in your info !</h2>
        <p className="text-lg text-fuchsia-400">
          and let's support your team, together!
        </p>
      </div>

      <div className="w-4/5 flex flex-col gap-1">
        <label htmlFor="username" className="text-fuchsia-400">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="your name here"
          onBlur={(e) => handleFormInput(e)}
          className="px-4 py-2 border-transparent rounded-xl text-black placeholder-slate-500 focus:outline-none"
        />
        <span
          id="usernameError"
          className={`text-sm text-red-600 ${
            validateUsername() ? "hidden" : ""
          }`}
        >
          Invalid username
        </span>
      </div>

      <div className="w-4/5 flex flex-col gap-1">
        <label htmlFor="Email" className="text-fuchsia-400">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your email here"
          onBlur={(e) => handleFormInput(e)}
          className="px-4 py-2 border-transparent rounded-xl text-black placeholder-slate-500 focus:outline-none"
        />
        <span
          id="emailError"
          className={`text-sm text-red-600 ${validateEmail() ? "hidden" : ""}`}
        >
          Invalid email
        </span>
      </div>

      <button
        type="submit"
        onClick={(e) => handleFormSubmit(e)}
        className="px-10 py-3 mt-4 text-xl rounded-lg text-white bg-fuchsia-500 transition-all duration-500 hover:bg-fuchsia-900 hover:scale-110"
      >
        Register
      </button>
    </form>
  );
};