import CellsLocationMargin from "./cellsLocationMargin";
const treesCells = [
  {
    treeId: 1,
    start: 0,
    end: 0,
  },
  {
    treeId: 2,
    start: 9,
    end: 8,
  },
  {
    treeId: 3,
    start: 2,
    end: 0,
  },
  {
    treeId: 4,
    start: 4,
    end: 0,
  },
  {
    treeId: 5,
    start: 10,
    end: 8,
  },
  {
    //flag
    treeId: 6,
    start: 4,
    end: 3,
  },
  {
    //flag
    treeId: 7,
    start: 12,
    end: 11,
  },
];

const TreesPositions7 = [
  {
    //1
    treeId: "tree0",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[0].start].x,
        y: CellsLocationMargin[treesCells[0].start].y,
        opacity: 0,
        scale: 0.8,
      },
      show: {
        x: CellsLocationMargin[treesCells[0].end].x,
        y: CellsLocationMargin[treesCells[0].end].y,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    //2
    treeId: "tree0",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[1].start].x,
        y: CellsLocationMargin[treesCells[1].start].y,
        opacity: 0,
        scale: 0.8,
      },
      show: {
        x: CellsLocationMargin[treesCells[1].end].x,
        y: CellsLocationMargin[treesCells[1].end].y,

        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    //3
    treeId: "tree0",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[2].start].x,
        y: CellsLocationMargin[treesCells[2].start].y,
        opacity: 0,
        scale: 0.8,
      }, //4
      show: {
        x: CellsLocationMargin[treesCells[2].end].x,
        y: CellsLocationMargin[treesCells[2].end].y,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    //4
    treeId: "tree0",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[3].start].x,
        y: CellsLocationMargin[treesCells[3].start].y,
        opacity: 0,
        scale: 0.8,
      },
      show: {
        x: CellsLocationMargin[treesCells[3].end].x,
        y: CellsLocationMargin[treesCells[3].end].y,

        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    //5
    treeId: "tree0",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[4].start].x,
        y: CellsLocationMargin[treesCells[4].start].y,
        opacity: 1,
        scale: 0.8,
      }, //6
      show: {
        x: CellsLocationMargin[treesCells[4].end].x,
        y: CellsLocationMargin[treesCells[4].end].y,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    //6
    treeId: "tree0",
    name: 3,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[5].start].x,
        y: CellsLocationMargin[treesCells[5].start].y,
        opacity: 0,
        scale: 0.8,
      },
      show: {
        x: CellsLocationMargin[treesCells[5].end].x,
        y: CellsLocationMargin[treesCells[5].end].y,

        opacity: 1,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    //7
    treeId: "tree0",
    name: 3,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[6].start].x,
        y: CellsLocationMargin[treesCells[6].start].y,
        opacity: 0,
        scale: 0.8,
      },
      show: {
        x: CellsLocationMargin[treesCells[6].end].x,
        y: CellsLocationMargin[treesCells[6].end].y,
        opacity: 1,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default TreesPositions7;
