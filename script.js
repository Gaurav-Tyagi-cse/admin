
const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

const openSidebar = () => {
    sidebar.classList.add('show');
    overlay.classList.add('show');
};

const closeSidebar = () => {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
};

toggleBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// login

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin123' && password === '12345') {
        alert('Login successful! Redirecting to Dashboard');
        window.location.href = 'Dashboard.html';
    } else {
        alert('Invalid username or password!');
    }
}
