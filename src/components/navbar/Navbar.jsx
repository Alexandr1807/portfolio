import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://t.me/o9skii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/telegram.png" alt="telegram" />
          </a>
          <a
            href="https://github.com/Alexandr1807"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
