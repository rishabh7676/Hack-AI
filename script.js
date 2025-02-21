function submitImage() {
    let file = document.getElementById('mri-upload').files[0];
    let formData = new FormData();
    formData.append("mri_image", file);

    fetch('/predict', { 
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction').innerText = `Prediction: ${data.disease}`;
        document.getElementById('confidence').innerText = `Confidence: ${data.confidence}%`;
        document.getElementById('result-section').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
