let issuedBooks = [];

      function issueBook() {
        const bookName = document.getElementById("bookName").value;
        const issuedTo = document.getElementById("issuedto").value;
        const issuedTime = new Date();
        const bookId = issuedBooks.length + 1;
        const bookStatus = "not returned";

        issuedBooks.push({
          id: bookId,
          bookname: bookName,
          issuedto: issuedTo,
          issuedtime: issuedTime,
          status: bookStatus,
        });

        refresh();
      }

      function refresh() {
        const tableBody = document.getElementById("show");
        tableBody.innerHTML = "";

        issuedBooks.forEach((book) => {
          const row = document.createElement("tr");
          row.innerHTML = `
					<td>${book.id}</td>
                    <td>${book.bookname}</td>
					<td>${book.issuedto}</td>
					<td>${book.issuedtime}</td>
					<td class="status {book.status.replace(" ", "-")}">${book.status}</td>
				`;
          row.onclick = () => editStatus(book);
          tableBody.appendChild(row);
        });
      }

      function editStatus(book) {
        if (book.status === "not returned") {
          book.status = "returned";
        } else {
          book.status = "not returned";
        }
        refresh();
      }