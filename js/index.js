import { Router } from "./routes.js"

const router = new Router()

router.add("#home", "pages/home.html")
router.add("#universe", "pages/universe.html")
router.add("#exploration", "pages/exploration.html")


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

const homeButton = document.querySelector('.page-home')
const universeButton = document.querySelector('.page-universe')
const explorationButton = document.querySelector('.page-exploration')
const page = document.querySelector('body')

homeButton.addEventListener('click', () => {
  window.location = '#home'
  homeButton.classList.add('focus')
  universeButton.classList.remove('focus')
  explorationButton.classList.remove('focus')
  page.classList.remove('page-universe')
  page.classList.remove('page-exploration')
})

universeButton.addEventListener('click', () => {
  window.location = '#universe'
  universeButton.classList.add('focus')
  homeButton.classList.remove('focus')
  explorationButton.classList.remove('focus')
  page.classList.add('page-universe')
  page.classList.remove('page-exploration')
})

explorationButton.addEventListener('click', () => {

  window.location = '#exploration'
  explorationButton.classList.add('focus')
  homeButton.classList.remove('focus')
  universeButton.classList.remove('focus')
  page.classList.add('page-exploration')
  page.classList.remove('page-universe')
})