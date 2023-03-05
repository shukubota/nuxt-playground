import { describe, test, expect, it } from "vitest";
// import { mount } from "@vue/test-utils";
// import HelloMessage from "../../components/HelloMessage.vue";

// import SwrExample from "../pages/demo/swr-example/index.vue";
import {useSwrExample} from "./useSwrExample";
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
      const a = 1
      const { fetchInitialData } = useSwrExample();
      const res = fetchInitialData();

      console.log({ res })

      it('1 to be 1', () => {
        expect(a).toBe(1);
      });
    })
  })
})