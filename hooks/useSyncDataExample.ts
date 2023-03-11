import {useAsyncData, useState} from "nuxt/app";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))
interface RandomNumberData {
  randomNumber: number;
}

const _fetchRandomNumberData = async (): Promise<RandomNumberData> => {
  await wait(1000)
  const random = Math.floor(Math.random() * 100)
  if (random % 3 === 0) {
    throw new Error('error!!!')
  }
  return {
    randomNumber: random,
  }
}
export const useSyncDataExample = () => {
  const state = useState<number | null>("state", () => {
    return null;
  })
  const setState = (v: number | null) => {
    state.value = v;
  }

  const isValidating = useState<boolean>("isValidating", () => {
    return false;
  });
  const setIsValidating = (v: boolean) => {
    isValidating.value = v;
  }

  const errorMessage = useState<string | null>('error', () => {
    return null;
  });
  const setError = (e: string | null) => {
    errorMessage.value = e
  }

  const fetchWithUseAsyncData = async () => {
    console.log("-----999")
    setIsValidating(true);
    const { data, error } = await useAsyncData(
      'fetchWithUseAsyncData',
      _fetchRandomNumberData,
    )
    setIsValidating(false);

    if (error.value) {
      setIsValidating(false);
      setError(error.value.message)
      setState(null)
      return;
    }

    if (data.value) {
      setError(null)
      setState(data.value?.randomNumber)
    }
  }

  return {
    fetchWithUseAsyncData,
    state,
    errorMessage,
    isValidating
  }
}