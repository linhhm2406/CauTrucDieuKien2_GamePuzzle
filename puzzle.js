let url_position1 = ['anh1/funny-cat1_part1x1.jpg', 'anh1/monkey_part1x1.jpg', 'anh1/panda_swap_part1x1.jpg'];
let url_position2 = ['anh2/funny-cat1_part2x1.jpg', 'anh2/monkey_part2x1.jpg', 'anh2/panda_swap_part2x1.jpg'];
let url_position3 = ['anh3/funny-cat1_part3x1.jpg', 'anh3/monkey_part3x1.jpg', 'anh3/panda_swap_part3x1.jpg'];
let url_position4 = ['anh4/funny-cat1_part4x1.jpg', 'anh4/monkey_part4x1.jpg', 'anh4/panda_swap_part4x1.jpg'];
let url_position5 = ['anh5/funny-cat1_part5x1.jpg', 'anh5/monkey_part5x1.jpg', 'anh5/panda_swap_part5x1.jpg'];

let arr1_img_possition = 1;
let arr4_img_possition = 0;
let arr2_img_possition = 0;
let arr3_img_possition = 0;
let arr5_img_possition = 0;

function click_img1() {
    let url_img1 = document.getElementById("id_img1");
    arr1_img_possition= Math.floor(Math.floor(3)*Math.random());
    url_img1.src =url_position1[arr1_img_possition];
    checkimage();
}
function click_img2() {
    let url_img2 = document.getElementById("id_img2");
    arr2_img_possition= Math.floor(Math.floor(3)*Math.random());
    url_img2.src =url_position2[arr2_img_possition];
    checkimage();
}
function click_img3() {
    let url_img3 = document.getElementById("id_img3");
    arr3_img_possition= Math.floor(Math.floor(3)*Math.random());
    url_img3.src =url_position3[arr3_img_possition];
    console.log(arr3_img_possition);
    checkimage();
}
function click_img4() {
    let url_img4 = document.getElementById("id_img4");
    arr4_img_possition= Math.floor(Math.floor(3)*Math.random());
    url_img4.src =url_position4[arr4_img_possition];
    console.log(arr4_img_possition);
    checkimage();
}
function click_img5() {
    let url_img5 = document.getElementById("id_img5");
    arr5_img_possition= Math.floor(Math.floor(3)*Math.random());
    url_img5.src =url_position5[arr5_img_possition];
    console.log(arr5_img_possition);
    checkimage();
}
function checkimage() {
    if (arr1_img_possition===arr2_img_possition
        && arr1_img_possition===arr3_img_possition
        && arr1_img_possition===arr4_img_possition
        && arr1_img_possition===arr5_img_possition){
        alert('Congraturation! You made the matching image');
    }
}