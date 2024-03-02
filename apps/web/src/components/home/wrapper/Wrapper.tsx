import { PropsWithChildren } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
