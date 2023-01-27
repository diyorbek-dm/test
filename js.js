let t = document.querySelector('.btn-t')
let f = document.querySelector('.btn-f')
let strT = document.querySelector('.str-t')
let strF = document.querySelector('.str-f')

strT.hidden = true
strF.hidden = true

t.onclick = function () {
  this.style.border = '2px solid red'
  this.style.fontWeight = 'bold'
  strT.hidden = false
}

f.onclick = function () {
  this.style.border = '2px solid red'
  this.style.fontWeight = 'bold'
  strF.hidden = false

  let time = setTimeout(() => {
    let user = prompt('Ваше имя: ')
    if (user === null || user === '') {
      alert('Ты все равно тупой!')
    } else {
      alert(user + ' Ты тупой')
    }
  }, 700)
}