# Interactive React Player Stat Card

[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF.svg)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

A dynamic React component showcasing modular architecture, complex state management, and a premium "Liquid Glass" UI design. Built with a focus on visual consistency and interactive user experience, this project serves as a technical showcase for modern frontend development.

---

## Project Interface
Main Player Card View - S. Shabangu on a defult/natural position: RM 
<img width="1335" height="898" alt="Screenshot 2026-05-10 184906" src="https://github.com/user-attachments/assets/bc774b1a-9005-41d4-8112-c8292b72fc7b" />

Main player in an alt position toggled showing secondary position: RB  
<img width="1335" height="899" alt="Screenshot 2026-05-10 184926" src="https://github.com/user-attachments/assets/c5254267-1fc0-4ce5-ab7c-3b179693b6d0" />

---

## The "Liquid Glass" Vision
The user interface is built around a modern "glassmorphism" aesthetic to ensure a premium, visually consistent experience regardless of the background imagery.
*   **Technique:** Utilizes advanced CSS properties, specifically `backdrop-filter: blur()` and custom `rgba` color values, to create a translucent, frosted-glass effect.
*   **Responsiveness:** The card design scales fluidly across desktop and mobile viewports, maintaining sharp, pixel-perfect borders and smooth hover transitions.

## Tactical State Logic
Inspired by high-end football simulation mechanics (such as EA Sports titles), this component uses React Hooks to manage complex UI logic dynamically.
*   **The "Green Marker" System:** Using the `useState` hook, the application toggles between a player's main and alternative positions. 
*   **Visual Feedback:** When the alternative position is selected for S. Shabangu, the UI dynamically applies a conditional CSS class (the Green Marker). This signals to the user that the player is naturally adapted to that role without suffering from artificial stat drops, ensuring the UX aligns with real-world tactical expectations.

---

## Key Technical Features
*   **Component-Based Architecture:** Scalable and reusable `PlayerCard.jsx` structure designed to easily map over an entire squad database.
*   **Complex React State:** Seamless UI rendering based on user interaction without page reloads.
*   **Zero-Dependency Styling:** Pure CSS3 implementation for all animations, liquid glass effects, and responsive breakpoints.

## How to Run Locally

If you would like to run this prototype on your local machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/react-player-stat-card.git](https://github.com/yourusername/react-player-stat-card.git)
