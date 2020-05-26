const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];
	item.addEventListener('dragstart', function () {
		draggedItem = item.cloneNode(true);
	});


	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];
		if (list.className === 'list category') {
			list.addEventListener('dragover', function (e) {
				e.preventDefault();
			});

			list.addEventListener('dragenter', function (e) {
				e.preventDefault();
				this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
			});

			list.addEventListener('dragleave', function (e) {
				e.preventDefault();
				this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
			});


			list.addEventListener('drop', function (e) {
				e.preventDefault();
				this.append(draggedItem);
				bindRemove(draggedItem);
				draggedItem.childNodes[1].className = 'close-clone'
				this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
			});
		}
	}
}


function bindRemove() {
	$('.close-clone').click(function (e) {
		$(this).closest('.list-item').remove();
	});
}
