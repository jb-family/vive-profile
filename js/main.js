// 스크롤 시 헤더 배경 전환
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 현재 경로에 맞는 내비게이션 메뉴 활성화
const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.style.color = 'var(--text-primary)';
        link.style.setProperty('--after-width', '100%');
    }
});
