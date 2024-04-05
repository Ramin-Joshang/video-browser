<template>
    <ul class="list-group p-0 col-md-4">
        <VideoListItem v-for="video in videos" :key="video.id.videoId" :video="video" @videoSelect="onVideoSelect">
            <!-- {{ video.title }} -->
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: "VideoList",
    components: {
        VideoListItem
    },
    props: ["videos"],
    methods: {
        onVideoSelect(video) {
            this.$emit("videoSelect", video)
        }
    }
}
</script>

<style></style>