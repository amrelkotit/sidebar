const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const menuLinks = document.querySelectorAll('.sidebar .menu a');

function openSidebar() {
    sidebar.classList.add('active');
    toggleBtn.style.display = 'none';
    closeBtn.style.display = 'block';

    sidebar.querySelectorAll('.menu li').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
    });
}

function closeSidebar() {
    sidebar.classList.remove('active');
    toggleBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    sidebar.querySelectorAll('.menu li').forEach(item => {
        item.style.transitionDelay = '0s';
    });
}

function setupSidebarBehavior() {
    if (window.matchMedia('(min-width: 900px)').matches) {
        sidebar.addEventListener('mouseenter', openSidebar);
        sidebar.addEventListener('mouseleave', closeSidebar);
        toggleBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        toggleBtn.addEventListener('click', openSidebar);
        closeBtn.addEventListener('click', closeSidebar);
        closeBtn.style.display = 'none';
    }
}

window.addEventListener('resize', setupSidebarBehavior);
setupSidebarBehavior();

document.addEventListener('keydown', (e) => {
    if (sidebar.classList.contains('active') && e.key === 'Escape') {
        closeSidebar();
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');
    });
});
