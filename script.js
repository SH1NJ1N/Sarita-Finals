const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const logo = document.querySelector('.logo');
const logo1 = document.querySelector('.logo1');

toggleBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('active');
});