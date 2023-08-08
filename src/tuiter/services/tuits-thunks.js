import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";


export const findTuitsThunk = createAsyncThunk(
//  "tuits/findTuits",
"findTuits",
 async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
    // 'tuits/deleteTuit',
    'deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
    }
)

export const createTuitThunk = createAsyncThunk(
    // 'tuits/createTuit',
    'createTuit',
    async (tuit) => {
      const newTuit = await service.createTuit(tuit)
      return newTuit
  })

export const updateTuitThunk = createAsyncThunk(
    // 'tuits/updateTuit',
    'updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
)

  
  