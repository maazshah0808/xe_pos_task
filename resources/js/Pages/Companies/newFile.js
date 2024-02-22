import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const form = useForm({
name: null,
email: null,
website: null,
// logo: null,
});
function submit() {
router.post(route('company.store'));
}


const __VLS_componentsOption = {};

let __VLS_name!: 'Create';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Head', typeof __VLS_localComponents, "Head", "Head", "Head"> &
__VLS_WithComponent<'AuthenticatedLayout', typeof __VLS_localComponents, "AuthenticatedLayout", "AuthenticatedLayout", "AuthenticatedLayout">;
__VLS_components.Head;
// @ts-ignore
[Head,];
__VLS_components.AuthenticatedLayout; __VLS_components.AuthenticatedLayout;
// @ts-ignore
[AuthenticatedLayout, AuthenticatedLayout,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = ({} as 'Head' extends keyof typeof __VLS_ctx ? { 'Head': typeof __VLS_ctx.Head; } : typeof __VLS_resolvedLocalAndGlobalComponents).Head;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, title: ("Dashboard"), }));
({} as { Head: typeof __VLS_0; }).Head;
const __VLS_2 = __VLS_1({ ...{}, title: ("Dashboard"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, title: ("Dashboard"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as 'AuthenticatedLayout' extends keyof typeof __VLS_ctx ? { 'AuthenticatedLayout': typeof __VLS_ctx.AuthenticatedLayout; } : typeof __VLS_resolvedLocalAndGlobalComponents).AuthenticatedLayout;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { AuthenticatedLayout: typeof __VLS_5; }).AuthenticatedLayout;
({} as { AuthenticatedLayout: typeof __VLS_5; }).AuthenticatedLayout;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["template"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).header;
{
const __VLS_13 = __VLS_intrinsicElements["h2"];
const __VLS_14 = __VLS_elementAsFunctionalComponent(__VLS_13);
const __VLS_15 = __VLS_14({ ...{}, class: ("font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, class: ("font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"), });
const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
let __VLS_17!: __VLS_NormalizeEmits<typeof __VLS_16.emit>;
(__VLS_16.slots!).default;
}
}
}
{
const __VLS_18 = __VLS_intrinsicElements["div"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
const __VLS_20 = __VLS_19({ ...{}, class: ("py-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, class: ("py-12"), });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
let __VLS_22!: __VLS_NormalizeEmits<typeof __VLS_21.emit>;
{
const __VLS_23 = __VLS_intrinsicElements["div"];
const __VLS_24 = __VLS_elementAsFunctionalComponent(__VLS_23);
const __VLS_25 = __VLS_24({ ...{}, class: ("max-w-7xl pt-5 pb-10 mx-auto sm:px-6 lg:px-8 space-x-3 bg-white  "), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_25> & Record<string, unknown>) => void)({ ...{}, class: ("max-w-7xl pt-5 pb-10 mx-auto sm:px-6 lg:px-8 space-x-3 bg-white  "), });
const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_23, __VLS_25)!;
let __VLS_27!: __VLS_NormalizeEmits<typeof __VLS_26.emit>;
{
const __VLS_28 = __VLS_intrinsicElements["div"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
const __VLS_30 = __VLS_29({ ...{}, class: ("FormCreate"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("FormCreate"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
let __VLS_32!: __VLS_NormalizeEmits<typeof __VLS_31.emit>;
{
const __VLS_33 = __VLS_intrinsicElements["div"];
const __VLS_34 = __VLS_elementAsFunctionalComponent(__VLS_33);
const __VLS_35 = __VLS_34({ ...{}, class: ("flex items-center justify-center p-12  "), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_33, typeof __VLS_35> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-center p-12  "), });
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
let __VLS_37!: __VLS_NormalizeEmits<typeof __VLS_36.emit>;
{
const __VLS_38 = __VLS_intrinsicElements["div"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
const __VLS_40 = __VLS_39({ ...{}, class: ("mx-auto w-full max-w-[550px] bg-white border shadow-xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{}, class: ("mx-auto w-full max-w-[550px] bg-white border shadow-xl"), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42!: __VLS_NormalizeEmits<typeof __VLS_41.emit>;
{
const __VLS_43 = __VLS_intrinsicElements["form"];
const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
const __VLS_45 = __VLS_44({ ...{ onSubmit: {} as any, }, class: ("py-6 px-9"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_45> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, class: ("py-6 px-9"), });
const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45)!;
let __VLS_47!: __VLS_NormalizeEmits<typeof __VLS_46.emit>;
let __VLS_48 = { 'submit': __VLS_pickEvent(__VLS_47['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_45>).onSubmit) };
__VLS_48 = { submit: (__VLS_ctx.submit) };
{
const __VLS_49 = __VLS_intrinsicElements["div"];
const __VLS_50 = __VLS_elementAsFunctionalComponent(__VLS_49);
const __VLS_51 = __VLS_50({ ...{}, class: ("mb-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_49, typeof __VLS_51> & Record<string, unknown>) => void)({ ...{}, class: ("mb-5"), });
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
let __VLS_53!: __VLS_NormalizeEmits<typeof __VLS_52.emit>;
{
const __VLS_54 = __VLS_intrinsicElements["label"];
const __VLS_55 = __VLS_elementAsFunctionalComponent(__VLS_54);
const __VLS_56 = __VLS_55({ ...{}, for: ("name"), class: ("mb-3 block text-base font-medium text-[#07074D]"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_54, typeof __VLS_56> & Record<string, unknown>) => void)({ ...{}, for: ("name"), class: ("mb-3 block text-base font-medium text-[#07074D]"), });
const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56)!;
let __VLS_58!: __VLS_NormalizeEmits<typeof __VLS_57.emit>;
(__VLS_57.slots!).default;
}
{
const __VLS_59 = __VLS_intrinsicElements["input"];
const __VLS_60 = __VLS_elementAsFunctionalComponent(__VLS_59);
const __VLS_61 = __VLS_60({ ...{}, type: ("text"), required: (true), value: ((__VLS_ctx.form.name)), placeholder: ("Company Name"), class: ("w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_59, typeof __VLS_61> & Record<string, unknown>) => void)({ ...{}, type: ("text"), required: (true), value: ((__VLS_ctx.form.name)), placeholder: ("Company Name"), class: ("w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"), });
const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61)!;
let __VLS_63!: __VLS_NormalizeEmits<typeof __VLS_62.emit>;
}
(__VLS_52.slots!).default;
}
{
const __VLS_64 = __VLS_intrinsicElements["div"];
const __VLS_65 = __VLS_elementAsFunctionalComponent(__VLS_64);
const __VLS_66 = __VLS_65({ ...{}, class: ("mb-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_64, typeof __VLS_66> & Record<string, unknown>) => void)({ ...{}, class: ("mb-5"), });
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
let __VLS_68!: __VLS_NormalizeEmits<typeof __VLS_67.emit>;
{
const __VLS_69 = __VLS_intrinsicElements["label"];
const __VLS_70 = __VLS_elementAsFunctionalComponent(__VLS_69);
const __VLS_71 = __VLS_70({ ...{}, for: ("email"), class: ("mb-3 block text-base font-medium text-[#07074D]"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_69, typeof __VLS_71> & Record<string, unknown>) => void)({ ...{}, for: ("email"), class: ("mb-3 block text-base font-medium text-[#07074D]"), });
const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71)!;
let __VLS_73!: __VLS_NormalizeEmits<typeof __VLS_72.emit>;
(__VLS_72.slots!).default;
}
{
const __VLS_74 = __VLS_intrinsicElements["input"];
const __VLS_75 = __VLS_elementAsFunctionalComponent(__VLS_74);
const __VLS_76 = __VLS_75({ ...{}, type: ("email"), placeholder: ("example@domain.com"), class: ("w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_74, typeof __VLS_76> & Record<string, unknown>) => void)({ ...{}, type: ("email"), placeholder: ("example@domain.com"), class: ("w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"), });
const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76)!;
let __VLS_78!: __VLS_NormalizeEmits<typeof __VLS_77.emit>;
(__VLS_ctx.form.email);
}
(__VLS_67.slots!).default;
}
{
const __VLS_79 = __VLS_intrinsicElements["div"];
const __VLS_80 = __VLS_elementAsFunctionalComponent(__VLS_79);
const __VLS_81 = __VLS_80({ ...{}, class: ("mb-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_79, typeof __VLS_81> & Record<string, unknown>) => void)({ ...{}, class: ("mb-5"), });
const __VLS_82 = __VLS_pickFunctionalComponentCtx(__VLS_79, __VLS_81)!;
let __VLS_83!: __VLS_NormalizeEmits<typeof __VLS_82.emit>;
{
const __VLS_84 = __VLS_intrinsicElements["label"];
const __VLS_85 = __VLS_elementAsFunctionalComponent(__VLS_84);
const __VLS_86 = __VLS_85({ ...{}, for: ("website"), class: ("mb-3 block text-base font-medium text-[#07074D]"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_84, typeof __VLS_86> & Record<string, unknown>) => void)({ ...{}, for: ("website"), class: ("mb-3 block text-base font-medium text-[#07074D]"), });
const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86)!;
let __VLS_88!: __VLS_NormalizeEmits<typeof __VLS_87.emit>;
(__VLS_87.slots!).default;
}
{
const __VLS_89 = __VLS_intrinsicElements["input"];
const __VLS_90 = __VLS_elementAsFunctionalComponent(__VLS_89);
const __VLS_91 = __VLS_90({ ...{}, type: ("text"), value: ((__VLS_ctx.form.website)), placeholder: ("example@domain.com"), class: ("w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_89, typeof __VLS_91> & Record<string, unknown>) => void)({ ...{}, type: ("text"), value: ((__VLS_ctx.form.website)), placeholder: ("example@domain.com"), class: ("w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"), });
const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91)!;
let __VLS_93!: __VLS_NormalizeEmits<typeof __VLS_92.emit>;
}
(__VLS_82.slots!).default;
}
{
const __VLS_94 = __VLS_intrinsicElements["div"];
const __VLS_95 = __VLS_elementAsFunctionalComponent(__VLS_94);
const __VLS_96 = __VLS_95({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_95));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_94, typeof __VLS_96> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96)!;
let __VLS_98!: __VLS_NormalizeEmits<typeof __VLS_97.emit>;
{
const __VLS_99 = __VLS_intrinsicElements["button"];
const __VLS_100 = __VLS_elementAsFunctionalComponent(__VLS_99);
const __VLS_101 = __VLS_100({ ...{}, type: ("submit"), class: ("hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_99, typeof __VLS_101> & Record<string, unknown>) => void)({ ...{}, type: ("submit"), class: ("hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"), });
const __VLS_102 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101)!;
let __VLS_103!: __VLS_NormalizeEmits<typeof __VLS_102.emit>;
(__VLS_102.slots!).default;
}
(__VLS_97.slots!).default;
}
(__VLS_46.slots!).default;
}
(__VLS_41.slots!).default;
}
(__VLS_36.slots!).default;
}
(__VLS_31.slots!).default;
}
(__VLS_26.slots!).default;
}
(__VLS_21.slots!).default;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[submit, form, form, form, form, form,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
AuthenticatedLayout: AuthenticatedLayout as typeof AuthenticatedLayout,
Head: Head as typeof Head,
form: form as typeof form,
submit: submit as typeof submit,
};
},
});
return (await import('vue')).defineComponent({
setup() {
return {};
},
});
})();
