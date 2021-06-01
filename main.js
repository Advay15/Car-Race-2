canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
race_track_image_array=["race-track-1.jpg","race-track-2.jpg","race-track31.jpg"];
random_number=Math.floor(Math.random()*5);
background_image=race_track_image_array[random_number];
car_image="lykan-hyper-sport.jpg";
car_x =10;
car_y =10;
car_width =100;
car_height =50;
car2_image ="bugatti-la-voiture-noire.jpg";
car2_x =10;
car2_y =100;
car2_width =100;
car2_height =50;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_imgTag=new Image();
    car_imgTag.onload=uploadCar;
    car_imgTag.src=car_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

 function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
}

window.addEventListener("keydown2",my_keydown2);
function my_keydown2(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="81"){
        left();
        console.log("left");
    }
    if(keyPressed=="87"){
        up();
        console.log("up");
    }
    if(keyPressed=="65"){
        right();
        console.log("right");
    }
    if(keyPressed=="83"){
        down();
        console.log("down");
    }
}
function up(){
    if(car_y>0){
        car_y=car_y-10;
        console.log("when up arrow is pressed x axis=" + car_x + ",y axis=" + car_y );
        uploadBackground();
        uploadCar();
    }
}
function down(){
    if(car_y<500){
        car_y=car_y+10;
        console.log("when down arrow is pressed x axis=" + car_x + ",y axis=" + car_y );
        uploadBackground();
        uploadCar();
    }
}
function left(){
    if(car_x>0){
        car_x=car_x-10;
        console.log("when left arrow is pressed x axis=" + car_x + ",y axis=" + car_y );
        uploadBackground();
        uploadCar();
    }
}
function right(){
    if(car_x<700){
        car_x=car_x+10;
        console.log("when right arrow is pressed x axis=" + car2_x + ",y axis=" + car2_y );
        uploadBackground();
        uploadCar();
    }
}
function up(){
    if(car_y>0){
        car2_y=car2_y-10;
        console.log("when w is pressed x axis=" + car2_x + ",y axis=" + car2_y );
        uploadBackground();
        uploadCar();
    }
}
    function down(){
        if(car2_y<500){
            car2_y=car2_y+10;
            console.log("when s is pressed x axis=" + car2_x + ",y axis=" + car2_y );
            uploadBackground();
            uploadCar2();
        }
    }
    function left(){
        if(car2_x>0){
        car2_x=car2_x-10;
        console.log("when q is pressed x axis=" + car2_x + ",y axis=" + car2_y );
            uploadBackground();
            uploadCar2();
        }
    }
    function right(){
    if(car2_x<700){
        car2_x=car2_x+10;
        console.log("when a is pressed x axis=" + car2_x + ",y axis=" + car2_y );
        uploadBackground();
        uploadCar2();
        
    }
    if(car_x>700){
        console.log("car_won");
        document.getElementById("").innerHTML ="car_won"
    }
    if(car2_x>700){
        console.log("car2_won");
        document.getElementById("").innerHTML ="car2_won"
    }
}