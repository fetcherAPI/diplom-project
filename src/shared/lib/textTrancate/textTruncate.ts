interface ITextTrancateReturn {
  resultText: string;
  isTrancated: boolean;
}

export const textTrancate = (
  maxSize: number,
  textToTrancate: string
): ITextTrancateReturn => {
  if (textToTrancate.length > maxSize) {
    return {
      resultText: `${textToTrancate.slice(0, maxSize)}...`,
      isTrancated: true,
    };
  }
  return {
    resultText: textToTrancate,
    isTrancated: false,
  };
};
