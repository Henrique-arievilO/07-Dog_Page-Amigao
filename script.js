const cards = document.getElemntById('cards')
const card = document.querySelectorAll('#cards .card')

let idx = 0

function carousel () {
  idx++
  if (idx > card.length - 1) {
    idx = 0
  }

  card.style.transform = `translateX(${-idx * 200}px)`
}

setInterval(
  carousel,
  1800
)
