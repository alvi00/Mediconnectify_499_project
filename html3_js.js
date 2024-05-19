// Load donors from local storage or use the initial array if nothing is in local storage
const donors = JSON.parse(localStorage.getItem('donors')) || [
    { name: "John Doe", location: "Mirpur, Dhaka", bloodGroup: "A+", contact: "+880 014-010-8333", age: 30, gender: "Male" },
    { name: "Jane Smith", location: "Banani, Dhaka", bloodGroup: "B-", contact: "+880 014-010-8333", age: 25, gender: "Female" },
    { name: "David Johnson", location: "Gulshan, Dhaka", bloodGroup: "AB+", contact: "+880 014-010-8333", age: 40, gender: "Male" },
    { name: "Emily Brown", location: "Uttara, Dhaka", bloodGroup: "O+", contact: "+880 014-010-8333", age: 35, gender: "Female" },
    { name: "Michael Lee", location: "Dhanmondi, Dhaka", bloodGroup: "A-", contact: "+880 014-010-8333", age: 28, gender: "Male" },
    { name: "Asif Rahman", location: "Mohammadpur, Dhaka", bloodGroup: "O-", contact: "+880 014-010-8333", age: 32, gender: "Male" },
    { name: "Sara Begum", location: "Tejgaon, Dhaka", bloodGroup: "A+", contact: "+880 014-010-8333", age: 29, gender: "Female" },
    { name: "Rahim Chowdhury", location: "Motijheel, Dhaka", bloodGroup: "B+", contact: "+880 014-010-8333", age: 45, gender: "Male" },
    { name: "Nadia Ali", location: "Bashundhara, Dhaka", bloodGroup: "AB-", contact: "+880 014-010-8333", age: 26, gender: "Female" },
    { name: "Tanvir Hasan", location: "Shahbag, Dhaka", bloodGroup: "O+", contact: "+880 014-010-8333", age: 31, gender: "Male" },
    { name: "Nadia Ali", location: "Bashundhara, Dhaka", bloodGroup: "AB-", contact: "+880 014-010-8333", age: 26, gender: "Female" },
    { name: "Tanvir Hasan", location: "Shahbag, Dhaka", bloodGroup: "O+", contact: "+880 014-010-8333", age: 31, gender: "Male" }
  
    
  ];
    
    function searchDonors() {
      const locationInput = document.getElementById("locationInput").value.trim().toLowerCase();
      const bloodGroupInput = document.getElementById("bloodGroupInput").value.trim().toUpperCase();
      
      displayDonors(donors.filter(donor => 
        donor.location.toLowerCase().includes(locationInput) && 
        donor.bloodGroup.toUpperCase().includes(bloodGroupInput)
      ));
    }
    
  function displayDonors(donorArray) {
      const donorList = document.getElementById("donorList");
      donorList.innerHTML = ""; // Clear previous results
  
      donorArray.forEach(donor => {
        const li = document.createElement("li");
        li.className = "donor-card"; // Apply the card class for styling
        li.innerHTML = `
          <div class="donor-upper-part location">
            <div class="donor-info">
              <h5>${donor.name}</h5>
             
              <p class="location-info"> <i class="fa-solid fa-location-dot"></i> ${donor.location}</p>
            </div>
            <div class="doctor-icons">
            <i class="fa-solid fa-video"></i>
            <i class="fa-solid fa-phone"></i>
          </div>
          </div>
          <div class="donor-middle-part">
            <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
            <p><strong>Age:</strong> ${donor.age}</p>
            <p><strong>Gender:</strong> ${donor.gender}</p>
            <p><strong>Contact:</strong> ${donor.contact}</p>
          </div>
          <div class="donor-lower-part">
            <button onclick="contactDonor(this.getAttribute('data-location'))" data-location="${donor.location}">Contact Donor</button>
          </div>`;
        donorList.appendChild(li);
      });
  }
    
    function addDonor(event) {
      event.preventDefault(); // Prevent form submission from reloading the page
      const name = document.getElementById("nameInput").value.trim();
      const location = document.getElementById("locationInputForm").value.trim();
      const contact = document.getElementById("contactInput").value.trim();
      const age = document.getElementById("ageInput").value.trim();
      const gender = document.getElementById("genderInput").value;
      const bloodGroup = document.getElementById("bloodGroupInputForm").value.trim().toUpperCase();
    
      if (name === "" || location === "" || contact === "" || age === "" || gender === "" || bloodGroup === "") {
        alert("Please fill out all fields.");
        return;
      }
    
      const newDonor = { name, location, bloodGroup, contact, gender, age };
      donors.push(newDonor);
      displayDonors(donors); // Update donor list
      document.getElementById("donorFormContainer").style.display = "none"; // Hide the form after submission
      document.getElementById("toggleFormButton").textContent = "Be a Donor"; // Reset button text
      localStorage.setItem('donors', JSON.stringify(donors));
    }
    
    // Display all donors initially
    displayDonors(donors);
    
    // Add event listeners to search inputs for dynamic search
    document.getElementById("locationInput").addEventListener("input", function() {
      const locationInput = this.value.trim().toLowerCase();
      
      if (locationInput === "") {
        document.getElementById("bloodGroupInput").selectedIndex = 0; // Reset blood group input
        displayDonors(donors); // Display all donors when location input is cleared
      } else {
        searchDonors(); // Perform search when location input is not empty
      }
    });
    document.getElementById("bloodGroupInput").addEventListener("input", searchDonors);
    
    // Add event listener to the "Be a Donor" button for toggling form visibility
    document.getElementById("toggleFormButton").addEventListener("click", function() {
      const formContainer = document.getElementById("donorFormContainer");
      const buttonText = this.textContent;
    
      if (buttonText === "Be a Donor") {
        formContainer.style.display = "block"; // Show the form
        this.textContent = "Hide Form"; // Change button text
      } else {
        formContainer.style.display = "none"; // Hide the form
        this.textContent = "Be a Donor"; // Reset button text
      }
    });
    
    // Add event listener to the donor form for submission
    document.getElementById("donorForm").addEventListener("submit", addDonor);
    
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Add hover effect for buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
      });
    
      button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
      });
    });
    
    // Add animations for elements
    document.addEventListener('DOMContentLoaded', function () {
      const elements = document.querySelectorAll('.animate');
    
      elements.forEach(element => {
        element.classList.add('animated');
      });
    });
    
    // Add event listener to location input to toggle visibility of "Be a Donor" button and form
    document.getElementById('locationInput').addEventListener('input', function() {
      var searchValue = this.value.trim();
      var toggleButton = document.getElementById('toggleFormButton');
      var formContainer = document.getElementById('donorFormContainer');
  
      if (searchValue === "") {
        toggleButton.style.display = 'block'; // Show the button when input is empty
        formContainer.style.display = 'none'; // Ensure form is hidden when input is empty
      } else {
        toggleButton.style.display = 'none'; // Hide the button when input is not empty
        formContainer.style.display = 'none'; // Hide the form when input is not empty
      }
    });
  
    function contactDonor(location) {
      const encodedLocation = encodeURIComponent(location);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
      window.open(googleMapsUrl, '_blank');
    }
  
  
    document.addEventListener("DOMContentLoaded", function() {
      var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animation - 1715909349043.json' // the path to the animation JSON
      });
    });
    