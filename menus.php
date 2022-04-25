<!DOCTYPE html>
<html lang="en">
  <head>
    <? include '_top.php'; ?>
    <link rel="stylesheet" href="./css/menus.css">
    <title>«Поляна» – живописный семейный ресторан</title>
  </head>

  <body class="home-page">
    <!-- LOADER -->
    <div id="loader"></div>

    <div id="content-block">
      <!-- HEADER -->
      <header class="header type-2">
        <? include '_header_2.php';?>
      </header>
      <div class="margin-header"></div>

      <main class="menus-main">
        <div class="menus-list">
          <div class="menus-item">
            <a href="files/MENU-text_preview-3.pdf">
              <img src="img/menu-item-all.jpg" alt="">
            </a>
            <a href="files/MENU-text_preview-3.pdf">Основное меню</a>
          </div>
          <div class="menus-item">
            <a href="files/MENU-text_preview-3.pdf">
              <img src="img/menu-item-all.jpg" alt="">
            </a>
            <a href="files/MENU-text_preview-3.pdf">Сезонное меню</a>
          </div>
          <div class="menus-item">
            <a href="files/Винная%20карта.pdf.pdf">
              <img src="img/menu-item-all-3.jpg" alt="">
            </a>
            <a href="files/Винная%20карта.pdf.pdf">Винная карта</a>
          </div>
        </div>
      </main>

    </div>

    <!-- FOOTER -->
    <footer>
      <? include '_footer.php';?>
    </footer>

    <? include '_bottom.php';?>
  </body>
</html>
