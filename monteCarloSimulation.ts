type SimulationResult = {
  series1: number;
  series2: number;
};

function monteCarloSimulation(series1: number[], series2: number[], iterations: number): SimulationResult {
  let totalRollsSeries1 = 0;
  let totalRollsSeries2 = 0;

  for (let i = 0; i < iterations; i++) {
    totalRollsSeries1 += findSeries(series1);
    totalRollsSeries2 += findSeries(series2);
  }

  const averageRollsSeries1 = totalRollsSeries1 / iterations;
  const averageRollsSeries2 = totalRollsSeries2 / iterations;

  return {
    series1: averageRollsSeries1,
    series2: averageRollsSeries2,
  };
}

function findSeries(targetSeries: number[]): number {
  let count: number = 0;
  let rolls: number[] = [];

  while (true) {
    count++;
    rolls.push(rollDice());

    if (rolls.length > targetSeries.length) {
      rolls.shift();
    }

    if (isSeriesMatch(rolls, targetSeries)) {
      break;
    }
  }

  return count;
}

function isSeriesMatch(currentSeries: number[], targetSeries: number[]): boolean {
  if (currentSeries.length !== targetSeries.length) {
    return false;
  }
  return currentSeries.every((val: number, index: number) => val === targetSeries[index]);
}

function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

const series1 = [1, 2, 3, 4, 5, 6];
const series2 = [2, 1, 4, 3, 6, 5];
const iterations = 1000;

const result = monteCarloSimulation(series1, series2, iterations);
console.log(`Average rolls for series [${series1}]: ${result.series1}`);
console.log(`Average rolls for series [${series2}]: ${result.series2}`);
