<template>
    <li class="list-group-item media d-flex gap-3" @click="onVideoClick">
        <img class="img-thumbnail" :src="thumbnailsUrl" :alt="video.snippet.title">
        <div class="media-body">
            {{ video.snippet.title }}
        </div>
    </li>
</template>

<script>
export default {
    name: "VideoListItem",
    props: ["video"],
    computed: {
        thumbnailsUrl() {
            return this.video.snippet.thumbnails.default.url
        }
    },
    methods: {
        onVideoClick() {
            this.$emit("videoSelect", this.video)
        }
    }
}
</script>

<style scoped>
li:hover {
    background-color: #eee;
}
</style>