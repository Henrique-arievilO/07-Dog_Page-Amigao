const dogs = [
  {
    Name: 'Luna',
    Age: '5 meses',
    Img: './assets/image/Luna.png',
    Alt: 'Cadelinha Luna, 5 meses.'
  },
  {
    Name: 'Duque',
    Age: '2 anos',
    Img: './assets/image/Duque.png',
    Alt: 'Cachorrinho Duque, 2 anos.'
  },
  {
    Name: 'Rex',
    Age: '3 meses',
    Img: './assets/image/Rex.png',
    Alt: 'Cachorrinho Rex, 3 meses.'
  },
  {
    Name: 'Thor',
    Age: '1 ano',
    Img: './assets/image/Thor.png',
    Alt: 'Cachorrinho Thor, 1 ano.'
  },
  {
    Name: 'Perola',
    Age: '1 ano e 4 meses',
    Img: './assets/image/Perola.png',
    Alt: 'Cadelinha Perola, 1 ano e 4 meses.'
  }
]

const list = document.querySelector('.dogList')

function addCard (dogs) {
  for (let i = 0; i < dogs.length; i++) {
    renderCard(dogs[i])
  }
}

addCard(dogs)

function renderCard (dogs) {
  const listItem = document.createElement('li')
  listItem.classList.add('card')

  listItem.innerHTML = `
              <figure>
                <img
                  src="${dogs.Img}"
                  alt="${dogs.Alt}"
                />
              </figure>
              <h3 class="font1-s">${dogs.Name}</h3>
              <p class="font2-s">${dogs.Age}</p>
              <button class="font1-xs">Adotar</button>
    `

  list.appendChild(listItem)
}
