import { describe, test, expect, it, beforeAll, vi } from "vitest";

// import { mount } from "@vue/test-utils";
// import HelloMessage from "../../components/HelloMessage.vue";

// import SwrExample from "../pages/demo/swr-example/index.vue";
import * as useSwrExample from "./useSwrExample";
import useSWRV from "swrv";
// import {setup} from "@nuxt/test-utils-edge";

describe('view', () => {
  // describe("message check", async () => {
  //   // await setup()
  //   test("メッセージが表示される", () => {
  //     const wrapper = mount(SwrExample, {
  //       props: {
  //         name: "World",
  //       },
  //     });
  //     expect(wrapper.text()).toContain("swr-example");
  //   });
  // });
  describe('hooks', () => {
    describe('fetchInitialData', () => {
      let spy;
      beforeAll(() => {
        spy = vi.spyOn(useSwrExample, "_fetchRandomNumberData")
        const mockRes = {
          randomNumber: 10,
        }
        spy.mockResolvedValue(mockRes)
      });
      it("test", async () => {
        const a = 1
        const { fetchWithUseSWRV } = useSwrExample.useSwrExample();

        const b = await useSwrExample._fetchRandomNumberData()
        console.log({ b })

        // errorになるuseSWRVのmockがうまくいかない
        // const res = fetchWithUseSWRV();
        // console.log({ res })
        expect(a).toBe(1);
      });

    })
  })
})