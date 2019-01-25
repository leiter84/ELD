const box = (width = 100, height) => {
  return {
    width: width,
    height: height || width
  };
};

export { box };
