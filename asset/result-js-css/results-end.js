
		var rows = document.querySelectorAll("#table-body tr");
		var perPage = 3;
		var totalPages = Math.ceil(rows.length / perPage);
		var current_page = 1;

		for (var i = perPage; i < rows.length; i++) {
			rows[i].style.display = "none";
		}

		var prevBtn = document.querySelector(".pagination li:first-child");
		var nextBtn = document.querySelector(".pagination li:last-child");

		prevBtn.addEventListener("click", function () {
			if (current_page > 1) {
				current_page -= 1;
				showRows(current_page, perPage);
			}
		});

		nextBtn.addEventListener("click", function () {
			if (current_page < totalPages) {
				current_page += 1;
				showRows(current_page, perPage);
			}
		});

		function showRows(page, perPage) {
			var start = (page - 1) * perPage;
			var end = start + perPage;

			for (var i = 0; i < rows.length; i++) {
				if (i >= start && i < end) {
					rows[i].style.display = "table-row";
				} else {
					rows[i].style.display = "none";
				}
			}

			var pageButtons = document.querySelectorAll(".pagination li:not(:first-child):not(:last-child)");
			for (var i = 0; i < pageButtons.length; i++) {
				var button = pageButtons[i];
				var buttonPage = parseInt(button.firstChild.innerHTML);
				if (buttonPage === page) {
					button.classList.add("active");
				} else {
					button.classList.remove("active");
				}
			}

			if (page == 1) {
				prevBtn.classList.add("disabled");
			} else {
				prevBtn.classList.remove("disabled");
			}

			if (page == totalPages) {
				nextBtn.classList.add("disabled");
			} else {
				nextBtn.classList.remove("disabled");
			}
		}

		var pageLinks = document.querySelectorAll(".pagination li:not(:first-child):not(:last-child) a");
		for (var i = 0; i < pageLinks.length; i++) {
			pageLinks[i].addEventListener("click", function () {
				var page = parseInt(this.innerHTML);
				current_page = page;
				showRows(current_page, perPage);
			});
		}

		prevBtn.classList.add("disabled");
		showRows(current_page, perPage);

		// 用于禁用无效字段的示例 JavaScript，如果存在无效字段，则禁止表单提交
		(function () {
			'use strict'

			// 获取所有需要应用自定义 Bootstrap 验证样式的表单
			var forms = document.querySelectorAll('.needs-validation')

			// 遍历表单并阻止提交
			Array.prototype.slice.call(forms)
				.forEach(function (form) {
					form.addEventListener('submit', function (event) {
						if (!form.checkValidity()) {
							event.preventDefault()
							event.stopPropagation()
						}

						form.classList.add('was-validated')
					}, false)
				})
		})()

		window.addEventListener('DOMContentLoaded', function () {
			var searchResultElement = document.getElementById('search-result');
			var geneName = extractGeneNameFromURL();
			searchResultElement.textContent = geneName;
		});

		// 从 URL 中提取基因名
		function extractGeneNameFromURL() {
			var pathname = window.location.pathname;
			var filename = pathname.split('/').pop(); // 获取文件名部分
			var geneName = filename.replace('.html', ''); // 移除文件扩展名
			return geneName;
		}

	/*    // 获取所有图片元素
		const images = document.querySelectorAll('img');

		// 为每个图片元素添加点击事件监听器
		images.forEach(image => {
			image.addEventListener('click', function () {
				// 创建一个弹出框元素
				const modal = document.createElement('div');
				modal.classList.add('modal');

				// 创建一个图片元素，并设置其源为被点击的图片的源
				const modalImage = document.createElement('img');
				modalImage.src = this.src;

				// 将图片元素添加到弹出框中
				modal.appendChild(modalImage);

				// 将弹出框添加到文档的body中
				document.body.appendChild(modal);

				// 添加点击事件监听器，当点击弹出框时，移除弹出框
				modal.addEventListener('click', function () {
					document.body.removeChild(modal);
				});
			});
		});     */

		function showImage(link) {
			var image = link.dataset.image;
			var popupImage = document.getElementById("popupImage");
			popupImage.src = image;
			document.getElementById("imagePopup").style.display = "block";
		  }
		  function hideImage() {
			document.getElementById("imagePopup").style.display = "none";
		  }
		  

