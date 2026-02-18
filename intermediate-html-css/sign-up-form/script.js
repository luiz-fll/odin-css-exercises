function matchingPasswords() {
            const password = document.querySelector('#password');
            const confirmPassword = document.querySelector('#confirm-password');

            if (password.value !== confirmPassword.value) {
                password.setCustomValidity("Passwords do not match");
                confirmPassword.setCustomValidity("Passwords do not match");
            } else {
                password.setCustomValidity("");
                confirmPassword.setCustomValidity("");
            }
        }

document.querySelector(".form-section").addEventListener('input', () => matchingPasswords());