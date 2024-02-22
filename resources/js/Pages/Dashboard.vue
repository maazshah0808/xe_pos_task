<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>
        </template>

        <!-- button formo parent dev -->
        <div class="py-12 ">
            <div class="max-w-7xl  mx-auto sm:px-6 lg:px-8 space-x-3">

            </div>
        </div>

    </AuthenticatedLayout>
</template>
<style scoped></style>
