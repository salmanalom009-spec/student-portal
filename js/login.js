// Login Page JavaScript - T@ZUL'S CARE Portal

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = event.target.closest('.toggle-password');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        input.type = 'password';
        icon.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// Tab switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Remove active class from all forms
        document.querySelectorAll('.login-form').forEach(form => {
            form.classList.remove('active-tab');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Add active class to corresponding form
        if (tabName === 'admin-login') {
            document.getElementById('adminLoginForm').classList.add('active-tab');
        } else if (tabName === 'student-login') {
            document.getElementById('studentLoginForm').classList.add('active-tab');
        }
    });
});

// Admin Login Form Submission
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login (Replace with actual API call)
    console.log('Admin Login:', { username, password });
    
    // For demo, redirect to admin dashboard
    // In real application, validate credentials with backend
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('username', username);
        window.location.href = 'pages/admin-dashboard.html';
    } else {
        alert('Invalid admin credentials. Demo: username=admin, password=admin123');
    }
});

// Student Login Form Submission
document.getElementById('studentLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const studentID = document.getElementById('studentID').value.trim();
    const password = document.getElementById('studentPassword').value;
    
    if (!studentID || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login (Replace with actual API call)
    console.log('Student Login:', { studentID, password });
    
    // For demo, redirect to student dashboard
    // In real application, validate credentials with backend
    if (studentID && password) {
        localStorage.setItem('userRole', 'student');
        localStorage.setItem('studentID', studentID);
        window.location.href = 'pages/student-dashboard.html';
    } else {
        alert('Invalid student credentials');
    }
});

// Clear form on page load
window.addEventListener('load', function() {
    document.getElementById('adminLoginForm').reset();
    document.getElementById('studentLoginForm').reset();
});
