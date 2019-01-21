export const DateInterval = () => {
  const start = new Date();
  let end = new Date();
  end.setDate(start.getDate() + 7);

  return start.toDateString() + " - " + end.toDateString();
};

export const MemberCirclesColor = quantity => {
  const colors = ["#12306E", "#126FC2", "#00A8E4", "#74CAE9", "#F5F5F5"];

  const finalNumber = quantity - colors.length;
  return colors.map((color, key) => ({
    color: color,
    quantity: key === colors.length - 1 ? finalNumber : 0
  }));
};
