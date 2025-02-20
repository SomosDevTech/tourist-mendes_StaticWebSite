import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

function ButtonBackToTop(): React.ReactNode {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);

      } else {
        setIsVisible(false);
      }
    };

    const checkIfAtBottom = () => {
      const isBottom = window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;
      setIsAtBottom(isBottom)
    }

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", checkIfAtBottom);
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      window.removeEventListener("scroll", checkIfAtBottom)
    };
  }, []);
  return (
    <>
      {isVisible && (
        <motion.button
          aria-label='Voltar ao topo'
          onClick={scrollToTop}
          className={`group fixed flex items-center justify-center ${isAtBottom ? "bottom-[270px] right-3 md:bottom-[230px] md:right-5 xl:bottom-[170px] xl:right-10" : "bottom-6 right-6"
            } text-white bg-primaryDark hover:bg-primaryDark dark:bg-secondaryDark rounded-full transition-colors z-30`}
          initial={{ width: "56px", height: "56px" }}
          whileHover={{ width: "160px" }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <ChevronUp className="w-6 lg:w-10 h-6 lg:h-10 pb-[2px] text-white" />
          <motion.span
            className="hidden lg:group-hover:flex pr-1 font-medium text-white transition-all duration-100 flex-shrink-0 whitespace-nowrap"
          >
            Voltar ao topo
          </motion.span>
        </motion.button>
      )}
    </>
  );
}

export default ButtonBackToTop;
