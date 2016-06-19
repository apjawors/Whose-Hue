$(document).ready(function() { 
    
    var countdown = 30;
    var score;
    var total;
    var startTimer = setInterval(function() {timer()}, 1000);

    function team(name, color) {
      this.name = name;
      this.color  = color;
    }

    var list = [
      new team("Cardinals", "#97233F"),
      new team("Falcons", "#A71930"),
      new team("Ravens", "#241773"),
      new team("Bills", "#00338D"),
      new team("Panthers", "#0085CA"),
      new team("Bears", "#0B162A"),
      new team("Bengals", "#FB4F14"),
      new team("Browns", "#22150C"),
      new team("Cowboys", "#002244"),
      new team("Broncos", "#002244"),
      new team("Lions", "#005A8B"),
      new team("Packers", "#203731"),
      new team("Texans", "#02253A"),
      new team("Colts", "#002C5F"),
      new team("Jaguars", "#9F792C"),
      new team("Chiefs", "#E31837"),
      new team("Rams", "#002244"),
      new team("Dolphins", "#008E97"),
      new team("Vikings", "#4F2683"),
      new team("Patriots", "#C80815"),
      new team("Saints", "#9F8958"),
      new team("Giants", "#0B2265"),
      new team("Jets", "#203731"),
      new team("Raiders", "#A5ACAF"),
      new team("Eagles", "#004953"),
      new team("Steelers", "#FFB612"),
      new team("Chargers", "#002244"),
      new team("49ers", "#AF1E2C"),
      new team("Seahawks", "#002244"),
      new team("Buccaneers", "#D50A0A"),
      new team("Titans", "#4B92DB"),
      new team("Redskins", "#773141")
    ]
    
    function start(){
        var random = Math.floor(Math.random() * 4);
        var choices = [];
        var newList = list.sort(function() {
          return .5 - Math.random();
        });
        for (var i = 0; i < 4; i++){
          choices.push(newList[i]);
          $('.container').append('<div class="choices" id="' + newList[i].color + '">' + newList[i].name + '</div>')
        }
        var bodyBackground = document.querySelector('body').style.background = newList[random].color;
        $('.choices').click(function() {
          if ($(this).attr('id') === bodyBackground){
            score++;
            total++;
            $('.score').text('You\'ve scored ' + score + '/' + total + ' correctly.');
            $('.choices').replaceWith('');
          }
          else {
            total++;
            $('.choices').replaceWith('');
            $('.score').text('You\'ve scored ' + score + '/' + total + ' correctly.');
          }
          start();
        })
    }

    function timer(){
      countdown--; 
      $('.timer').text(countdown);
      if (countdown === 0){
        var efficiency = Math.floor((score / total) * 100);
        $('.end').addClass('stop animated bounceInDown');
        $('.final-score').text('You ended up with '+ score + ' correct out of ' + total + '.');
        if (total <= 5 && score < 3) {
          $('.message').text('I honestly don\'t even know how you can call yourself a fan of the NFL. You suck.');
        }
        if (total <= 5 && score === total) {
          $('.message').text('Anyone can get a perfect score when you take a day to answer each question.');
        }
        if (total > 5 && score / total < .7) {
          $('.message').text('Hate to tell you but that\'s actually a failing grade at most schools.');
        }
        if (total > 5 && score / total < .8 && (score / total >= .7)) {
          $('.message').text('Oh wow a ' + efficiency + '%. I\'m sure your mom will be proud.');
        }
        if (total > 5 && score / total < .9 && (score / total >= .8)) {
          $('.message').text('Ehh an ' + efficiency + '% is ok. I\'m not impressed though.');
        }
        if (total > 5 && score / total < 1 && (score / total >= .9)) {
          $('.message').text('Ok. Sure. A ' + efficiency + '% is good, but I\'d get them all right. Better luck next time.');
        }
        if (total >= 10 && score === total){
          $('.message').text('You didn\'t miss one question? Join the club.');
        }
        if (total >= 15 && score === total){
          $('.message').text('Yikes...If you cheated, that\'s sad. If you actually studied for this, that\'s even sadder.');
        }
        if (total >= 20 && score === total){
          $('.message').text('Oh c\'mon get a life already.');
        }
      }
    }

    $('.go').click(function() {
      $('.timer').remove();
      countdown = 31;
      $('.choices').replaceWith('');
      $('.end').removeClass('stop animated bounceInDown');
      $('.title').css({"opacity": "0", "z-index": "-100"});
      $('body').append('<div class="timer">' + countdown + '</div>');
      score = 0;
      total = 0;
      $('.score').text('Pick a team!');
      start();
    })
})


