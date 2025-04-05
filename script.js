// --------------------------------------------navbar-----------------------------------------------
      const menuButton = document.getElementById("menuButton");
      const closeButton = document.getElementById("closeButton");
      const slideMenu = document.getElementById("slideMenu");
      const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links

      menuButton.addEventListener("click", () => {
        slideMenu.classList.remove("translate-x-full", "invisible"); // Show the menu
      });

      closeButton.addEventListener("click", () => {
        slideMenu.classList.add("translate-x-full", "invisible"); // Hide the menu
      });

      // Close menu when any nav link is clicked
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          slideMenu.classList.add("translate-x-full", "invisible");
        });
      });
      // Scroll to Top Button Functionality
      const scrollToTop = document.getElementById("scrollToTop");
      scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      //---------------contact us


      document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate fields manually
        function validateField(id) {
            let field = document.getElementById(id);
            if (!field.value.trim()) {
                field.classList.add("border-red-600", "bg-red-100");
                isValid = false;
            } else {
                field.classList.remove("border-red-600", "bg-red-100");
            }
        }

        // Validate the required fields
        validateField("name");
        validateField("vorname");
        validateField("telefon");
        validateField("email");

        // Validate the checkbox
        let datenschutz = document.getElementById("datenschutz");
        let datenschutzWrapper = document.getElementById("datenschutzWrapper");

        if (!datenschutz.checked) {
            datenschutzWrapper.classList.add("border-2", "border-red-600", "bg-red-100");
            isValid = false;
        } else {
            datenschutzWrapper.classList.remove("border-2", "border-red-600", "bg-red-100");
        }

       // If the form is valid, show the success message
       if (isValid) {
            document.getElementById("successMessage").classList.remove("hidden"); // Show success message
            setTimeout(function() {
                document.getElementById("successMessage").classList.add("hidden"); // Hide success message after 3 seconds
            }, 7000);

            // alert("Formular erfolgreich gesendet!");
            // this.submit(); // Or handle form submission as needed
        }
        // this.submit();
         // Or handle form submission as needed

    });

     //   -----------about us--------------
     const moreContent = document.getElementById("moreContent");
     const showMoreBtn = document.getElementById("showMoreBtn");
     const showLessBtn = document.getElementById("showLessBtn");

     showMoreBtn.addEventListener("click", function () {
         moreContent.classList.remove("hidden"); // Show content
         showMoreBtn.classList.add("hidden");  // Hide "Mehr anzeigen" button
         showLessBtn.classList.remove("hidden"); // Show "Weniger anzeigen" button
     });

     showLessBtn.addEventListener("click", function () {
         moreContent.classList.add("hidden"); // Hide content
         showMoreBtn.classList.remove("hidden"); // Show "Mehr anzeigen" button
         showLessBtn.classList.add("hidden"); // Hide "Weniger anzeigen" button
     });


