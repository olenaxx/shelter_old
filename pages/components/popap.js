function requestData() {
  fetch('../../pets.json').then((data) => {
   return  data.json()
  }).then(response => {
       renderAnimals(response)
  })
}

const requestData = async () => {
  cards = await fetch('../../pets.json')
}