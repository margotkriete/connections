import axios from "axios";

export const client = axios.create({
  // TODO: update this with configurable URL
  baseURL: "https://connections-iota.vercel.app/",
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
