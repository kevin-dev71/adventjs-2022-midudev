function createCube(size) {
  const aside = [];
  const theOtherSide = [];
  for (let i = 0; i < size; i++) {
    aside.push(
      ' '.repeat(size - 1 - i) + '/\\'.repeat(i + 1) + '_\\'.repeat(size)
    );
    theOtherSide.push(
      ' '.repeat(size - 1 - i) + '\\/'.repeat(i + 1) + '_/'.repeat(size)
    );
  }
  const firstHalf = aside.join('\n');
  const secondHalf = theOtherSide.reverse().join('\n');
  return firstHalf + '\n' + secondHalf;
}
