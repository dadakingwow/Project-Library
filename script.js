const modal = document.querySelector(".modal");
const btn = document.querySelector(".addButton");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    body.style.overflow = "auto";
  }
});

function submitBook() {
  const title = document.querySelector("#modalTitle").value;
  const author = document.querySelector("#modalAuthor").value;
  const page = document.querySelector("#modalPage").value;
  const readCheck = document.querySelector("#modalCheck");
  const displayBooks = document.querySelector(".displayBooks");

  const createDiv = document.createElement("div");
  createDiv.className = "books";
  if (readCheck.checked) {
    createDiv.innerHTML = `<h3>${title}</h3>
   <p>Author:${author}</p>
   <p>Page:${page}</p>
   <p>read<p>
  `;
  } else {
    createDiv.innerHTML = `<h3>${title}</h3>
  <p>Author:${author}</p>
  <p>Page:${page}</p>
  <p>unread</p>
 `;
  }
  displayBooks.appendChild(createDiv);
  modal.style.display = "none";
  body.style.overflow = "auto";
  document.querySelector("#modalTitle").value = "";
  document.querySelector("#modalAuthor").value = "";
  document.querySelector("#modalPage").value = "";
  readCheck.checked = false;
}
