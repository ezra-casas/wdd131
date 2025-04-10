// Theme event
const themeButton = document.getElementById('theme-toggle')
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.className.includes('dark-mode')){
        themeButton.textContent = "🔆 Light mode"    
    }else{
        themeButton.textContent = "🌙 Dark mode"    
    }
    
});

