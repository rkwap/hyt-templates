export const formatDate = (
  date,
  options = { month: "short", year: "numeric" }
) => {
  if (!date || date === "" || date === "Present") {
    return "Present";
  }
  if (Number.isNaN(Date.parse(date))) {
    return date;
  }
  return new Date(date).toLocaleDateString("en-US", options);
};

export const getYear = (date) => {
  if (!date || date === "" || date === "Present") {
    return "Present";
  }
  if (Number.isNaN(Date.parse(date))) {
    return date;
  }
  return new Date(date).getFullYear();
};

export const prepareEndDate = (endDate) =>
  !endDate || endDate === "Present" || endDate === ""
    ? new Date()
    : new Date(endDate);

export const sortByEndDate = (items) =>
  items.sort((a, b) => {
    const endAraw = a?.duration?.end_date;
    const endBraw = b?.duration?.end_date;
    const dateA = prepareEndDate(endAraw);
    const dateB = prepareEndDate(endBraw);

    const diff = dateB - dateA;
    if (diff !== 0) {
      return diff;
    }

    const startAraw = a?.duration?.start_date;
    const startBraw = b?.duration?.start_date;

    const startA =
      startAraw && !Number.isNaN(Date.parse(startAraw))
        ? new Date(startAraw)
        : new Date(0);
    const startB =
      startBraw && !Number.isNaN(Date.parse(startBraw))
        ? new Date(startBraw)
        : new Date(0);

    return startB - startA;
  });
