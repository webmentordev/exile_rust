<template>
    <section class="w-full bg-center bg-cover h-screen relative flex items-center justify-center" style="background-image: url('/background.jpg');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10">
            <img src="/logo.webp" width="250" class="m-auto mb-6" alt="Exile Logo">
            <h1 class="text-6xl text-white/90 mb-3">Welcome to EXILE RUST</h1>
            <ul class="m-auto flex items-center justify-center">
                <NuxtLink class="mr-2 py-3 px-6 bg-main link text-dark font-semibold text-xl inline-block" to="steam://connect/156.236.84.41:28075">Connect</NuxtLink>
                <NuxtLink class="mr-2 py-3 px-6 bg-main link text-dark font-semibold text-xl inline-block" to="https://discord.gg/rCT2DxMt" target="_blank">Discord</NuxtLink>
            </ul>
        </div>
    </section>
</template>