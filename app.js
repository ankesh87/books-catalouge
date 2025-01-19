// app.js
let books = [];

// Fetch data from books.json
fetch('books.json')
  .then(response => response.json())
  .then(data => {
    books = data;
    displayBooks(books); // Initial display of all books
  })
  .catch(error => console.error('Error fetching books:', error));

// Function to display books in the table
function displayBooks(bookList) {
  const bookTable = document.getElementById('bookTable');
  bookTable.innerHTML = ''; // Clear previous results

  if (bookList.length === 0) {
    bookTable.innerHTML = '<tr><td colspan="2" class="no-results">No results found</td></tr>';
    return;
  }

  bookList.forEach(book => {
    const row = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
      </tr>
    `;
    bookTable.innerHTML += row;
  });
}

// Function to search books dynamically
function searchBooks() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) 
  );
  displayBooks(filteredBooks);
}
