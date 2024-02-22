<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
defineProps({
    companies: Object
})
function destroy(id) {
    // alert(id)
    router.delete(route('company.destroy', id))
}
function confirmDelete(id) {
    if (window.confirm("Are you sure you want to delete this company?")) {
        this.destroy(id);
    }
}
function edit(id) {
    // alert(id)
    router.get(route('company.edit', id))
}
function getImageUrl() {

    return "storage/images/";
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Company Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl pt-5 pb-10 mx-auto sm:px-6 lg:px-8 space-x-3 bg-white  ">
                <Link :href="route('company.create')" class="btn bg-blue-500 hover:bg-blue-700  float-right mb-2">
                + Company
                </Link>

                <table class="border-collapse w-full shadow-xl ">
                    <thead>
                        <tr>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                Company Logo</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                Company name</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                Company Email</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                Company website</th>
                            <th
                                class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="company in companies"
                            class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static ">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase textc">Company
                                    Logo</span>

                                <!-- {{ getImageUrl() + company.logo }} -->

                                <template v-if="company.logo">
                                    <img :src="getImageUrl() + company.logo" class="company-logo h-auto">
                                </template>
                                <template v-else>
                                    No Logo Available
                                </template>
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company
                                    name</span>
                                {{ company.name }}
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company
                                    Email</span>
                                {{ company.email }}
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company
                                    Website</span>
                                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">{{ company.website }}</span>
                            </td>
                            <td
                                class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                                <span
                                    class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                <button @click="edit(company.id)"
                                    class="text-blue-400 hover:text-blue-600 underline">Edit</button>
                                <button @click.prevent="confirmDelete(company.id)"
                                    class="text-blue-400 hover:text-blue-600 underline pl-6">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
<style scoped>
.company-logo{
    border-radius: 50%; /* Makes the image circular */
    border: 2px solid #ccc; /* Adds a 2px solid border with a light gray color */
    width: 100px; /* Set the width of the image */
    height: 100px; /* Set the height of the image */
    object-fit: cover;
    margin-left: 100px;
}
</style>
