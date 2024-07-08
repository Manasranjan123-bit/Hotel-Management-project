document.getElementById('showContentBtn').addEventListener('click', function() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    if (input1 && input2) {
        document.getElementById('content').style.display = 'grid';
    } else {
        alert('Please fill in both input fields');
    }
});
