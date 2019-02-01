var canvasWidth, canvasHeight;

var x_position = [];
var y_position = [];

var tail_position = [];

var r = 255, g = 255, b = 255;

var r_full = true, g_full = true, b_full = true;

var speed = [];
var drop_width = [];
var length = 20;
var fade = 10;
var fr = 100;

var drops = 50;

function setup()
{
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
    
    createCanvas(canvasWidth, canvasWidth);
    frameRate(fr);
    for(var i = 0; i < drops; i++)
    {
        x_position[i] = (random(canvasWidth));
        y_position[i] = (random(canvasHeight));
        tail_position[i] = y_position[i] - length;
        speed[i] = random(1, 10);
        drop_width[i] = random(1, 5);
    }
}
    
function draw()
{
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
    
    stroke(r,g,b);
    background(25,25,25,fade);
    for(var i = 0; i < drops; i++)
    {
        line(x_position[i], y_position[i], x_position[i], tail_position[i]);
        
        strokeWeight(drop_width[i]);
        
        y_position[i] += speed[i];
        tail_position[i] = y_position[i] - length;
        
        if(tail_position[i] > canvasHeight)
        {
            y_position[i] = 0;
            tail_position[i] = -100;
        }
    }
    
    if(r >= 255) {r_full = true;}
    else if(r <= 0) {r_full = false;}
    
    if(r_full == true) {r -= 0.2;}
    else if(r_full == false) {r += 0.2;}
    
    if(g >= 255) {g_full = true;}
    else if(g <= 0) {g_full = false;}
    
    if(g_full == true) {g -= 0.4;}
    else if(g_full == false) {g += 0.4;}
    
    if(b >= 255) {b_full = true;}
    else if(b <= 0) {b_full = false;}
    
    if(b_full == true) {b -= 0.3;}
    else if(b_full == false) {b += 0.3;}
    
}

function windowResized()
    {
        resizeCanvas(windowWidth, windowHeight);

        for(var i = 0; i < drops; i++)
        {
            x_position[i] = (random(canvasWidth));
            y_position[i] = (random(canvasHeight));
            tail_position[i] = y_position[i] - length;
            speed[i] = random(1, 10);
            drop_width[i] = random(1, 5);
        }
    }

$(document).ready(function() {

//    var theme = new Audio('../assets/sound/abeyance_theme.wav');
//    
//    theme.loop = true;
//
//    var counter = 2;
//    console.log(counter);
//    
//    if(counter % 2 == 0)
//    {
//        theme.play();
//    }
//    else if(counter % 2 == 1)
//    {
//        theme.pause();
//    }
//    
//    
//    $(".music_icon").click(function() {
//        counter++;
//    })
    
    $("#main_content").hide();
    
    $("#title_screen").hide().delay(1000).fadeIn(10000);
    $("#title_start").hide().delay(1000).fadeIn(15000);
    
    $("#mechanics_section").hide();
    $("#concept_art_section").hide();
    $("#models_section").hide();
    $("#programming_section").hide();
    $("#resources_section").hide();
    
    $("#title_screen").click(function()
    {
        $("#title_screen").fadeOut(1000);
        $("#main_content").delay(1000).fadeIn(1000);
    })
    
    $("#mechanics_button").click(function() {
        $("#mechanics_section").delay(500).fadeIn(500);
        $("#concept_art_section").fadeOut(500);
        $("#models_section").fadeOut(500);
        $("#programming_section").fadeOut(500);
        $("#resources_section").fadeOut(500);
    });
    
    $("#concept_art_button").click(function() {
        $("#mechanics_section").fadeOut(500);
        $("#concept_art_section").delay(500).fadeIn(500);
        $("#models_section").fadeOut(500);
        $("#programming_section").fadeOut(500);
        $("#resources_section").fadeOut(500);
    });
    
    $("#models_button").click(function() {
        $("#mechanics_section").fadeOut(500);
        $("#concept_art_section").fadeOut(500);
        $("#models_section").delay(500).fadeIn(500);
        $("#programming_section").fadeOut(500);
        $("#resources_section").fadeOut(500);
    });
    
    $("#programming_button").click(function() {
        $("#mechanics_section").fadeOut(500);
        $("#concept_art_section").fadeOut(500);
        $("#models_section").fadeOut(500);
        $("#programming_section").delay(500).fadeIn(500);
        $("#resources_section").fadeOut(500);
    });
    
    $("#resources_button").click(function() {
        $("#mechanics_section").fadeOut(500);
        $("#concept_art_section").fadeOut(500);
        $("#models_section").fadeOut(500);
        $("#programming_section").fadeOut(500);
        $("#resources_section").delay(500).fadeIn(500);
    });

//Concept Art Sub-Directory

    $("#button_concept_art_finished_illustrations").click(function() {
        $("#concept_art_finished_illustrations").delay(500).fadeIn(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_protagonist").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").delay(500).fadeIn(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_companion").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").delay(500).fadeIn(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_base_enemies").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").delay(500).fadeIn(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_elite_enemies").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").delay(500).fadeIn(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_bosses").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").delay(500).fadeIn(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_environment").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").delay(500).fadeIn(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_objects").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").delay(500).fadeIn(500);
        $("#concept_art_level_design").fadeOut(500);
    });

    $("#button_concept_art_level_design").click(function() {
        $("#concept_art_finished_illustrations").fadeOut(500);
        $("#concept_art_protagonist").fadeOut(500);
        $("#concept_art_companion").fadeOut(500);
        $("#concept_art_base_enemies").fadeOut(500);
        $("#concept_art_elites").fadeOut(500);
        $("#concept_art_bosses").fadeOut(500);
        $("#concept_art_environment").fadeOut(500);
        $("#concept_art_objects").fadeOut(500);
        $("#concept_art_level_design").delay(500).fadeIn(500);
    });
    
    
});