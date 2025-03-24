document.addEventListener('DOMContentLoaded', function() {
    // --- Signup Form ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
  
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
  
        // Store signup details (for demo purposes only)
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
  
        alert('Signup successful for ' + fullname + '!');
        window.location.href = 'courses.html';
      });
    }
  
    // --- Course Selection Form ---
    const courseForm = document.getElementById('courseForm');
    if (courseForm) {
      courseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedCourses = [];
        document.querySelectorAll('input[name="courses"]:checked').forEach(function(checkbox) {
          selectedCourses.push(checkbox.value);
        });
  
        if (selectedCourses.length === 0) {
          alert('Please select at least one course.');
          return;
        }
  
        localStorage.setItem('courses', JSON.stringify(selectedCourses));
        alert('Courses submitted: ' + selectedCourses.join(', '));
        window.location.href = 'houses.html';
      });
    }
  
    // --- House Selection Form ---
    const houseForm = document.getElementById('houseForm');
    if (houseForm) {
      houseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedHouse = document.querySelector('input[name="house"]:checked');
        if (!selectedHouse) {
          alert('Please select a house.');
          return;
        }
        localStorage.setItem('house', selectedHouse.value);
        alert('House selected: ' + selectedHouse.value);
        window.location.href = 'dashboard.html';  // Redirect to the dashboard
      });
    }
  
    document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.getElementById("sidebar");
        const menuBtn = document.getElementById("menu-btn");
        const closeBtn = document.getElementById("close-btn");
    
        // Open sidebar
        menuBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
        });
    
        // Close sidebar
        closeBtn.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    
        // Click outside to close
        document.addEventListener("click", (event) => {
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                sidebar.classList.remove("open");
            }
        });
    
        // Close on Esc key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                sidebar.classList.remove("open");
            }
        });
    });
  });
