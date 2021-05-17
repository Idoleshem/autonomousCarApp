import CellsLocationMargin from "./cellsLocationMargin";
const treesCells = [
  {
    treeId: 1,
    start: 4,
    end: 0,
  },
  {
    treeId: 2,
    start: 12,
    end: 9,
  },
  {
    treeId: 3,
    start: 5,
    end: 2,
  },
  {
    treeId: 4,
    start: 7,
    end: 6,
  },
  {
    treeId: 5,
    start: 15,
    end: 15,
  },
  {
    treeId: 6,
    start: 15,
    end: 15,
  },
  {
    treeId: 7,
    start: 4,
    end: 4,
  },
  {
    treeId: 8,
    start: 15,
    end: 15,
  },
];

const TreesPositions2 = [
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

        opacity: 1,
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
        opacity: 1,
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

        opacity: 1,
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
    //7
    treeId: "tree0",
    name: 0,
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

        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    //8
    treeId: "tree0",
    name: 0,
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
        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },

  {
    //9
    treeId: "tree0",
    name: 0,
    treeAnim: {
      hidden: {
        x: CellsLocationMargin[treesCells[7].start].x,
        y: CellsLocationMargin[treesCells[7].start].y,
        opacity: 0,
        scale: 0.8,
      },
      show: {
        x: CellsLocationMargin[treesCells[7].end].x,
        y: CellsLocationMargin[treesCells[7].end].y,

        opacity: 0,
        scale: 0.8,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default TreesPositions2;
