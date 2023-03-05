// import { useAsync } from "@nuxtjs/composition-api"

import {useAsyncData, useState} from "nuxt/app";
import {Ref} from "vue";
import useSWRV from "swrv";
import axios from "axios";
// import {useAsync} from "@nuxtjs/composition-api";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))
interface InitialData {
  randomNumber: number;
}

// const _fetchInitialData = async (): Promise<InitialData> => {
//   const res = await axios.get('https://api.nuxtjs.dev/mountains')
//   console.log(res)
//   return res.data;
// }

const _fetchInitialData = async (a: any): Promise<InitialData> => {
  console.log(a.ssrContext)
  await wait(1000)
  // 0~3の整数
  const random = Math.floor(Math.random() * 100)
  return {
    randomNumber: random
  }
}

type RandomValue = number | null;
export const useSwrExample = () => {
  const randomValue = useState<RandomValue>("randomValue", () => {
    return 0
  })
  const setRandomValue = (v: number) => {
    randomValue.value = v;
  }

  const fetchInitialData = () => {
    // const {data, pending, error, refresh} = useAsyncData(
    //   'fetchInitialData',
    //   () => $fetch('https://api.nuxtjs.dev/mountains'),
    // )
    const { data, error } = useAsyncData(
      'fetchInitialData',
      _fetchInitialData,
    )

    // useSWRVを使うならこれだが、server, client間でmismatchする
    // const { data, error, isValidating, mutate } = useSWRV('fetchInitialData', _fetchInitialData);

    return { data, error };
  }
  return {
    fetchInitialData,
    randomValue: computed(() => randomValue),
    setRandomValue,
  }
}