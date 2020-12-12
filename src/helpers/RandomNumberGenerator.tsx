export const randomAvailableNumberGenerator = (fullArr: number[]) => {
  let newarr: number[] | number[][] = fullArr.map((num, i) => {
    const indexArr = [];
    if (fullArr[i] === 0) {
      indexArr.push(i);
    }

    return indexArr;
  });

  newarr = newarr.flat();
  const rndIndex = Math.floor(Math.random() * newarr.length);
  return [newarr[rndIndex]][0];
};
