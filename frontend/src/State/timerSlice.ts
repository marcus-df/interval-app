import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  sec: number;
  min: number;
  isRun: boolean;
  expTime: Date | null;
  autoStart: boolean;
  timeOut: boolean;
}

const initialState = {
  sec: 0,
  min: 0,
  isRun: false,
  expTime: new Date(),
  autoStart: true,
  timeOut: false,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setSeconds: (state: TimerState, action: PayloadAction<number>) => {
      //Set the number of seconds from payload
      state.sec = action.payload;
    },
    setMinuets: (state: TimerState, action: PayloadAction<number>) => {
      //Set the number of minuets from payload
      state.min = action.payload;
    },
    setIsRunning: (state: TimerState, action: PayloadAction<boolean>) => {
      //Set if the timer is running
      state.isRun = action.payload;
    },
    setExpTime: (state: TimerState, action: PayloadAction<Date | null>) => {
      //Set the expiration time
      state.expTime = action.payload;
    },
    setAutoStart: (state: TimerState, action: PayloadAction<boolean>) => {
      //Set if the timer should autostart
      state.autoStart = action.payload;
    },
    setTimeOut: (state: TimerState, action: PayloadAction<boolean>) => {
      //Set if the time has run out
      state.autoStart = action.payload;
    },
  },
});

//Exports the reducer actions
export const { setSeconds, setMinuets, setIsRunning } = timerSlice.actions;

export default timerSlice.reducer;
