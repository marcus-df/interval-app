import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "State/store";
import { setLoading } from "../State/appSlice";
import Logotype from "../Assets/logotype.svg";

function Loading() {
  const dispatch = useDispatch();
  const isLoading: Boolean | any = useSelector(
    (state: RootState) => state.appReducer.isLoading
  );

  function handleLoadingState(isLoadingValue: boolean) {
    dispatch(setLoading(Boolean(isLoadingValue)));
  }

  return (
    <dialog className="loading-field" open={isLoading}>
      <div className="inner" onClick={() => handleLoadingState(false)}>
        <img src={Logotype} alt="interval logotype" />
      </div>
    </dialog>
  );
}

export default Loading;
