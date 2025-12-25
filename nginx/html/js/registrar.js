document.getElementById('formregister').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('/register', {
        method: 'POST',
        body: formData
    })
        .then(r => r.text()) // TEMPORÁRIO PARA DEBUG
        .then(r => {
            console.log(r);
            alert(r);
        });
});
