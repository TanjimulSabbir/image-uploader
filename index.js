document.getElementById("form").addEventListener("submit", handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const file = event.target.image.files[0];
    const reader = new FileReader();

    // Set up the reader to read the file as a data URL
    reader.readAsDataURL(file);

    // When the reader has loaded the file, create an image element with the data URL
    reader.onload = function () {
        const image = document.createElement('img');
        image.classList.add("rounded", "h-full", "md:h-[300px]", "w-full")
        image.src = reader.result;

        // Append the image to the image preview div
        document.getElementById("imageDisplay").appendChild(image);
    };
}
)