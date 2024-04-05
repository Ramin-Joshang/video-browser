<template>
    <div class="col-md-8" v-if="video">
        <div class="ratio ratio-16x9">
            <iframe class="w-100 h-100" :src="videoUrl" title="YouTube video" allowfullscreen></iframe>
        </div>
        <div class="mt-3 p-3 border border-2 rounded-1">
            <h3>{{ video.snippet.title }}</h3>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "VideoDetail",
    props: ["video"],
    computed: {
        videoUrl() {
            const { videoId } = this.video.id
            return `https://www.youtube.com/embed/${videoId}`
        }
    }
}
</script>

<style></style>