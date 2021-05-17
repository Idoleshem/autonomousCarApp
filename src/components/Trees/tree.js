import React from "react";
import tree0 from "./tree1.png";
import tree1 from "./tree1.png";
import tree2 from "./tree1.png";
import finish from "./finish.png";
import { motion } from "framer-motion";

const Tree = ({ treeAnim, name, Id }) => {
  const treeNames = [tree0, tree1, tree2, finish];
  return (
    <div className="tree">
      <motion.img
        Id={Id}
        variants={treeAnim}
        src={treeNames[name]}
        initial="hidden"
        animate="show"
      />
    </div>
  );
};
export default Tree;
