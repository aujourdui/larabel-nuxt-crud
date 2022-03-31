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

<template>
  <div>
    <h2>List</h2>
    <ul v-for="(book, i) in books" :key="i">
      <li>{{ book.title }}</li>
      <NuxtLink :to="{ name: 'book-detail-id', params: { id: book.id } }"
        ><button>Detail</button></NuxtLink
      >
      <button @click="onClickDelete(book.id)">Delete</button>
    </ul>
    <h3>New</h3>
    <input v-model="form.title" type="text" placeholder="title" /><br />
    <input v-model="form.author" type="text" placeholder="author" /><br />
    <button @click="onClickAdd">Add</button>
  </div>
</template>
