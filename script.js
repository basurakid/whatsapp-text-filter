const submitBtn = document.querySelector(".format");

submitBtn.addEventListener("click", () => {
    const name = document.querySelector(".name");
    const rawText = document.querySelector(".rawText");
    if (name.value === "") {
        console.log("hey")
        alert("Tienes que poner el nombre que te sale en los mensajes.");
    }
    else if (rawText.value === "") {
        alert("No has puesto texto, bobo.")
    }
    else {
        const formatted = document.querySelector(".formatted");
        const removeRegex = /\[[^\]]*\]\s[A-Za-z]+:/g;

        formatted.textContent = rawText.value.replace(removeRegex, "")
    }
})