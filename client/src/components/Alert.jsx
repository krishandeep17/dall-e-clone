import { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Alert = ({ showAlert }) => {
  const { show, message } = showAlert;

  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    visible && (
      <div className="fixed left-[50%] top-[2%] translate-x-[-50%] translate-y-[-2%] w-full mx-auto sm:px-8 px-4 z-20">
        <div className="max-w-lg mx-auto px-3 py-2 border border-red-200 rounded text-red-600 bg-red-100 flex items-center gap-3 shadow-md">
          <FaExclamationCircle className="shrink-0 w-6 h-6" />
          <p className="text-sm">{message}</p>
        </div>
      </div>
    )
  );
};
export default Alert;
