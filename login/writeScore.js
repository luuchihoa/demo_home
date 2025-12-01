const API_URL =
  'https://script.google.com/macros/s/AKfycbxi7H5MhkxM478EnIX-shg1NMxg4ljIyCcokmODv55zBnNLyTBtkKTGG-brJcSmf5Q/exec';

window.writeScore = async function (userType, value) {
  const data = { user: userType, value: value };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();
  console.log('Server response:', text);
}
