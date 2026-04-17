# Advanced Module: Closed-Loop Architectures
**Companion to Chapters 11, 15, & 17**

You are now entering the frontier of biological computing. Here, we do not just read data—we create a **Closed-Loop System**. The organoid becomes an agent interacting with a digital world (like the famous DishBrain experiment playing Pong).

## Learning Objectives
1. Understand the architecture of a Bio-Digital feedback loop.
2. Implement stimulation encoding (translating digital game states to electrical pulses).
3. Implement sensory feedback based on the Free Energy Principle (minimizing surprise/entropy).

## The Bio-Digital Loop
1. **State:** The computer reads the digital environment (e.g., ball position).
2. **Write:** The computer translates the state into electrical pulses and zaps the organoid via MEA.
3. **Read:** The computer reads the organoid's neural response.
4. **Act:** The response is decoded into a digital action (e.g., move paddle up).
5. **Feedback:** If the organoid misses the ball, it receives chaotic, unpredictable white noise (increasing Free Energy/Entropy). If it hits the ball, it receives predictable, rhythmic pulses (decreasing Free Energy). *Biology naturally re-wires itself to avoid chaos.*

## Actionable Next Step
Run `closed_loop_pong_env.py`. This provides the software scaffolding required to hook a living organoid up to a digital environment. It simulates the exact feedback mechanisms used in state-of-the-art biological AI research.
