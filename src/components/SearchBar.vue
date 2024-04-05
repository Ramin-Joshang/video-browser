<template>
    <div class="w-75 mx-auto my-5">
        <input type="text" class="form-control" placeholder="ویدئوی مورد علاقت رو جستجو کن ..." @input="onInput">
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    methods: {
        onInput: function (event) {
            this.$emit("termChange", event.target.value)
        }
    }
};
</script>

<style scoped></style>