const doctors = [
    { 
      name: "ডক্টর অর্ণব চৌধুরী",
      location: "Mirpur, Popular Hospital, Dhaka",
      specialty: "Cardiologist",
      contact: "0140108338",
      picture: "1st doctor.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর মৌসুমি খান",
      location: "Banani, United Hospital, Dhaka",
      specialty: "Pediatrician",
      contact: "0140108338",
      picture: "images/doctor2.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর সুমন বিশ্বাস",
      location: "Gulshan, Apollo Hospital, Dhaka",
      specialty: "Dermatologist",
      contact: "0140108338",
      picture: "images/doctor3.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর রিমা সেনগুপ্তা",
      location: "Dhanmondi, Square Hospital, Dhaka",
      specialty: "Oncologist",
      contact: "0140108338",
      picture: "images/doctor4.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর তানভীর আহমেদ",
      location: "Uttara, Ibn Sina Hospital, Dhaka",
      specialty: "Orthopedic Surgeon",
      contact: "0140108338",
      picture: "images/doctor5.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর ফারহানা রহমান",
      location: "Mohakhali, BRB Hospital, Dhaka",
      specialty: "Neurologist",
      contact: "0140108338",
      picture: "images/doctor6.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর রাকিব হাসান",
      location: "Bashundhara, Evercare Hospital, Dhaka",
      specialty: "Gastroenterologist",
      contact: "0140108338",
      picture: "images/doctor7.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর নাদিয়া ইসলাম",
      location: "Shyamoli, Labaid Hospital, Dhaka",
      specialty: "Endocrinologist",
      contact: "0140108338",
      picture: "images/doctor8.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর অপু রায়",
      location: "Malibagh, Central Hospital, Dhaka",
      specialty: "Pulmonologist",
      contact: "0140108338",
      picture: "images/doctor9.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর তানিয়া মজুমদার",
      location: "Tejgaon, Holy Family Red Crescent Medical College Hospital, Dhaka",
      specialty: "Nephrologist",
      contact: "0140108338",
      picture: "images/doctor10.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর বিপ্লব মল্লিক",
      location: "Uttara, Ibn Sina Hospital, Dhaka",
      specialty: "Orthopedic Surgeon",
      contact: "0140108338",
      picture: "images/doctor5.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর শারমিন আক্তার",
      location: "Khilgaon, Islami Bank Hospital, Dhaka",
      specialty: "Rheumatologist",
      contact: "0140108338",
      picture: "images/doctor11.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর জয় ব্যানার্জি",
      location: "Badda, Ayesha Memorial Hospital, Dhaka",
      specialty: "Ophthalmologist",
      contact: "0140108338",
      picture: "images/doctor12.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর সুমিতা দাস",
      location: "Rampura, Comfort Diagnostic Center, Dhaka",
      specialty: "Urologist",
      contact: "0140108338",
      picture: "images/doctor13.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর সুমিতা দাস",
      location: "Mohammadpur, City Hospital, Dhaka",
      specialty: "Hematologist",
      contact: "0140108338",
      picture: "images/doctor13.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
      location: "Mohammadpur, City Hospital, Dhaka",
      specialty: "Hematologist",
      contact: "0140108338",
      picture: "images/doctor14.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
      location: "Jatrabari, Medinova Medical Services, Dhaka",
      specialty: "Allergist",
      contact: "0140108338",
      picture: "images/doctor15.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
      location: "Kallyanpur, Dhaka Medical College Hospital, Dhaka",
      specialty: "Psychiatrist",
      contact: "0140108338",
      picture: "images/doctor16.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
      location: "Azimpur, Sir Salimullah Medical College & Mitford Hospital, Dhaka",
      specialty: "Geriatrician",
      contact: "0140108338",
      picture: "images/doctor17.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
      location: "Lalmatia, Green Life Medical College Hospital, Dhaka",
      specialty: "Immunologist",
      contact: "0140108338",
      picture: "images/doctor18.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
      location: "Kakrail, Anwer Khan Modern Medical College Hospital, Dhaka",
      specialty: "Infectious Disease Specialist",
      contact: "0140108338",
      picture: "images/doctor19.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর লীনা ফেরদৌস",
      location: "Shahbagh, BIRDEM General Hospital, Dhaka",
      specialty: "Pathologist",
      contact: "0140108338",
      picture: "images/doctor20.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর লীনা ফেরদৌস",
      location: "Motijheel, National Heart Foundation Hospital, Dhaka",
      specialty: "Cardiothoracic Surgeon",
      contact: "0140108338",
      picture: "images/doctor21.jpg",
      price: "1200tk"
    },
    { 
      name: "Dr. Alice Murray",
      location: "Gulshan, Dhaka Medical Center, Dhaka",
      specialty: "Endocrinologist",
      contact: "0140108338",
      picture: "images/doctor22.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর জয় ব্যানার্জি",
      location: "Mirpur, Al-Helal Specialized Hospital, Dhaka",
      specialty: "Cardiologist",
      contact: "0140108338",
      picture: "images/doctor23.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর জয় ব্যানার্জি",
      location: "Banani, Health and Hope Hospital, Dhaka",
      specialty: "Gastroenterologist",
      contact: "0140108338",
      picture: "images/doctor24.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর তানিয়া মজুমদার",
      location: "Uttara, Crescent Gastroliver & General Hospital, Dhaka",
      specialty: "Hepatologist",
      contact: "0140108338",
      picture: "images/doctor25.jpg",
      price: "1200tk"
    },
    { 
      name: "ডক্টর তানিয়া মজুমদার",
      location: "Dhanmondi, Birdem General Hospital, Dhaka",
      specialty: "Diabetologist",
      contact: "0140108338",
      picture: "images/doctor26.jpg",
      price: "1200tk"
    },
    { 
      name: "Dr. John Becker",
      location: "Shyamoli, Ortho Care Hospital, Dhaka",
      specialty: "Orthopedic Surgeon",
      contact: "0140108338",
      picture: "images/doctor27.jpg",
      price: "1200tk"
    },
    { 
      name: "Dr. Nora Ephron",
      location: "Mohakhali, Ahsania Mission Cancer and General Hospital, Dhaka",
      specialty: "Oncologist",
      contact: "0140108338",
      picture: "images/doctor28.jpg",
      price: "1200tk"
    },
    { 
      name: "Dr. Samuel Lee",
      location: "Khilgaon, Popular Diagnostic Center, Dhaka",
      specialty: "Neurologist",
      contact: "0140108338",
      picture: "images/doctor29.jpg",
      price: "1200tk"
    },
    { 
      name: "Dr. Monica Bell",
      location: "Badda, Prime Hospital, Dhaka",
      specialty: "Pediatrician",
      contact: "0140108338",
      picture: "images/doctor30.jpg",
      price: "1200tk"
    },
    { 
      name: "Dr. Monica Bell",
      location: "Badda, Prime Hospital, Dhaka",
      specialty: "Pediatrician",
      contact: "0140108338",
      picture: "images/doctor30.jpg",
      price: "1200tk"
    }
  ];
      
  
  document.getElementById("locationInput").addEventListener("input", searchDoctorsByLocation);
  document.getElementById("specialtyInput").addEventListener("input", searchDoctorsBySpecialty);
  
  function searchDoctorsByLocation() {
    const locationInput = document.getElementById("locationInput").value.toLowerCase();
    displayDoctors(doctors.filter(doctor => doctor.location.toLowerCase().includes(locationInput)));
  }
  
  function searchDoctorsBySpecialty() {
    const specialtyInput = document.getElementById("specialtyInput").value.toLowerCase();
    displayDoctors(doctors.filter(doctor => doctor.specialty.toLowerCase().includes(specialtyInput)));
  }
  
  function displayDoctors(doctorArray) {
    const doctorList = document.getElementById("doctorList");
    doctorList.innerHTML = ""; // Clear previous results
  
    doctorArray.forEach(doctor => {
      const li = document.createElement("li");
      li.className = "doctor-item";
      li.innerHTML = `
        <div class="doctor-card">
          <div class="doctor-upper-part">
            <div class="doctor-info">
              <h5>${doctor.name}</h5>
              <p>${doctor.specialty}</p>
            </div>
            <div class="doctor-icons">
              <i class="fa-solid fa-video"></i>
              <i class="fa-solid fa-phone"></i>
            </div>
          </div>
          <div class="doctor-middle-part">
            <div class="location">
              <i class="fa-solid fa-location-dot"></i>
              <p><a href="https://maps.google.com/?q=${encodeURIComponent(doctor.location)}" target="_blank">${doctor.location}</a></p>
            </div>
            <div class="availability">
              <i class="fa-solid fa-clock"></i>
              <p>Available: Today</p>
            </div>
            <div class="time-slots">
              <div class="time-slot">08:00 am</div>
              <div class="time-slot">09:00 am</div>
              <div class="time-slot">10:00 am</div>
            </div>
          </div>
          <div class="doctor-lower-part">
            <button onclick="bookAppointment()">Make an Appointment</button>
          </div>
        </div>`;
      doctorList.appendChild(li);
    });
  }
  
  function bookAppointment() {
    const modal = document.getElementById("appointmentModal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("appointmentModal");
    modal.style.display = "none";
  }
  
  // Initial display of all doctors
  displayDoctors(doctors);
  
  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("appointmentModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
    var animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'Animation - 1715894858911.json' // the path to the animation JSON
    });
  });