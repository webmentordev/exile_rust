<template>
    <nav class="fixed top-0 left-0 w-full z-40 mt-4 px-4">
        <div class="max-w-4xl m-auto flex items-center rounded-md p-2 px-3 justify-between bg-black bg-opacity-30 backdrop-blur-lg border border-white/10">
            <NuxtLink to="/" class="flex items-center">
                <img src="/logo.webp" width="45" alt="Rust Logo">
                <span class="ml-3 text-xl text-white/90 link">EXILE RUST</span>
            </NuxtLink>
            <ul class="flex items-center text-white/90 link mr-3">
                <NuxtLink class="ml-7" to="/">Home</NuxtLink>
                <NuxtLink class="ml-7" to="/#about">About</NuxtLink>
                <NuxtLink class="ml-7" to="/staff">Staff</NuxtLink>
                <NuxtLink class="ml-7" to="/wipe">Wipe</NuxtLink>
                <NuxtLink class="ml-7" to="/rules">Rules</NuxtLink>
            </ul>

            <ul class="620:block hidden" @click="show = !show">
                <li class="h-[1px] my-2 w-[60px] bg-white"></li>
                <li class="h-[1px] my-2 w-[60px] bg-white"></li>
                <li class="h-[1px] my-2 w-[60px] bg-white"></li>
            </ul>
            <div class="fixed top-0 left-0 flex justify-end w-full h-screen z-40" v-if="show" @click="show = !show">
                <div class="max-w-lg w-full h-full bg-dark p-3">
                    <h2 class="text-3xl mb-3 text-white">GamersRUs Servers</h2>
                    <ul class="text-start text-white flex flex-col w-full">
                        <NuxtLink class="py-6 border-b border-gray-600" to="/">Home</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/#about">About</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/staff">Staff</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/wipe">Wipe</NuxtLink>
                        <NuxtLink class="py-6 border-b border-gray-600" to="/rules">Rules</NuxtLink>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return {
                show: false
            }
        }
    }
</script>