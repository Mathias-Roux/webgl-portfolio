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
  <main>
    <div id="banner">
      <h1 class="banner__title">mathiasRoux</h1>
      <h2 class="banner__role">Creative developer</h2>
      <span class="close">close</span>
    </div>

    <?php
    $json_data = file_get_contents("./data/projects_content.json");
    $items = json_decode($json_data, true);
    ?>
    <section id="content__home">
      <?php
      if (count($items) != 0) {
        foreach ($items as $item) {
      ?>
          <div id="item">
            <div class="item__left">
              <div class="item__left-title"><?= $item["title"] ?></div>
            </div>

            <div class="placeholder" style="background-color: <?= $item["bg-color"] ?>">
              <img class="images" data-src="<?= $item["images"][0] ?>" alt="<?= $item["title"] ?>">
            </div>
          </div>
      <?php
        }
      }
      ?>
    </section>

    <?php
    $json_data = file_get_contents("./data/inside_content.json");
    $infos = json_decode($json_data, true);
    ?>
    <section id="content__inside">
      <?php
      if (count($infos) != 0) {
        foreach ($infos as $info) {
      ?>
          <div id="hero">
            <div class="title">
              <div><?= $info["hero"]["title"][0] ?></div>
              <div><?= $info["hero"]["title"][1] ?></div>
            </div>
            <div class="details">
              <div><?= $info["hero"]["details"]["title"] ?></div>
              <div><?= $info["hero"]["details"]["technos"][0] ?></div>
              <div><?= $info["hero"]["details"]["technos"][1] ?></div>
            </div>
            <div class="infos">
              <div><?= $info["hero"]["infos"]["title"] ?></div>
              <div><?= $info["hero"]["infos"]["description"] ?></div>
              <a href="<?= $info["hero"]["infos"]["link"] ?>">Github</a>
              <div><?= $info["hero"]["infos"]["date"] ?></div>
            </div>
          </div>
          <div id="previews">
            <img src="<?= $info["previews"]["images"] ?>"></img>
            <video width="320" height="240" autoplay="true" muted="true" loop="true" disablePictureInPicture>
              <source src="<?= $info["previews"]["videos"][1] ?>" type="video/mp4">
            </video>
          </div>
      <?php
        }
      }
      ?>
    </section>
  </main>

  <div id="container"></div>

</body>

<script type="module" src="../scripts/app.js"></script>

</html>
