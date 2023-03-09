<script>
export default {
    props: ['desactivar'],
}
</script>
<template>
    <button :disabled="desactivar" class="bg-green-500 mx-3 my-2 px-3 py-2 rounded-md disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed hover:bg-amber-500">
        <div class="flex gap-2 items-start justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

            <slot></slot>
        </div>
    </button>
</template>