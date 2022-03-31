<script>
import Vue from "vue";
import bookService from "@/service/book";

export default Vue.extend({
  async asyncData() {
    const books = await bookService.fetchBooks();
    return {
      books,
    };
  },
  data() {
    return {
      form: {},
      books: [],
    };
  },
  methods: {
    async onClickAdd() {
      await bookService.postBook({ ...this.form });
      this.books = await bookService.fetchBooks();
      this.form = {};
    },
    async onClickDelete() {
      await bookService.deleteBook(bookId);
      this.books = await bookService.fetchBooks();
    },
  },
});
</script>

<template></template>
