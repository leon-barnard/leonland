document.getElementById('contactForm').addEventListener('submit', function(event) {
  disableForm();
  submitForm();
  event.preventDefault();
})

function disableForm() {
  document.querySelector('button#submit').setAttribute('disabled', 'true');
}

function enableForm() {
  document.querySelector('button#submit').removeAttribute('disabled');
}

function submitForm() {
  const headers = new Headers();
  headers.set('Accept', 'application/json');

  const formElement = document.querySelector('form');

  fetch("https://formspree.io/leonbarnard@gmail.com", {
    headers: headers,
    method: 'post',
    body: new FormData(formElement)
  })
    .then(function(response) { return response.json() })
    .then(function(data) { showResult(data) });
};


function showResult(result) {
  if (result.success) {
    // document.querySelector('h1.success').classList.remove('hidden');
    document.querySelector('div.success').classList.add('appear');
    document.querySelector('form').classList.add('fadeout');
    // console.log('sent successfully');
  } else {
    document.querySelector('div.fail').classList.remove('hidden');
    enableForm();
    // console.log('failed');
  };
};
