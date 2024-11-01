<script setup lang="ts">
import { AutoTyperVue } from "auto-typer-vue3";

let text = [
    'Welcome!,',
    'My Name is Fikih Alan,',
    '/> 01010111 01100101 01101100 01100011 01101111 01101101 01100101 00100001 00101100',
];
</script>

<template>
    <div>
        <div class="px-20 sm:pt-10 min-h-[400px]">
            <div class="flex ">
                <div>
                    <div>
                        <AutoTyperVue :removeAfterRepeat="true" :typingDelay="200"
                            class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-w-5xl leading-tight"
                            componentTag="h1" :text="text" />
                    </div>
                    <div
                        class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-w-5xl leading-tight ">
                        I'm a backend developer with 4+ years of experience creating reliable, scalable
                        systems.
                        Enjoy
                        exploring my work!
                    </div>
                </div>

                <div
                    class="lg:absolute lg:top-28 lg:right-28 p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full">
                    <img src="/src/assets/avatar.png" class="bg-gray-100 rounded-full sm:w-96 h-auto" alt="">
                </div>
            </div>
        </div>

        <div class="pt-10 px-10">
            <div class="bg-[#323443] py-4 rounded-lg">
                <div class="mx-auto px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:max-w-none">
                        <section class="items-center justify-center py-4 sm:flex hidden gap-10 px-10 rounded-md">
                            <a href="https://codeigniter.com" target="_blank" rel="noreferrer">
                                <img src="https://cdn.worldvectorlogo.com/logos/codeigniter.svg" alt="codeigniter"
                                    width="40" height="40" />
                            </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                    alt="css3" width="40" height="40" />
                            </a>
                            <a href="https://dart.dev" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart"
                                    width="40" height="40" />
                            </a>
                            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                                    alt="docker" width="40" height="40" />
                            </a>
                            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                                    alt="express" width="40" height="40" />
                            </a>
                            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40"
                                    height="40" />
                            </a>
                            <a href="https://flutter.dev" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter"
                                    width="40" height="40" />
                            </a>
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"
                                    width="40" height="40" />
                            </a>
                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                    alt="html5" width="40" height="40" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                                rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                                    alt="javascript" width="40" height="40" />
                            </a>
                            <a href="https://laravel.com/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"
                                    alt="laravel" width="40" height="40" />
                            </a>
                            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                    alt="mysql" width="40" height="40" />
                            </a>
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                                    alt="nodejs" width="40" height="40" />
                            </a>
                            <a href="http://golang.org" target="_blank" rel="noreferrer">
                                <img src="https://icongr.am/devicon/go-original.svg?size=128&color=currentColor"
                                    alt="golang" width="40" height="40" />
                            </a>
                            <a href="https://www.php.net" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                                    alt="php" width="40" height="40" />
                            </a>
                            <a href="https://postman.com" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                    alt="postman" width="40" height="40" />
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                    alt="tailwind" width="40" height="40" />
                            </a>
                            <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                                    alt="vuejs" width="40" height="40" />
                            </a>
                        </section>
                        <!-- <div class="text-center">
                            <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Trusted by
                                creators worldwide</h2>
                            <p class="mt-4 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet consect
                                adipisicing
                                possimus.</p>
                        </div>
                        <dl
                            class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-white/5 p-8">
                                <dt class="text-sm font-semibold leading-6 text-gray-300">{{ stat.name }}</dt>
                                <dd class="order-first text-3xl font-semibold tracking-tight text-white">{{ stat.value
                                    }}
                                </dd>
                            </div>
                        </dl> -->
                    </div>
                </div>
            </div>
        </div>


        <div class="px-10 py-14">
            <div class="grid grid-cols-2 gap-2">
                <div class="text-wrap">
                    <div class="font-bold pb-4">About Me</div>
                    <div class="font-light">
                        With over 4 years of experience as a <span
                            class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">backend
                            developer</span>, I bring expertise in PHP,
                        Laravel,
                        CodeIgniter,
                        SQL, NestJS, Go, and ExpressJS, ensuring high-performance applications that are clean,
                        efficient,
                        and
                        scalable. My skill set goes beyond backend; I’m also adept at <span
                            class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">frontend
                            and mobile app development
                        </span>,
                        allowing me to create seamless, user-focused solutions from end to end. I’m passionate about
                        leveraging
                        this <span
                            class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">full-stack</span>
                        versatility to build impactful digital experiences that drive success.
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex items-center justify-center ">
                        <div class="relative bg-[#323443] text-white rounded-lg p-6 w-64 text-center shadow-lg">
                            <div class="flex items-center justify-center mb-4">
                                <div class="absolute -top-8 bg-gray-700 p-4 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 text-white">
                                        <path fill-rule="evenodd"
                                            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h2 class="text-lg font-semibold mb-2">Back-end Development</h2>
                            <p class="text-gray-400 text-sm min-h-32">
                                Backend development tools and framework: Springboot, Golang, Express, NestJS, Laravel,
                                NoSql,
                                SQL, Caching, Message broker
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center ">
                        <div class="relative bg-[#323443] text-white rounded-lg p-6 w-64 text-center shadow-lg">
                            <div class="flex items-center justify-center mb-4">
                                <div class="absolute -top-8 bg-gray-700 p-4 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                            </div>
                            <h2 class="text-lg font-semibold mb-2">Front-end Development</h2>
                            <p class="text-gray-400 text-sm min-h-32">
                                Web development tools and framework: VueJs, TailwindCss, Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
</style>