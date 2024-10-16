import axios, { AxiosResponse } from "axios";
import { GuessResponse, GuessParams, GroupsResponse } from "./types";

export const client = axios.create({
  baseURL: "https://connections-xih1.onrender.com",
});

export async function checkGuess(params: GuessParams) {
  try {
    const res: AxiosResponse<GuessResponse> = await client.get("/guess", {
      params: params,
    });
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
    const { data }: AxiosResponse<GroupsResponse> = await client.get("/groups");
    return { data: data };
  } catch (err) {
    console.log(err);
  }
}
