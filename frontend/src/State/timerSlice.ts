import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
    seconds: number;
    minuets: number;
    isRunning: boolean;
}

const initialState = {
    seconds: 0,
    minuets: 0,
    isRunning: false;
}

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setSeconds: (state: TimerState, action: PayloadAction<number>) => {
            //Set the number of seconds from payload 
            state.seconds = action.payload;
        },
        setMinuets: (state: TimerState, action: PayloadAction<number>) => {
            //Set the number of minuets from payload 
            state.minuets = action.payload;
        },
        setIsRunning: (state: TimerState, action: PayloadAction<boolean>) => {
            //Set if the timer is running 
            state.isRunning = action.payload;
        },
    }
})

//Exports the reducer actions
export const { setSeconds, setMinuets, setIsRunning } = timerSlice.actions;

export default timerSlice.reducer;