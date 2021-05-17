import CellsLocation from "./CellsLocation";
const carsCells = [
  {
    carId: 1,
    start: 9,
    end: 9,
  },
  {
    carId: 2,
    start: 17,
    end: 16,
  },
  {
    carId: 3,
    start: 5,
    end: 4,
  },
  {
    carId: 4,
    start: 14,
    end: 12,
  },
  {
    carId: 5,
    start: 7,
    end: 7,
  },
  {
    carId: 6,
    start: 15,
    end: 15,
  },
  {
    carId: 7,
    start: 23,
    end: 23,
  },
  {
    carId: 8,
    start: 0,
    end: 0,
  },
  {
    carId: 9,
    start: 0,
    end: 0,
  },
  {
    carId: 10,
    start: 0,
    end: 0,
  },
];

const CarsPositions1 = [
  {
    //0
    carId: "car1",
    name: 0,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[0].start].x,
        y: CellsLocation[carsCells[0].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[0].end].x,
        y: CellsLocation[carsCells[0].end].y,
        opacity: 1,
        transition: { duration: 2, delay: 0.4, ease: "linear" },
      },
    },
  },

  {
    // 1
    carId: "car1",
    name: 1,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[1].start].x,
        y: CellsLocation[carsCells[1].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[1].end].x,
        y: CellsLocation[carsCells[1].end].y,

        opacity: 0,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 2
    carId: "car1",
    name: 1,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[2].start].x,
        y: CellsLocation[carsCells[2].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[2].end].x,
        y: CellsLocation[carsCells[2].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 3
    carId: "car1",
    name: 2,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[3].start].x,
        y: CellsLocation[carsCells[3].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[3].end].x,
        y: CellsLocation[carsCells[3].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 4
    carId: "car1",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[4].start].x,
        y: CellsLocation[carsCells[4].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[4].end].x,
        y: CellsLocation[carsCells[4].end].y,

        opacity: 1,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 5
    carId: "car1",
    name: 0,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[5].start].x,
        y: CellsLocation[carsCells[5].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[5].end].x,
        y: CellsLocation[carsCells[5].end].y,
        opacity: 0,
        transition: { duration: 2, delay: 0.4, ease: "linear" },
      },
    },
  },

  {
    // 6
    carId: "car1",
    name: 1,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[6].start].x,
        y: CellsLocation[carsCells[6].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[6].end].x,
        y: CellsLocation[carsCells[6].end].y,

        opacity: 0,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 7
    carId: "car1",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[7].start].x,
        y: CellsLocation[carsCells[7].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[7].end].x,
        y: CellsLocation[carsCells[7].end].y,

        opacity: 0,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 8
    carId: "car1",
    name: 3,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[8].start].x,
        y: CellsLocation[carsCells[8].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[8].end].x,
        y: CellsLocation[carsCells[8].end].y,

        opacity: 0,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
  {
    // 9
    carId: "car1",
    name: 2,
    carAnim: {
      hidden: {
        x: CellsLocation[carsCells[9].start].x,
        y: CellsLocation[carsCells[9].start].y,
        opacity: 0,
      },
      show: {
        x: CellsLocation[carsCells[9].end].x,
        y: CellsLocation[carsCells[9].end].y,

        opacity: 0,
        transition: { duration: 2, ease: "linear", delay: 0.4 },
      },
    },
  },
];

export default CarsPositions1;
