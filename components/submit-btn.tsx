import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className="rounded-md bg-black px-4 py-2 text-white"
    >
      Send
    </button>
  );
}

