<script setup lang="ts">
import { mediumContent, mediumData } from '@/api/medium';
import { storeMedium } from '@/store/module/medium';

const articles = ref<mediumData[]>([])
const mediumLoad = async () => {
    const data = storeMedium()
    articles.value = data.content != null ? data.content : await data.getContent()
}

onMounted(async () => {
    await mediumLoad()
})
</script>

<template>
    <div class="py-2 px-20">
        <div class="mx-auto">
            <div class="mx-auto">
                <a href="https://medium.com/@fikihalan" target="_blank"
                    class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Fikih Alan
                </a>
                <p class="mt-2 text-lg leading-8 text-white">This blog is sourced from Medium. For more details, please
                    visit my Medium profile.
                </p>
                <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                    <article v-for="post in articles" class="flex max-w-xl flex-col items-start justify-between">
                        <div class="flex items-center gap-x-4 text-xs">
                            <time :datetime="post.date" class="text-white">{{ post.date }}</time>
                            <p
                                class="relative z-10 rounded-full px-3 py-1.5 font-medium text-white hover:text-gray-500 hover:bg-gray-100 capitalize">
                                {{
                                    post.tags.join(', ') }}</p>
                        </div>
                        <div class="group relative">
                            <h3
                                class="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-500 hover:bg-gray-100 hover:rounded-md">
                                <a :href="post.link" target="_blank">
                                    <span class="absolute inset-0" />
                                    {{ post.title }}
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-white">{{ post.description }}</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img :src="post.image" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
                            <div class="text-sm leading-6">
                                <p class="font-semibold text-white">
                                    <a href="https://medium.com/@fikihalan" target="_blank">
                                        <span class="absolute inset-0 capitalize" />
                                        fikih alan
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>