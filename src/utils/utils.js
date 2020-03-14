export const generateRandomShape = () => {
  const shapes = ['triangle', 'rectangle', 'circle'];
  const index = Math.round(Math.random() * 2);
  return shapes[index];
};

export const generateRandomValue = () => Math.floor(Math.random() * 10) + 1;
