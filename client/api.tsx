import axios from "axios";
import { GuessResponse } from "./types";

export const client = axios.create({
  baseURL: "https://connections-xih1.onrender.com",
});

interface GuessParams {
  guess: Array<string>;
}

export async function checkGuess(params: GuessParams) {
  try {
    const res = await client.get("/guess", { params: params });
    const result = {
      data: res.data,
    };
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function getGroups() {
  try {
    const { data } = await client.get("/groups");
    return { data: data };
  } catch (err) {
    console.log(err);
  }
}
