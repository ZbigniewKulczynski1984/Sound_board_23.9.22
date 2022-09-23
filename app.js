const sounds = ['bearpour', 'ufo', 'applause', 'sunrire', 'sword'];

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').appendChild(btn)
})