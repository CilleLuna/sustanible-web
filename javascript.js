var menu = document.getElementById('menu');
var menuItems = menu.getElementsByTagName('li');

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  var submenu = menuItem.getElementsByTagName('ul')[0];

  if (submenu) {
    menuItem.addEventListener('mouseover', function() {
      submenu.style.display = 'block';
    });

    menuItem.addEventListener('mouseout', function() {
      submenu.style.display = 'none';
    });
  }
}
