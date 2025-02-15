// Display uploaded image
function displayImage(event) {
    const image = document.getElementById('header-display');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}

// Copy text to clipboard
function copyText() {
    const text = document.getElementById('editable-text');
    text.select();
    document.execCommand('copy');
    alert('Text copied to clipboard');
}

// Update link href dynamically
document.getElementById('editable-link').addEventListener('input', function() {
    const linkDisplay = document.getElementById('link-display');
    linkDisplay.href = this.value;
});