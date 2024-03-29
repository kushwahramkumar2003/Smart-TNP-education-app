import { motion } from "framer-motion";

interface TiltleProps {
  title: string;
}
const Title = (props: TiltleProps) => {
  const { title } = props;
  return (
    <motion.h1
      initial={{ y: -1000 }}
      animate={{ y: -150 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      className="text-center"
    >
      {title}
    </motion.h1>
  );
};

export default Title;
