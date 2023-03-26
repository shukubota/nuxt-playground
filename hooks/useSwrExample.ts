import useSWRV from "swrv";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))
interface RandomNumberData {
  randomNumber: number;
}

export const _fetchRandomNumberData = async (): Promise<RandomNumberData> => {
  await wait(1000)
  const random = Math.floor(Math.random() * 100)
  if (random % 3 === 0) {
    throw new Error('error!!!')
  }
  return {
    randomNumber: random,
  }
}
export const useSwrExample = () => {
  const fetchWithUseSWRV = () => {
    const { data, error, isValidating, mutate } = useSWRV('fetchWithUseSWRV', _fetchRandomNumberData);
    // const mockRes = {
    //   data: {
    //     test: "a",
    //   },
    //   error: null,
    //   isValidating: true,
    //   mutate: () => {
    //     console.log('mutate')
    //   },
    // }
    // const { data, error, isValidating, mutate } = mockRes
    return { data, isValidating, error, mutate };
  }
  return {
    fetchWithUseSWRV,
  }
}