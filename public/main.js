class App {
  constructor() {
    this.getData()
    this.addClickHandler()
  }

  addClickHandler() {
    document.body.addEventListener('click', () => {
      this.sendUserData({ name: 'Test', amount: 300 })
    })
  }

  sendUserData(user) {
    fetch('/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error.message))
  }

  getData() {
    fetch('/coffee')
      .then(res => res.json())
      .then(data => this.createCards(data.users))
      .catch(error => console.log(error.message))
  }

  createCards(cardsData) {
    cardsData.forEach(this.createSingleCard)
  }

  createSingleCard(cardData) {
    const el = document.createElement('div')
    el.innerHTML = `
      <strong>${cardData.name}</strong>
      (${cardData.amount})
    `
    document.body.appendChild(el)
  }
}

new App()
