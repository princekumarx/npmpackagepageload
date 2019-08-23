const header = document.querySelector('header');
const footer = document.querySelector('footer');

const loadheader =(options)=>{
    fetch(options.url).then(res => res.text()).then((data)=>{
        header.innerHTML = data;
        header.classList.add('header');
    })
    console.log('nljllf')
}

const loadfooter = (options)=>{
    fetch(options.url).then(res => res.text()).then((data)=>{
        footer.innerHTML = data;
        footer.classList.add('footer')
    })
}

 module.exports = {
     loadheader:loadheader,
     loadfooter:loadfooter
 };