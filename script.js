//your JS code here. If required.
const form = document.getElementById("booksForm");
const tableBody = document.querySelector("#book-list");

form.addEventListener('submit', (event)=> {
	event.preventDefault();

	const formData = new FormData(form);
	const title = formData.get('title');
	const author = formData.get('author');
	const isbn = formData.get('isbn');

	const newRow = tableBody.insertRow();

	const titleCell = newRow.insertCell(0);
	const authorCell = newRow.insertCell(1);
	const isbnCell = newRow.insertCell(2);
	const actionCell = newRow.insertCell(3);
	
	titleCell.textContent = title;
	authorCell.textContent = author;
	isbnCell.textContent = isbn;

	const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.type = 'button';
	deleteBtn.classList.add('delete-btn');
	
	deleteBtn.addEventListener('click', () => {
    newRow.remove();
  });

    actionCell.appendChild(deleteBtn);

	form.reset();
})