const summaryBtn = document.querySelector('.orderresultmain__summary__headtext')
const summary = document.querySelector('.orderresultmain__summary')





summaryBtn.addEventListener('click', () => {
    summary.style.setProperty('--height', summary.scrollHeight + 'px')
    summary.classList.toggle('toggled')
})