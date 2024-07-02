class HandleContentToggler {
	constructor() {
		this.assignVariables();
		this.init();
	}

	assignVariables() {
		this.btn_toggler_bod = document.querySelectorAll(".btx_content_toggler_bod");
		this.btn_toggler_np = document.querySelectorAll(".btx_content_toggler_np");
	};



	init() {
		this.handle_toggler_bod();
		this.handle_toggler_np();

	}

	handle_toggler_bod() {
		this.btn_toggler_bod.forEach(element => {
			element.addEventListener('click', () => {
				const content = element.querySelector('.btx_toggle_content');
				document.querySelectorAll('.btx_toggle_content').forEach(contentItem => {
					if (contentItem !== content) {
						contentItem.style.height = "0px";
					}
				});
				content.style.height = content.style.height === "0px" ? `${content.scrollHeight}px` : "0px";
			});
		});
	}

	handle_toggler_np() {
		this.btn_toggler_np.forEach(element => {
			element.addEventListener('click', () => {
				const content = element.nextElementSibling
				console.log(content.scrollHeight);
				document.querySelectorAll('.btx_toggle_content').forEach(contentItem => {
					if (contentItem !== content) {
						contentItem.style.height = "0px";
						contentItem.style.marginTop = "0px";
					}
				});
				content.style.height = content.style.height === "0px" ? `${content.scrollHeight + 100}px` : "0px";
				content.style.marginTop = content.style.marginTop === "0px" ? '1em' : "0px";
			});
		});
	}
}
document.addEventListener("DOMContentLoaded", () => {
	new HandleContentToggler();
})




