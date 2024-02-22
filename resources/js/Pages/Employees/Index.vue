<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
defineProps({
    employees: Object
})
function destroy(id) {
    // alert(id)
    router.delete(route('employee.destroy', id))
}
function confirmDelete(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
        this.destroy(id);
    }
}
function edit(id) {
    // alert(id)
    router.get(route('employee.edit', id))
}
</script>
<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Employees Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl pt-5 pb-10 mx-auto sm:px-6 lg:px-8 space-x-3 bg-white  ">
                <Link :href="route('employee.create')" class="btn bg-blue-500 hover:bg-blue-700  float-right mb-2">
                + Employee
                </Link>

                <table class="border-collapse w-full shadow-xl ">
                    <thead>
                        <tr>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                employee first name</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                employee last name</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                employee Email</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                employee company</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                employee Phone</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employee in employees"
                            class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">

                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Employee
                                    first name</span>
                                {{ employee.first_name }}
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Employee
                                    last Name</span>
                                {{ employee.last_name }}
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Employee
                                    email</span>
                                <span class="">{{ employee.email }}</span>
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Employee
                                    Company</span>
                                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">{{
                                    employee.company.name }}</span>
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Employee
                                    Phone</span>
                                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">{{ employee.phone }}</span>
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                <button @click="edit(employee.id)"
                                    class="text-blue-400 hover:text-blue-600 underline">Edit</button>
                                <button @click.prevent="confirmDelete(employee.id)"
                                    class="text-blue-400 hover:text-blue-600 underline pl-6">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
<style scoped></style>
