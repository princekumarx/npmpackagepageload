const header = document.querySelector('header');
const footer = document.querySelector('footer');
var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
      
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'style.css';  
        head.appendChild(link);

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