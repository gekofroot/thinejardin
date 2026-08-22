
let headerDisplay = document.getElementById('header-display')
let headerH2 = document.getElementById('header-h2')
let searchField = document.getElementById('search-field')
let search = document.getElementById('search')
let ulListItems = document.getElementsByTagName('li')
let ulListItemsA = document.getElementsByTagName('a')

let windowWidth = window.innerWidth


setTimeout(() => {
  if (windowWidth < 1080) {
    search.style.borderTop = '3px outset var(--acnt-a)'
  } else {
    search.style.borderTop = '4px outset var(--acnt-a)'
  }
}, 600)

setTimeout(() => {
  if (windowWidth < 1080) {
    search.style.borderRight = '2px outset var(--acnt-h)'
  } else {
    search.style.borderRight = '3px outset var(--acnt-h)'
  }
}, 700)

setTimeout(() => {
  if (windowWidth < 1080) {
    search.style.backdropFilter = 'blur(9px)'
  } else {
    search.style.backdropFilter = 'blur(7px)'
  }
}, 750)

setTimeout(() => {
  if (windowWidth < 1080) {
    ulListItems.style.scrollbarColor = 'var(--acnt-e) var(--clr)'
  } else {
    ulListItems.style.scrollbarColor = 'var(--acnt-a) var(--clr)'
  }
}, 2000)


console.log('ul list items a:')
for (x of ulListItemsA) {
}

let headerDisplayToggle = 0
headerDisplay.addEventListener('dblclick', ()=> {
  
  if (headerDisplayToggle === 0) {

    headerH2.style.opacity = '0'
    searchField.style.display = 'flex'
    setTimeout(()=> {
      headerH2.style.display = 'none'
      searchField.style.opacity = '100'
    }, 300)

    headerDisplayToggle = 1
  } else if (headerDisplayToggle === 1) {

    searchField.style.opacity = '0'
    headerH2.style.display = 'unset'
    setTimeout(()=> {
      searchField.style.display = 'none'
      headerH2.style.opacity = '100'
    }, 300)

    headerDisplayToggle = 0
  }
})

search.addEventListener('keyup', () => {
  let eventKey = event.key
  for (let x = 0; x < ulListItems.length; x++) {
    let currentSearchValue = search.value.toLowerCase()
    let currentUlItem = ulListItemsA[x].href
    console.log('current search value:', currentSearchValue)
    console.log('current ul item:', currentUlItem)
    if (currentUlItem.includes(currentSearchValue)) {
      ulListItems[x].style.display = 'flex'
      setTimeout(() => {
	ulListItems[x].style.opacity = '100%'
      }, 200)
    } else {
      ulListItems[x].style.opacity = '0'
      setTimeout(() => {
	ulListItems[x].style.display = 'none'
      }, 200)
    }
  }
})

search.addEventListener('dblclick', () => {
  search.value = ''
  for (let x = 0; x < ulListItems.length; x++) {
    ulListItems[x].style.display = 'flex'
    setTimeout(() => {
      ulListItems[x].style.opacity = '100%'
    }, 400)
  }
})

