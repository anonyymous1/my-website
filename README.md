# My MockUp Website
### This is my website.

### Steps to install to computer
1. Go to [Repo](https://github.com/anonyymous1/my-website).
2. `Fork` page.
3. `Clone` code.
4. Open iTerm2 .
5. Type - `git clone https://github.com/anonyymous1/my-website` into iTerm2.
6. Open `index.html` by typing `open index.html` in iTerm2.

# Table of Contents

1. [HTML](#HTML)
2. [CSS](#CSS)
3. [JavaScript](#Javascript)

## HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <style>@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');</style>
    <title>Ruben's Website</title>
</head>
<body>
<!-- NAV BAR -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="/Users/rubencedeno/Desktop/SEI1019/unit_one/deliverable/my-website/imgs/Untitled-1.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="https://www.google.com/search?q=warzone+zombies&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjI9OPn7NXsAhUQnOAKHQZrA7YQ_AUoA3oECBsQBQ&biw=1440&bih=722">Pictures</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Other Games
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="https://www.ea.com/games/apex-legends">APEX Legends</a>
        <a class="dropdown-item" href="https://fallguys.com/">Fall Guys: Ultimate Knockout</a>
        <div class="dropdown-divider"></div>
        </div>
    </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
</nav>

<!-- JUMBOTRON -->
    <div class="jumbotron jumbotron-fluid">
<!-- CAROUSEL WITHIN JUMBOTRON -->
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
    <div class="carousel-item active">
        <img class="big-img" src="https://i.imgur.com/MOMutCh.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img class="big-img" src="https://i.imgur.com/hYAfFai.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img class="big-img" src="https://i.imgur.com/fPeWLtQ.png" class="d-block w-100" alt="...">
    </div>
</div>
</div>
<div class="container">
<h1 class="display-4">Hello, Zombies!</h1>
<p class="lead">This is a simple website showing you some features of the Halloween Event from Call of Duty. Scroll down for links to videos and info, or click below to be taken directly to the site! Have Fun!</p>
<a class="btn btn-outline-danger btn-lg" href="https://www.callofduty.com/modernwarfare/warzone" role="button">Call of Duty Website</a>
</div>
</div>

<!-- TITLE -->
<h1 class="mid-title">Here are some videos to get you started!</h1>

<!-- CARDS 3 OF THEM -->

<div class="card" style="width: 18rem;">
    <img src="https://i.imgur.com/W1o2ZuT.png" class="card-img-top" height="225px" alt="...">
    <div class="card-body">
    <h6 class="card-title">Call of Duty Warzone - Zombie Hunting with Jacksepticeye !</h6>
    <p class="card-text">Check out this video of Jackseptieye playing zombie warzone for the first time and see what he has to say.</p>
    <a href="https://www.youtube.com/watch?v=I6EjQCnQGG8" class="btn btn-primary">Watch Video!</a>
</div>
</div>

<div class="card2" style="width: 18rem;">
    <img src="https://i.imgur.com/HziSIM4.png" class="card-img-top" height="225px" alt="...">
    <div class="card-body">
    <h6 class="card-title">Call of Duty Warzone Zombies is Better than anyone thought!</h6>
    <p class="card-text">This player gets an amazing amount of kills for his first time playing and when its time to be a zombie.. he loves it!.</p>
    <a href="#" class="btn btn-primary">Watch Video!</a>
</div>
</div>

<div class="card3" style="width: 18rem;">
    <img src="https://i.imgur.com/fPeWLtQ.png" class="card-img-top" height="225px" alt="...">
    <div class="card-body">
    <h6 class="card-title">*TOP 5 LOADOUTS* for ZOMBIE ROYALE!</h6>
    <p class="card-text">Need some help setting up your class? Check out the top 5 loadouts to help you conquer those zombies.</p>
    <a href="https://www.youtube.com/watch?v=9nYoknNircY" class="btn btn-primary">Watch Video!</a>
</div>
</div>
  <!-- MID TITLE  -->
<div class="mid-title2">
    <h1>Check out some of the changes below!</h1>
</div>
<!-- MEDIA CARDS -->
<div class="media">
    <img src="https://i.imgur.com/G4Ye2VQ.png" class="mr-3" width="64px" height="64px" alt="...">
<div class="media-body">
    <h5 class="mt-0">You're a Zombie!</h5>
    <p>
    For the first time when you die by another warzone player you can comeback as a zombie. You will have the choice of helping your team or go on the hunt to kill other players. Just be careful not to die as a zombie you wont become human again like that...
    </p>
</div>
</div>

<div class="media">
    <img src="https://i.imgur.com/9Tgd1wR.png" class="mr-3" width="64px" height="64px" alt="...">
    <div class="media-body">
    <h5 class="mt-0">Night Mode!</h5>
    <p>
    Get your thermal scopes ready! For a limited time only, you will be playing in a night version of the map. Make sure you pic your thermals scopes, flashbangs, claymores and sub-machine guns ready. You are gonna need all the help you can get!
    </p> 
</div>
</div>

<div class="media">
    <img src="https://i.imgur.com/fx74dkA.jpg" class="mr-3" width="64px" height="64px" alt="...">
    <div class="media-body">
    <h5 class="mt-0">Collect Vials</h5>
    <p>
    Ready to come back? Kill two warzone players and collect the vials to comeback as a human without your team having to buy you back. You can keep doing this over and over until you die as a zombie. Vials are also hidden around the map so you can collect them that way too. Happy hunting!
    </p> 
</div>
</div>

<!-- FORMS -->
<form>
    <div class="form-group">
    <label for="exampleInputEmail1">For up to date info, Please provide us with your Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <button type="submit" class="btn btn-outline-danger">Submit</button>
    </div>
</form>
<!-- FOOTER -->
<div class="alert alert-danger" role="alert">
    Make sure to come back and check out more games!
</div>
    <script src="app.js"></script>
<!-- Bootstrap JavaScript -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>
```

## CSS
```CSS

.display-4, .nav-link, h5 {
    font-family: 'Gloria Hallelujah', cursive;
}

.navbar2 {
    font-family: 'Gloria Hallelujah', cursive;
}

.jumbotron {
    height: 680px;
}

.card { 
    float: left; 
    width: 200px;
    height: 450px;
    margin-left: 150px;
}

.card2 {
    float: left; 
    width: 200px;
    height: 450px;
    margin-left: 155px;
}

.card3 {
    float: right; 
    width: 200px;
    height: 450px;
    margin-right: 150px;
}

.mid-title {
    text-align: center;
    margin: 20px;
    padding-bottom: 30px;
    font-family: 'Roboto Condensed', sans-serif;
}

.mid-title2 {
    text-align: center;
    margin-top: 520px;
    margin-bottom: 50px;
    font-family: 'Roboto Condensed', sans-serif;
}

.media {
    padding-left: 100px;
    padding-right: 125px;
    padding-bottom: 25px;
}

.alert {
    text-align: center;
}
.lead, p {
    font-family: 'Roboto Condensed', sans-serif;
}

.big-img {
    height: 400px;
    padding-left: 390px;
    padding-bottom: 40px;
}

.form-group {
    font-family: 'Roboto Condensed', sans-serif;
    padding-left: 500px;
    padding-right: 500px;
    text-align: center;
}

.form-text {
    padding-bottom: 10px;
}
```

## JS

```Javascript
console.log('Test');
```