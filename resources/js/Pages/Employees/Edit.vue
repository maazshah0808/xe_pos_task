<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router, useForm } from '@inertiajs/vue3';

// validaion error form controller validion
const props = defineProps({
    errors: Object,
    companies: Object,
    employee: Object,
});
const form = useForm({
    first_name: props.employee.first_name,
    last_name: props.employee.last_name,
    company_id: props.employee.company_id,
    email: props.employee.email,
    phone: props.employee.phone,
});
function submit(id) {
    // alert(form.name);
    // console.log(form);
    router.put(route('employee.update', { employee: id }), form);
}

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Employees Edit</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl pt-5 pb-10 mx-auto sm:px-6 lg:px-8 space-x-3 bg-white text-black  ">
                <div class="FormCreate">
                    <div class="flex items-center justify-center p-12  ">
                        <div class="mx-auto w-full max-w-[550px] bg-white border shadow-xl">

                            <form class="py-6 px-9" @submit.prevent="submit(employee.id)">
                                <div class="mb-5">
                                    <label for="first_name" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Employee First Name*:
                                    </label>
                                    <input type="text" v-model="form.first_name" required
                                        placeholder="Enter Employee first Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.first_name">{{ errors.first_name }}</small>
                                </div>
                                <div class="mb-5">
                                    <label for="last_name" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Employee Last Name*:
                                    </label>
                                    <input type="text" required v-model="form.last_name"
                                        placeholder="Enter Employee last Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.last_name">{{ errors.last_name }}</small>
                                </div>
                                <div class="mb-5">
                                    <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Employee email:
                                    </label>
                                    <input type="email" v-model="form.email" placeholder="example@domain.com"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.email">{{ errors.email }}</small>
                                </div>
                                <div class="mb-5">
                                    <label for="number" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Employee Number:
                                    </label>
                                    <input type="text" v-model="form.phone" placeholder="0310*******"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    <small class="text-red-500" v-if="errors.phone">{{ errors.phone }}</small>
                                </div>
                                <div class="mb-5">
                                    <label for="company_id" class="mb-3 block text-base font-medium text-[#07074D]">
                                        Employee company Name *:
                                    </label>
                                    <select v-model="form.company_id" required
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md">
                                        <!-- Iterate over the companies and generate options -->
                                        <option value="" selected disabled>Select a company</option>
                                        <option v-for="company in companies" :key="company.id" :value="company.id">
                                            {{ company.name }}
                                        </option>
                                    </select>

                                    <small class="text-red-500" v-if="errors.company_id">{{ errors.company_id }}</small>
                                </div>


                                <div>
                                    <button type="submit"
                                        class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                        update Employee
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
