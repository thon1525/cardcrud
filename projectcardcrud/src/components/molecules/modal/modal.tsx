import { ReactNode, useContext, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components";
import FloatingButton from "@/components/atoms/button/FloatingButton";
import addContextModal from "@/components/addcontext/addContextModal";
interface ModalProps {
  children?: ReactNode;
 
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
    const {selectCard}= useContext(addContextModal);
  return (
    <>
      <FloatingButton
        onClick={() => setIsShowModal(true)}
        position="bottom-left"
      >
        {selectCard ? "-" : "+"}
      </FloatingButton>
      {isShowModal && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5"
          >
            <button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-white text-black h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <div>{children}</div>
          </motion.div>
        
        </>
      )}
    </>
  );
};

export { Modal };
