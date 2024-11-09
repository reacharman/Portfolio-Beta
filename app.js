function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    // Animate button icon
    const btn = document.querySelector('.toggle-btn');
    btn.querySelector('i').style.animation = 'none';
    setTimeout(() => {
        btn.querySelector('i').style.animation = '';
    }, 10);
}