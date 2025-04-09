document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("box1");
    const modal = document.getElementById("box");
    const cancelBtn = document.querySelector(".can");
    const submitBtn = document.querySelector(".sub");
    const discardX = document.querySelector(".discard");
    const rateButtons = document.querySelectorAll(".rate");

    // Open modal
    function openModal() {
        overlay.style.display = "flex"; // Display the overlay when modal is opened
    }

    // Select rating
    rateButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            rateButtons.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
        });
    });

    // Close modal function
    function closeModal() {
        overlay.style.display = "none"; // Hide the overlay when modal is closed
    }

    // Submit
    submitBtn.addEventListener("click", () => {
        console.log("Feedback submitted");
        closeModal();
    });

// to cancel when the cancel button is clicked
    
    discardX.addEventListener("click", closeModal);

    cancelBtn.addEventListener("click", () => {
        rateButtons.forEach(b => b.classList.remove("selected"));
    });

    // Click outside modal to close
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // For testing, open the modal on page load
    openModal();
});
