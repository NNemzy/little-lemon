function getRandomArbitraryTimes(min, max) {
  let times = new Set();

  min = Math.ceil(min);
  max = Math.floor(max);

  while (times.size < 5) {
    times.add(`${Math.floor(Math.random() * (max - min + 1)) + min}:00`);
  }

  return Array.from(times).sort(
    (a, b) => Number(a.split(":")[0]) - Number(b.split(":")[0])
  );
}

export { getRandomArbitraryTimes };
