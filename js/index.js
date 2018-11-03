document.querySelector('.page-loaded').innerText = (new Date()).toLocaleTimeString();
document.querySelector(".load-html-ajax").addEventListener('click', loadHtmlAjax);

function loadHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector(".load-json-ajax").addEventListener('click', loadAjaxJson);

function loadAjaxJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.account-balance').innerText = clientData.account;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}
document.querySelector('.login-form input[type=submit]').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.login-form').innerHTML = '<h3>Welcome!</h3>';
        }
        else if (xhr.readyState === 4 && xhr.status !== 200) {
            document.querySelector('.login-form').innerHTML += 'Error!';
        }
    }
    xhr.open('POST', 'login.php', true);
    const form = document.querySelector('.login-form');
    const data = new FormData(form);
    xhr.send(data);
}

document.querySelector('.load-html-fetck').addEventListener('click', loadHtmlFetck);
function loadHtmlFetck() {
    fetch('.client-data.html')
    .then(response => response.text())
    .then(html => document.querySelector('.html-placeholder').innerHTML = html)
}
