<script>
import Vue from "vue";
import bookService from "@/service/book";

export default Vue.extend({
  async asyncData({ route }) {
    const bookId = Number(route.params.id);
    const book = await bookService.fetchBook(bookId);
    return {
      book,
    };
  },
  data() {
    return {
      book: {
        id: 0,
        title: "",
        author: "",
      },
    };
  },
  methods: {
    onClickEdit() {
      const bookId = Number(this.$route.params.id);
      bookService.putBook(bookId, this.book);
      this.$router.push({ name: "index" });
    },
  },
});
</script>
