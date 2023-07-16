<template>
    <section class="w-full bg-center bg-cover h-screen relative" style="background-image: url('/servers.jpg');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 max-w-3xl m-auto pt-[140px] px-4">
            <h1 class="text-6xl text-white text-center">Our Servers</h1>
            <p class="text-white/80 text-center">Our Current Selection Of Rust Servers</p>
            <div class="w-full flex items-center justify-center mt-6" v-if="!server">
                <Icon name="eos-icons:loading" class="text-6xl text-main" />
            </div>
            <div v-else class="flex flex-col p-3 max-w-lg m-auto rounded-lg mt-6 bg-dark relative">
                <h3 v-if="server.status == 'online'" class="bg-gree-600/20 text-white absolute top-5 left-5 bg-dark py-2 px-4 flex items-center rounded-lg"><span class="p-[6px] -mt-1 mr-2 bg-green-600 h-fit w-fit rounded-full"></span> {{ server.status }}</h3>
                <h3 v-else class="bg-gree-600/20 text-white absolute top-5 left-5 bg-dark py-2 px-4 flex items-center rounded-lg"><span class="p-[6px] -mt-1 mr-2 bg-red-600 h-fit w-fit rounded-full"></span> {{ server.status }}</h3>
                <img :src="server.details.rust_headerimage" class="rounded-lg" alt="Exile Rust Header Image">
                <div class="p-3">
                    <h2 class="text-white mt-3 text-2xl">{{ server.name }}</h2>
                </div>

                <div class="bg-[#212529] overflow-hidden relative mb-2 flex items-center justify-center h-[33px] rounded-lg w-full">
                    <div class="absolute top-0 h-full left-0 bg-rust" :style="{ width: `${(server.players / server.maxPlayers) * 100}%` }"></div>
                    <p class="relative text-white text-sm font-semibold">{{ server.players }}/{{ server.maxPlayers }}</p>
                </div>

                <NuxtLink to="steam://connect/156.236.84.41:28076" class="link bg-main w-full text-center py-3 text-lg rounded-lg hover:text-white hover:bg-black transition-all" target="_blank" rel="nofollow">Connect</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
    const server = ref(null);
    onMounted(() => {
        $fetch("https://api.battlemetrics.com/servers/22465145").then(result => {
            server.value = result.data.attributes;
        });
    })
</script>