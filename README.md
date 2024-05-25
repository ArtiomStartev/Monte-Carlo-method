# :game_die: Monte Carlo Dice Simulation

### :fireworks: Overview
This repository contains a TypeScript implementation of a Monte Carlo simulation to determine the average number of rolls needed to achieve specific sequences when rolling a fair six-sided die. </br>
The sequences under consideration are `[1, 2, 3, 4, 5, 6]` and `[2, 1, 4, 3, 6, 5]`.

### :star: Task Description
The task is as follows:
"Suppose we roll a fair die until either the sequence `[1, 2, 3, 4, 5, 6]` or the sequence `[2, 1, 4, 3, 6, 5]` appears. Which of these two sequences, on average, will appear sooner?"

### :hotsprings: Implementation Details
The solution involves simulating the dice rolls using a Monte Carlo method. The steps include:

- Defining the Sequences: Two target sequences are defined, series1 (`[1, 2, 3, 4, 5, 6]`) and series2 (`[2, 1, 4, 3, 6, 5]`).
- Simulating Dice Rolls: We simulate rolling the die until one of the sequences appears. This is repeated multiple times (defined by the iterations parameter).
- Tracking Rolls: We keep track of the number of rolls required to achieve each sequence in each iteration.
- Calculating Averages: After all iterations, we calculate the average number of rolls required for each sequence to appear.

### :doughnut: Benefits and Use Cases
- Educational Tool: This implementation can be used to teach concepts of probability, random processes, and Monte Carlo simulations.
- Statistical Analysis: The code provides a practical way to analyze and compare the likelihood of different sequences occurring in random processes.
- Gaming and Simulations: This can be extended to more complex simulations in gaming or other applications where understanding the behavior of random sequences is important.

### :candy: Conclusion
This Monte Carlo simulation effectively demonstrates how to use random sampling to solve probabilistic problems. By running multiple iterations and averaging the results, we can gain insights into which sequence of dice rolls appears faster on average. This approach can be applied to a wide range of similar problems in various fields.

![image](https://github.com/ArtiomStartev/Monte-Carlo-method/assets/96334648/cbc2d303-910a-4146-a002-bb4a740f6541)
