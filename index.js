const form = document.getElementById("survey-form");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const selectedGenderInputs = Array.from(genderInputs).filter((input) => input.checked);
        const country = document.getElementById("country").value;
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const firstNameError = document.getElementById("first-name-error");
        const lastNameError = document.getElementById("last-name-error");
        const dateOfBirthError = document.getElementById("date-of-birth-error");
        const genderError = document.getElementById("gender-error");
        const countryError = document.getElementById("country-error");
        const professionError = document.getElementById("profession-error");
        const emailError = document.getElementById("email-error");
        const mobileError = document.getElementById("mobile-error");

        firstNameError.textContent = "";
        lastNameError.textContent = "";
        dateOfBirthError.textContent = "";
        genderError.textContent = "";
        countryError.textContent = "";
        professionError.textContent = "";
        emailError.textContent = "";
        mobileError.textContent = "";

        if (firstName === "") {
          firstNameError.textContent = "Please enter your first name.";
        }

        if (lastName === "") {
          lastNameError.textContent = "Please enter your last name.";
        }

        if (dateOfBirth === "") {
          dateOfBirthError.textContent = "Please enter your date of birth.";
        }

        if (selectedGenderInputs.length === 0) {
          genderError.textContent = "Please select at least one gender option.";
        }

        if (country === "") {
          countryError.textContent = "Please select your country.";
        }

        if (profession === "") {
          professionError.textContent = "Please enter your profession.";
        }

        if (email === "") {
          emailError.textContent = "Please enter your email address.";
        } else if (!isValidEmail(email)) {
          emailError.textContent = "Please enter a valid email address.";
        }

        if (mobile === "") {
          mobileError.textContent = "Please enter your mobile number.";
        } else if (!isValidMobile(mobile)) {
          mobileError.textContent = "Please enter a valid mobile number.";
        }

        if (
          firstName !== "" &&
          lastName !== "" &&
          dateOfBirth !== "" &&
          selectedGenderInputs.length > 0 &&
          country !== "" &&
          profession !== "" &&
          email !== "" &&
          isValidEmail(email) &&
          mobile !== "" &&
          isValidMobile(mobile)
        ) {
          const gender = selectedGenderInputs.map((input) => {
            const label = input.nextElementSibling;
            return label.textContent;
          }).join(", ");

          const message = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Date of Birth: ${dateOfBirth}
            Gender: ${gender}
            Country: ${country}
            Profession: ${profession}
            Email: ${email}
            Mobile Number: ${mobile}
          `;

          alert(message);

          form.reset();
        }
      });

      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      function isValidMobile(mobile) {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
      }