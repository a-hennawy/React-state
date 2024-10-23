//this will provide with the number of boxes needed and the random colors needed
const boxes = Array.from({ length: 16 }, (_, idx) => ({
  id: idx,
  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
}));

export default boxes;
