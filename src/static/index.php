<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>php_test</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="./style.css">
</head>

<body>
  <div id="container">
    <div id="container__banner">
      <h1 class="banner__title">mathiasRoux</h1>
      <h2 class="banner__role">Creative developer</h2>
      <span class="close">close</span>
    </div>

    <?php
    $json_data = file_get_contents("./data/projects_content.json");
    $items = json_decode($json_data, true);
    ?>

    <section id="container__home">
      <div class="container__home-items">
        <?php
        if (count($items) != 0) {
          foreach ($items as $item) {
        ?>
          <img class="images" src="<?= $item["images"][0] ?>" alt="<?= $item["title"] ?>">
        <?php
          }
        }
        ?>
      </div>
    </section>


  </div>

  <div id="canvas"></div>

</body>

<script type="module" src="../scripts/app.js"></script>

</html>
