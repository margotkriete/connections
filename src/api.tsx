import axios from "axios";

export const client = axios.create({
  baseURL: "http://127.0.0.1:5000",
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
    const res = await client.get("/groups");
    return {
      data: res.data,
    };
  } catch (err) {
    console.log(err);
  }
}
