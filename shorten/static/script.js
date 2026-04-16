const urls = JSON.parse(document.getElementById('myurls').textContent);

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

function generateUrl() {
  let urlNum = urls.length;

  let inputUrl = document.getElementById("input_url");
  console.log(`you just inputted: ${inputUrl.value}`);

  let endCharacters = convertBase62(urlNum);

  finalUrl = "hair.com/" + endCharacters;

  let outputUrl = document.getElementById("output_url");
  outputUrl.innerHTML = finalUrl;
};




