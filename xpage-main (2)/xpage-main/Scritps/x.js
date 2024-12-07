const commentBox = document.getElementById('comment-box');
const charCount = document.getElementById('char-count');

commentBox.addEventListener('input', () => {
    const maxLength = commentBox.getAttribute('maxlength');
    const currentLength = commentBox.value.length;
    charCount.textContent = maxLength - currentLength;
});