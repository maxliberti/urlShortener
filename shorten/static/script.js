const urls = JSON.parse(document.getElementById('myurls').textContent);
document.getElementById('mainForm').addEventListener('submit', generateUrl);

// helper function that generates the particular characters 
function convertBase62(urlNum) {
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (urlNum === 0) return alphabet[0];
  let result = "";
  while (urlNum > 0) {
    result = alphabet[urlNum % 62] + result;
    urlNum = (Math.floor(urlNum / 62));
  }
  return result;
}

function generateUrl(e) {
  e.preventDefault();

  console.log(urls);

  let urlNum = urls.length + 1;
  let inputUrl = document.getElementById("long_url");
  console.log(`you just inputted: ${inputUrl.value}`);

  let endCharacters = convertBase62(urlNum);
  finalUrl = "hair.com/" + endCharacters;
  let outputUrl = document.getElementById("shortened_url");
  outputUrl.innerHTML = finalUrl;
  console.log(`the generated url is: ${outputUrl.innerHTML}`);
};




