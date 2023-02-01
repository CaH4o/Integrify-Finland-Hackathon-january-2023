import axios from "axios";

export default async function useFetch<T>(url: string): Promise<T> {
  const response = await axios.get(url);

  if (response.status < 400) {
    return response.data;
  } else {
    throw new Error(response.status.toString() + "" + response.statusText);
  }
}
