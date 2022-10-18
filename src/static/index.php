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

      <div class="items">
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
      </div>

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
          <div id="content">
            <div id="previews">
              <?php
              if (count($info["previews"]["images"]) != 0) {
                foreach ($info["previews"]["images"] as $image) {
              ?>
                  <img src="<?= $image ?>"></img>
              <?php
                }
              }
              ?>
              <?php
              if (count($info["previews"]["videos"]) != 0) {
                foreach ($info["previews"]["videos"] as $video) {
              ?>
                  <video src="<?= $video ?>" type="video/mp4" width="320" height="240" muted="true" loop="true" disablePictureInPicture></video>
              <?php
                }
              }
              ?>
            </div>
            <div id="hero">
              <div class="hero__inner">
                <div class="title">
                  <?php
                  if (count($info["hero"]["title"]) != 0) {
                    foreach ($info["hero"]["title"] as $title) {
                  ?>
                      <div><?= $title ?></div>
                  <?php
                    }
                  }
                  ?>
                </div>
                <div class="details">
                  <div><?= $info["hero"]["details"]["title"] ?></div>
                  <?php
                  if (count($info["hero"]["details"]["technos"]) != 0) {
                    foreach ($info["hero"]["details"]["technos"] as $techos) {
                  ?>
                      <div><?= $techos ?></div>
                  <?php
                    }
                  }
                  ?>
                </div>
                <div class="infos">
                  <div><?= $info["hero"]["infos"]["title"] ?></div>
                  <div><?= $info["hero"]["infos"]["description"] ?></div>
                  <a href="<?= $info["hero"]["infos"]["link"] ?>">Github</a>
                  <div><?= $info["hero"]["infos"]["date"] ?></div>
                </div>
              </div>
            </div>
          </div>
      <?php
        }
      }
      ?>
    </section>
  </div>

  <div id="canvas"></div>

</body>

<script type="module" src="../scripts/app.js"></script>

</html>
