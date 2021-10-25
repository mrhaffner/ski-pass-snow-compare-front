export const trimResortName = (resortName: string) => {
  return resortName
    .split(' ')
    .map((word: string) => {
      if (word === 'Mountain') {
        return 'Mtn.';
      } else if (word === 'Resort') {
        return '';
      } else {
        return word;
      }
    })
    .join(' ');
};
