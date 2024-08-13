document.getElementById('usernameInput').addEventListener('input', function() {
    const input = this;
    const errorText = document.getElementById('errorText');
    
    const pattern = /^[A-Za-zА-Яа-яёЁ]+$/;
    
    if (!pattern.test(input.value)) {
        input.classList.add('error'); 
        errorText.style.display = 'block';
    } else {
        input.classList.remove('error'); 
        errorText.style.display = 'none';
    }
});
