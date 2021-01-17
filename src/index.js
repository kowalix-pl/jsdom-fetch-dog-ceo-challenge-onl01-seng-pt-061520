console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch ("https://dog.ceo/api/breeds/image/random/4")
 .then(response => response.json())
 .then(response => {
  const $div = document.querySelector("div") ;
  const $img = document.createElement("img");
  $img.src = response.message[0]
  const $img1 = document.createElement("img");
  $img1.src = response.message[1]
  const $img2 = document.createElement("img");
  $img2.src = response.message[2]
  const $img3 = document.createElement("img");
  $img3.src = response.message[3]
  $div.append($img)
  $div.append($img1)
  $div.append($img2)
  $div.append($img3)
  })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch (breedUrl)
   .then(response => response.json())
   .then(response => {
    const $ul = document.querySelector("ul") 
    const $breed = document.createElement("breed")
    $breed.src = response.message[0]
    $ul.append($ul)
  })