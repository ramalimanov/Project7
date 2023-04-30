<template>
  <div class="row post mb-5">
    <div class="col-12 col-sm-4 text-center">
      <img
        v-if="post.post_featured_image != ''"
        class="img-fluid"
        :src="'http://localhost/assets/uploads/' + post.post_featured_image"
        alt
      />
      <img v-else :src="imgPlaceholder" alt />
    </div>
    <div class="col-12 col-sm-8">
      <h4>{{ post.post_title }}</h4>
      <p>{{ post.post_description }}</p>
    </div>
    <div class="col-12 mt-3">
      <button
        class="btn btn-outline-primary"
        @click="markRead"
        :disabled="this.read"
      >
        Mark as read
      </button>
    </div>
    <div class="col-12">
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: ["post", "index", "imgPlaceholder"],
  data() {
    return {
      read: false,
    };
  },
  methods: {
    markRead() {
      this.$api.post("/read/" + post.id).then(() => {
        this.read = true;
      });
    },
  },
  maunted() {
    this.$api.get("/read/" + post.id).then(() => {
      this.read = true;
    });
  },
};
</script>

<style></style>
