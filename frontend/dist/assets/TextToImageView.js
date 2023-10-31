import { d as defineComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, u as useSettings, b as useState, e as createVNode, w as withCtx, f as unref, N as NTooltip, g as NIcon, h as NSelect, p as promptHandleKeyUp, i as promptHandleKeyDown, j as NInput, _ as _export_sfc, k as useMessage, l as onUnmounted, m as NGi, n as NCard, q as NSpace, r as createTextVNode, s as createCommentVNode, t as createBlock, v as NGrid, x as serverUrl } from "./index.js";
import { _ as _sfc_main$6 } from "./GenerateSection.vue_vue_type_script_setup_true_lang.js";
import { _ as _sfc_main$7 } from "./ImageOutput.vue_vue_type_script_setup_true_lang.js";
import { B as BurnerClock, _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$8 } from "./clock.js";
import { N as NForm, a as NFormItem } from "./FormItem.js";
import { N as NSwitch, a as NSlider } from "./Switch.js";
import { _ as _sfc_main$3 } from "./SamplerPicker.vue_vue_type_script_setup_true_lang.js";
import { v as v4 } from "./v4.js";
import { N as NInputNumber } from "./InputNumber.js";
import "./SendOutputTo.vue_vue_type_script_setup_true_lang.js";
import "./TrashBin.js";
import "./DescriptionsItem.js";
import "./Settings.js";
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [_hoisted_2$1];
const SettingsOutline = defineComponent({
  name: "SettingsOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Prompt",
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const settings = useSettings();
    const state = useState();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(NInput), {
          value: unref(settings).data.settings[props.tab].prompt,
          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(settings).data.settings[props.tab].prompt = $event),
          type: "textarea",
          placeholder: "Prompt",
          class: "prompt",
          onKeyup: _cache[4] || (_cache[4] = ($event) => unref(promptHandleKeyUp)(
            $event,
            unref(settings).data.settings[props.tab],
            "prompt",
            unref(state)
          )),
          onKeydown: unref(promptHandleKeyDown)
        }, {
          suffix: withCtx(() => [
            createVNode(unref(NTooltip), null, {
              trigger: withCtx(() => [
                createVNode(unref(NIcon), { style: { "margin-top": "10px" } }, {
                  default: withCtx(() => [
                    createVNode(unref(SettingsOutline))
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(unref(NForm), { "show-feedback": false }, {
                  default: withCtx(() => [
                    createVNode(unref(NFormItem), {
                      label: "Prompt-to-Prompt preprocessing",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NSwitch), {
                          value: unref(settings).data.settings.api.prompt_to_prompt,
                          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(settings).data.settings.api.prompt_to_prompt = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Prompt-to-Prompt model",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NSelect), {
                          filterable: "",
                          "consistent-menu-width": false,
                          options: [
                            {
                              value: "lllyasviel/Fooocus-Expansion",
                              label: "lllyasviel/Fooocus-Expansion"
                            },
                            {
                              value: "daspartho/prompt-extend",
                              label: "daspartho/prompt-extend"
                            },
                            {
                              value: "succinctly/text2image-prompt-generator",
                              label: "succinctly/text2image-prompt-generator"
                            },
                            {
                              value: "Gustavosta/MagicPrompt-Stable-Diffusion",
                              label: "Gustavosta/MagicPrompt-Stable-Diffusion"
                            },
                            {
                              value: "Ar4ikov/gpt2-medium-650k-stable-diffusion-prompt-generator",
                              label: "Ar4ikov/gpt2-medium-650k-stable-diffusion-prompt-generator"
                            }
                          ],
                          value: unref(settings).data.settings.api.prompt_to_prompt_model,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(settings).data.settings.api.prompt_to_prompt_model = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NFormItem), {
                      label: "Prompt-to-Prompt device",
                      class: "form-item"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NSelect), {
                          options: [
                            {
                              value: "gpu",
                              label: "On-Device"
                            },
                            {
                              value: "cpu",
                              label: "CPU"
                            }
                          ],
                          value: unref(settings).data.settings.api.prompt_to_prompt_device,
                          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(settings).data.settings.api.prompt_to_prompt_device = $event)
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value", "onKeydown"]),
        createVNode(unref(NInput), {
          value: unref(settings).data.settings[props.tab].negative_prompt,
          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(settings).data.settings[props.tab].negative_prompt = $event),
          type: "textarea",
          placeholder: "Negative prompt",
          onKeyup: _cache[6] || (_cache[6] = ($event) => unref(promptHandleKeyUp)(
            $event,
            unref(settings).data.settings[props.tab],
            "negative_prompt",
            unref(state)
          )),
          onKeydown: unref(promptHandleKeyDown)
        }, null, 8, ["value", "onKeydown"])
      ]);
    };
  }
});
const Prompt = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5cc6c30d"]]);
const _hoisted_1 = { class: "main-container" };
const _hoisted_2 = { class: "flex-container" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Steps", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 20-50 steps for most images.", -1);
const _hoisted_5 = { class: "flex-container" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "CFG Scale", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 3-15 for most images.", -1);
const _hoisted_8 = {
  key: 0,
  class: "flex-container"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Self Attention Scale", -1);
const _hoisted_10 = { class: "flex-container" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Batch Count", -1);
const _hoisted_12 = { class: "flex-container" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", { style: { "margin-right": "12px", "width": "75px" } }, "Seed", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "For random seed use -1.", -1);
const _hoisted_15 = { class: "flex-container" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "slider-label" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Enabled")
], -1);
const _hoisted_17 = { class: "flex-container" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Steps", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 20-50 steps for most images.", -1);
const _hoisted_20 = { class: "flex-container" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Scale", -1);
const _hoisted_22 = { class: "flex-container" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Strength", -1);
const _hoisted_24 = { class: "flex-container" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Antialiased", -1);
const _hoisted_26 = { class: "flex-container" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Latent Mode", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Txt2Img",
  setup(__props) {
    const global = useState();
    const settings = useSettings();
    const messageHandler = useMessage();
    const checkSeed = (seed) => {
      if (seed === -1) {
        seed = Math.floor(Math.random() * 999999999999);
      }
      return seed;
    };
    const generate = () => {
      var _a;
      if (settings.data.settings.txt2img.seed === null) {
        messageHandler.error("Please set a seed");
        return;
      }
      global.state.generating = true;
      const seed = checkSeed(settings.data.settings.txt2img.seed);
      fetch(`${serverUrl}/api/generate/txt2img`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            id: v4(),
            prompt: settings.data.settings.txt2img.prompt,
            negative_prompt: settings.data.settings.txt2img.negative_prompt,
            width: settings.data.settings.txt2img.width,
            height: settings.data.settings.txt2img.height,
            steps: settings.data.settings.txt2img.steps,
            guidance_scale: settings.data.settings.txt2img.cfg_scale,
            seed,
            batch_size: settings.data.settings.txt2img.batch_size,
            batch_count: settings.data.settings.txt2img.batch_count,
            scheduler: settings.data.settings.txt2img.sampler,
            self_attention_scale: settings.data.settings.txt2img.self_attention_scale,
            sigmas: settings.data.settings.txt2img.sigmas,
            sampler_settings: settings.data.settings.sampler_config[settings.data.settings.txt2img.sampler],
            prompt_to_prompt_settings: {
              prompt_to_prompt_model: settings.data.settings.api.prompt_to_prompt_model,
              prompt_to_prompt_model_settings: settings.data.settings.api.prompt_to_prompt_device,
              prompt_to_prompt: settings.data.settings.api.prompt_to_prompt
            }
          },
          model: (_a = settings.data.settings.model) == null ? void 0 : _a.name,
          backend: "PyTorch",
          autoload: false,
          flags: global.state.txt2img.highres ? {
            highres_fix: {
              scale: settings.data.settings.extra.highres.scale,
              latent_scale_mode: settings.data.settings.extra.highres.latent_scale_mode,
              strength: settings.data.settings.extra.highres.strength,
              steps: settings.data.settings.extra.highres.steps,
              antialiased: settings.data.settings.extra.highres.antialiased
            }
          } : {}
        })
      }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        global.state.generating = false;
        res.json().then((data) => {
          global.state.txt2img.images = data.images;
          global.state.txt2img.currentImage = data.images[0];
          global.state.progress = 0;
          global.state.total_steps = 0;
          global.state.current_step = 0;
          global.state.txt2img.genData = {
            time_taken: parseFloat(parseFloat(data.time).toFixed(4)),
            seed
          };
        });
      }).catch((err) => {
        global.state.generating = false;
        messageHandler.error(err);
      });
    };
    const burner = new BurnerClock(
      settings.data.settings.txt2img,
      settings,
      generate
    );
    onUnmounted(() => {
      burner.cleanup();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NGrid), {
          cols: "1 m:2",
          "x-gap": "12",
          responsive: "screen"
        }, {
          default: withCtx(() => [
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(unref(NCard), { title: "Settings" }, {
                  default: withCtx(() => [
                    createVNode(unref(NSpace), {
                      vertical: "",
                      class: "left-container"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(unref(Prompt), { tab: "txt2img" }),
                          createVNode(unref(_sfc_main$3), { type: "txt2img" }),
                          createVNode(unref(_sfc_main$4), {
                            "dimensions-object": unref(settings).data.settings.txt2img
                          }, null, 8, ["dimensions-object"]),
                          createBaseVNode("div", _hoisted_2, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_3
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of steps to take in the diffusion process. Higher values will result in more detailed images but will take longer to generate. There is also a point of diminishing returns around 100 steps. "),
                                _hoisted_4
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.txt2img.steps,
                              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(settings).data.settings.txt2img.steps = $event),
                              min: 5,
                              max: 300,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.txt2img.steps,
                              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(settings).data.settings.txt2img.steps = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" }
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_5, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_6
                              ]),
                              default: withCtx(() => [
                                createTextVNode(' Guidance scale indicates how much should model stay close to the prompt. Higher values might be exactly what you want, but generated images might have some artefacts. Lower values indicates that model can "dream" about this prompt more. '),
                                _hoisted_7
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.txt2img.cfg_scale,
                              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(settings).data.settings.txt2img.cfg_scale = $event),
                              min: 1,
                              max: 30,
                              step: 0.5,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.txt2img.cfg_scale,
                              "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(settings).data.settings.txt2img.cfg_scale = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              step: 0.5
                            }, null, 8, ["value"])
                          ]),
                          Number.isInteger(unref(settings).data.settings.txt2img.sampler) && ((_a = unref(settings).data.settings.model) == null ? void 0 : _a.backend) === "PyTorch" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_9
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" If self attention is >0, SAG will guide the model and improve the quality of the image at the cost of speed. Higher values will follow the guidance more closely, which can lead to better, more sharp and detailed outputs. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.txt2img.self_attention_scale,
                              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(settings).data.settings.txt2img.self_attention_scale = $event),
                              min: 0,
                              max: 1,
                              step: 0.05,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.txt2img.self_attention_scale,
                              "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(settings).data.settings.txt2img.self_attention_scale = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              step: 0.05
                            }, null, 8, ["value"])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_10, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_11
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of images to generate after each other. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.txt2img.batch_count,
                              "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(settings).data.settings.txt2img.batch_count = $event),
                              min: 1,
                              max: 9,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.txt2img.batch_count,
                              "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(settings).data.settings.txt2img.batch_count = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" }
                            }, null, 8, ["value"])
                          ]),
                          createVNode(unref(_sfc_main$5), {
                            "batch-size-object": unref(settings).data.settings.txt2img
                          }, null, 8, ["batch-size-object"]),
                          createBaseVNode("div", _hoisted_12, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_13
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Seed is a number that represents the starting canvas of your image. If you want to create the same image as your friend, you can use the same settings and seed to do so. "),
                                _hoisted_14
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.txt2img.seed,
                              "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(settings).data.settings.txt2img.seed = $event),
                              size: "small",
                              style: { "flex-grow": "1" }
                            }, null, 8, ["value"])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(NCard), {
                  title: "Highres fix",
                  style: { "margin-top": "12px", "margin-bottom": "12px" }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_15, [
                      _hoisted_16,
                      createVNode(unref(NSwitch), {
                        value: unref(global).state.txt2img.highres,
                        "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(global).state.txt2img.highres = $event)
                      }, null, 8, ["value"])
                    ]),
                    unref(global).state.txt2img.highres ? (openBlock(), createBlock(unref(NSpace), {
                      key: 0,
                      vertical: "",
                      class: "left-container"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_17, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_18
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Number of steps to take in the diffusion process. Higher values will result in more detailed images but will take longer to generate. There is also a point of diminishing returns around 100 steps. "),
                              _hoisted_19
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.extra.highres.steps,
                            "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(settings).data.settings.extra.highres.steps = $event),
                            min: 5,
                            max: 300,
                            style: { "margin-right": "12px" }
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.extra.highres.steps,
                            "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(settings).data.settings.extra.highres.steps = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" }
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          _hoisted_21,
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.extra.highres.scale,
                            "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(settings).data.settings.extra.highres.scale = $event),
                            min: 1,
                            max: 8,
                            step: 0.1,
                            style: { "margin-right": "12px" }
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.extra.highres.scale,
                            "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(settings).data.settings.extra.highres.scale = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            step: 0.1
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_22, [
                          _hoisted_23,
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.extra.highres.strength,
                            "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(settings).data.settings.extra.highres.strength = $event),
                            min: 0.1,
                            max: 0.9,
                            step: 0.05,
                            style: { "margin-right": "12px" }
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.extra.highres.strength,
                            "onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(settings).data.settings.extra.highres.strength = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 0.1,
                            max: 0.9,
                            step: 0.05
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_24, [
                          _hoisted_25,
                          createVNode(unref(NSwitch), {
                            value: unref(settings).data.settings.extra.highres.antialiased,
                            "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(settings).data.settings.extra.highres.antialiased = $event)
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_26, [
                          _hoisted_27,
                          createVNode(unref(NSelect), {
                            value: unref(settings).data.settings.extra.highres.latent_scale_mode,
                            "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(settings).data.settings.extra.highres.latent_scale_mode = $event),
                            size: "small",
                            style: { "flex-grow": "1" },
                            options: [
                              { label: "Nearest", value: "nearest" },
                              { label: "Nearest exact", value: "nearest-exact" },
                              { label: "Area", value: "area" },
                              { label: "Bilinear", value: "bilinear" },
                              { label: "Bicubic", value: "bicubic" },
                              {
                                label: "Bislerp (Original, slow)",
                                value: "bislerp-original"
                              },
                              {
                                label: "Bislerp (Tortured, fast)",
                                value: "bislerp-tortured"
                              }
                            ]
                          }, null, 8, ["value", "options"])
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$6), { generate }),
                createVNode(unref(_sfc_main$7), {
                  "current-image": unref(global).state.txt2img.currentImage,
                  images: unref(global).state.txt2img.images,
                  data: unref(settings).data.settings.txt2img,
                  onImageClicked: _cache[18] || (_cache[18] = ($event) => unref(global).state.txt2img.currentImage = $event)
                }, null, 8, ["current-image", "images", "data"]),
                createVNode(unref(_sfc_main$8), {
                  style: { "margin-top": "12px" },
                  "gen-data": unref(global).state.txt2img.genData
                }, null, 8, ["gen-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextToImageView",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1));
    };
  }
});
export {
  _sfc_main as default
};
