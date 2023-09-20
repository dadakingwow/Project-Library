class library {
  constructor() {
    this.library = [];
  }

  submitBook() {
    const add = document.querySelector(".add");
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const addBook = document.querySelector("#addBook");
    const displayBooks = document.querySelector(".displayBooks");

    add.addEventListener("click", () => {
      modal.style.display = "block";
    });
    window.addEventListener("click", (e) => {
      if (e.target !== add && !modalContent.contains(e.target)) {
        modal.style.display = "none";
      }
    });

    addBook.addEventListener("click", () => {
      let title = document.querySelector("#modalTitle");
      let author = document.querySelector("#modalAuthor");
      let page = document.querySelector("#modalPage");
      let readCheck = document.querySelector("#modalCheck");
      let book = {
        title: title.value,
        author: author.value,
        page: page.value,
        read: readCheck.checked,
      };
      this.library.push(book);
      modal.style.display = "none";
      title.value = "";
      author.value = "";
      page.value = "";
      readCheck.checked = false;

      displayBooks.innerHTML = "";
      this.library.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
        <h3>Title:${book.title}</h3>
        <p>Author:${book.author}</p>
        <p>page:${book.page}</p>
        <p> ${book.read ? "read" : "not read"} </p>`;
        displayBooks.appendChild(bookDiv);
      });
    });
  }
}

const myLibrary = new library();

myLibrary.submitBook();
