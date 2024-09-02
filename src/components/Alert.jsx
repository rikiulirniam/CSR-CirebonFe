import { useEffect, useState } from "react";

export const Alert = ({ text, show, color = "orange" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 500); // Durasi transisi
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div
      className={`${
        show ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 bg-color-${color} bg-opacity-100 border
       border-color-${color} text-color-white px-4 py-2 mb-5 rounded
      
       ${isVisible ? "block" : "hidden"}`}
      role="alert"
    >
      {/* <strong className="font-bold">Waduhh! </strong> */}
      <span className="block sm:inline">{text}</span>
    </div>
  );
};
