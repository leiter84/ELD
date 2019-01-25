const paddingH20 = {
  paddingHorizontal: 20
};

const paddingV20 = {
  paddingVertical: 20
};

const padding20 = {
  ...paddingH20,
  ...paddingV20
};

const padding = value => {
  return {
    paddingVertical: value,
    paddingHorizontal: value
  };
};

export { paddingH20, paddingV20, padding20, padding };
