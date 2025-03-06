import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            <h1>
                <ul>Task 8 Stuff:</ul>
            </h1>
            <h3>Reveal Answer:</h3>
            <RevealAnswer></RevealAnswer>
            <h3>Change Question Type:</h3>
            <ChangeType></ChangeType>
            <h3>Start Attempt:</h3>
            <StartAttempt></StartAttempt>
            <h3>Two Dice:</h3>
            <TwoDice></TwoDice>
            <h3>Cycle Holiday:</h3>
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
