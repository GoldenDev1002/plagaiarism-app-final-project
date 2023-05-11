

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file1 = document.querySelector('#file1').files[0];
  const file2 = document.querySelector('#file2').files[0];

  const formData = new FormData();
  formData.append('file1', file1);
  formData.append('file2', file2);

  const response = await fetch('/check', {
    method: 'POST',
    body: formData
  });

  const result = await response.text();
  const resultDiv = document.querySelector('#resultField');
  resultDiv.innerHTML = result;
  resultDiv.style.display = 'block';
});