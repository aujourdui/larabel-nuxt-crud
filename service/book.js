import axios, { AxiosResponse } from "axios";

export class BookService {
  async fetchBooks() {
    const { data } = await axios.get("/api/books");
    return data.data;
  }

  async postBookData(bookRequest) {
    await axios.post("/api/books", bookRequest);
  }

  async fetchBook(bookId) {
    const { data } = await axios.get(`/api/books/${bookId}`);
    return data.data;
  }

  putBook(bookId, data) {
    axios.put(`/api/books/${bookId}`, data);
  }

  async deleteBook(bookId) {
    await axios.delete(`api/books/${bookId}`);
  }
}
