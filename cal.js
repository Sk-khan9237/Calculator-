const display = document.getElementById("displays");

        // Get all buttons
        const buttons = document.querySelectorAll("button");

        // Loop through each button
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const btnValue = button.innerText;

                if (button.id === "cut") {
                    // Clear everything
                    display.value = "";
                } else if (button.id === "back") {
                    // Remove last character
                    display.value = display.value.slice(0, -1);
                } else if (button.id === "equal") {
                    // Calculate and show result
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = "Error";
                    }
                } else {
                    // Append number or operator to display
                    display.value += btnValue;
                }
            });
        });