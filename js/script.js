const rangInput = document.querySelector('input')
const container = document.querySelector('.container')


rangInput.addEventListener('change' , function (event){
    container.style.filter = 'brightness(' + event.target.value + '%)'

})


