import { createAction } from "@reduxjs/toolkit";

export const apiCallStart = createAction("api/callBegin")
export const apiCallSuccess = createAction("api/callSuccess")
export const apiCallError = createAction("api/callError")