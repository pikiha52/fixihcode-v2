<script setup lang="ts">
// @ts-expect-error
import VueCommand, { createStdout, jsonFormatter, listFormatter, createStderr } from "vue-command";
import "vue-command/dist/vue-command.css";

const terminals = ref()
const commands = {
    "help": () => createStdout(listFormatter(
        [
            "- help -> list all command"
        ],
        [
            "- backend -> list all skil backend"
        ]
    )),
    "backend": () => createStdout(jsonFormatter({
        language: ['java', 'go', 'typescript', 'javascript', 'php', 'c#'],
        framework: ['springboot', 'go-fiber', 'go-gin', 'go-echo', 'express', 'nestjs', 'laravel', 'code igniter', '.net'],
        database: ['sql', 'nosql'],
        messageBroker: ['rabbitmq'],
        caching: ['redis']
    })),
}

watch(terminals, newval => {

})

</script>

<template>
    <div class="px-20 rounded-md">
        <vue-command class="rounded-lg" :hide-prompt="false" show-help prompt="fixih-skills@tech: " ref="terminals"
            help-text="type in help" help-timeout="3500" :commands="commands" title="fixih-skills" terminal>
        </vue-command>
    </div>
</template>

<style scoped>
.vue-command .term {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
}

.vue-command .term-std {
    max-width: 65rem;
    height: 43.5rem;
    overflow-y: scroll;
}
</style>