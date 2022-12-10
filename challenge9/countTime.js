// recursive
// function countTime(leds) {
//   function turnOnLedTime(lights) {
//     const ledsState = [];

//     if (!lights.includes(0)) return 0;

//     for (let i = 0; i < lights.length; i++) {
//       if (lights[i]) ledsState.push(1);
//       else {
//         const pos = i === 0 ? lights.length - 1 : i - 1;
//         const leftLight = lights[pos];
//         if (leftLight) ledsState.push(1);
//         else ledsState.push(0);
//       }
//     }

//     return 7 + turnOnLedTime(ledsState);
//   }

//   return turnOnLedTime(leds);
// }

// while
// function countTime(leds) {
//   let ledsState = [...leds];
//   let elapsedTime = 0;

//   while (ledsState.includes(0)) {
//     const newLedState = [];
//     for (let i = 0; i < ledsState.length; i++) {
//       if (ledsState[i]) newLedState.push(1);
//       else {
//         const pos = i === 0 ? ledsState.length - 1 : i - 1;
//         const leftLight = ledsState[pos];
//         if (leftLight) newLedState.push(1);
//         else newLedState.push(0);
//       }
//     }

//     elapsedTime += 7;
//     ledsState = [...newLedState];
//   }
//   return elapsedTime;
// }

function countTime(leds) {
  let elapsedTime = 0;
  let ledsState = [...leds];
  while (ledsState.includes(0)) {
    const newLedState = ledsState.map((item, index) => {
      if (item) return item;
      const pos = index === 0 ? leds.length - 1 : index - 1;
      const leftLight = ledsState[pos];
      if (leftLight) return 1;
      return 0;
    });
    elapsedTime += 7;
    ledsState = [...newLedState];
  }

  return elapsedTime;
}
