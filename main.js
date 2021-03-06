function  menuEventClick(){
  const nav = document.querySelector('#header nav')
  const toggle = document.querySelectorAll('nav .toggle')

  for (const element of toggle){
    element.addEventListener('click', function(){
      nav.classList.toggle('show')
    })
  }

  const hamburguerMenu = document.querySelector('.hamburguer')

  hamburguerMenu.addEventListener('click', function(){
    hamburguerMenu.classList.toggle('active');
  }) 

  const links = document.querySelectorAll('nav ul li a')

  for (const link of links){
    link.addEventListener('click', function(){
      nav.classList.remove('show')
      hamburguerMenu.classList.remove('active')
    })
  }

  const menuItems = document.getElementsByClassName("menuList");

  for (const active of menuItems){
    active.addEventListener('click', function(){
      
      const current = document.getElementsByClassName(' active')

      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    })
  } 

}

menuEventClick()