const fetchBooks = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/books");
    const data = await res.json();
    setBooks(data.books);
    setLoading(false);
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};
