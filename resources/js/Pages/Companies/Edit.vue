<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router, useForm } from '@inertiajs/vue3';

const props = defineProps({
    errors: Object,
    company: Object,
});
const form = useForm({
    id: props.company.id,
    name: props.company.name,
    email: props.company.email,
    website: props.company.website,
    avatar: null,
});
function submit() {
    // alert(id)
    form.post(route('company.update1'), form)

}

// validaion error form controller validion

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Company Edit</h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl pt-5 pb-10 mx-auto sm:px-6 lg:px-8 space-x-3 bg-white  ">
                <div class="FormCreate">
                    <div class="flex items-center justify-center p-12  ">
                        <div class="mx-auto w-full max-w-[550px] bg-white border shadow-xl">
                            <form class="py-6 px-9" enctype="multipart/form-data" @submit.prevent="submit()">

                                <input type="hidden" v-model="form.id">
                                <small class="text-red-500" v-if="errors.name">{{ errors.id }}</small>


                                <div class="mb-5">
                                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Company Name*:
                                    </label>
                                    <input type="text" required v-model="form.name" placeholder="Company Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.name">{{ errors.name }}</small>
                                </div>
                                <div class="mb-5">
                                    <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Company email:
                                    </label>
                                    <input type="email" v-model="form.email" placeholder="example@domain.com"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.email">{{ errors.email }}</small>

                                </div>
                                <div class="mb-5">
                                    <label for="website" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Company WebSite Link:
                                    </label>
                                    <input type="text" v-model="form.website" placeholder="example@domain.com"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.website">{{ errors.website }}</small>

                                </div>

                                <div class="mb-8">
                                    <input type="file" id="logo" accept="image/jpeg, image/png, image/jpg, image/gif"
                                        class="sr-only" @input="form.avatar = $event.target.files[0]" />
                                    <label for="logo"
                                        class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                        <div>
                                            <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                                Drop files here
                                            </span>
                                            <span class="mb-2 block text-base font-medium ">
                                                Or
                                            </span>
                                            <span
                                                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                                Browse
                                            </span>
                                        </div>
                                    </label>
                                    <small class="text-red-500">accept 3 mb images jpeg, png, jpg, gif </small>
                                    <br>
                                    <small class="text-red-500" v-if="errors.avatar">{{ errors.avatar }}</small>

                                </div>
                                <div>
                                    <button type="submit"
                                        class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                        update Company
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
<style scoped></style>
