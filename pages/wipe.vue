<template>
    <section class="w-full bg-center bg-cover h-screen relative" style="background-image: url('/wipe.jpg');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 max-w-3xl m-auto pt-[140px] px-4">
            <h1 class="text-6xl text-white text-center 510px:text-4xl">Servers Wipe Schedule</h1>
            <p class="text-white/80 text-center">Our Servers Map and BP Wipe Schedule</p>
            <div class="flex flex-col p-8 rounded-lg mt-6 bg-dark relative w-full">
                <p class="text-white/90">Here is the complete schedule for Yearly BP (Blueprint) and RP (Resource Point) wipes. The monthly forced wipe schedule aligns with the <span class="text-main">Pacific Standard Time (PST)</span> zone for the timing of blueprint wipes.</p>
                <div class="p-3 bg-dark-100 mt-3 rounded-lg mb-3">
                    <h2 class="text-2xl text-main mb-2">MAP Wipe Schedule</h2>
                    <p class="text-white p-3 bg-dark rounded-md"><span class="text-main font-semibold">10 AM PST</span> — Thursday</p>
                </div>
                <div class="p-3 bg-dark-100 mt-3 rounded-lg mb-3">
                    <h2 class="text-2xl text-main mb-2">Blueprints Wipe Schedule</h2>
                    <p class="text-white p-3 bg-dark rounded-md"><span class="text-main font-semibold">10 AM PST (Force Wipe)</span> — First Thursday Of Every Month</p>
                </div>
                <div class="p-3 bg-dark-100 mt-3 rounded-lg mb-3">
                    <h2 class="text-2xl text-main mb-2">Kits Data Wipe Schedule</h2>
                    <p class="text-white p-3 bg-dark rounded-md"><span class="text-main font-semibold">10 AM PST</span> — Thursday</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    useSeoMeta({
        title: "Wipe Schedule — Exlie Rust",
        ogTitle: 'Wipe Schedule — Exlie Rust',
        description: 'Welcome to Exile Rust official website. Get all Exile servers connection information here.',
        ogDescription: 'Welcome to Exile Rust official website. Get all Exile servers connection information here.',
        ogImage: 'https://cdn.discordapp.com/attachments/1129278239358062592/1129396420202463252/background_exfil.png',
        twitterCard: 'summary_large_image',
    });
</script>