 var menu_box = document.querySelector('#menu_box');
 var menu_btn = document.querySelector('.bx-menu');

 menu_box.style.top = "-1000px";

 menu_btn.onclick = function () {
    if (menu_box.style.top == "-1000px")
    {
        menu_box.style.top = "0";
    } else {
        menu_box.style.top = "-1000px";
    }
 };

//  --------------------------------------------------

let  scroll_slide = document.querySelector('.slides_div');
let  left_arrow = document.querySelector('#leftarrow');
let  right_arrow = document.querySelector('#rightarrow');


left_arrow.onclick = function () {

    scroll_slide.scrollLeft += -711; 
    
}

right_arrow.onclick = function () {

    scroll_slide.scrollLeft += 711;
}


let trendybtn = document.querySelector('#trendy_div > a');
let latestbtn = document.querySelector('#latest_div > a');

let trendy_content = document.querySelector('.trendy_content');
let latest_content = document.querySelector('.latest_content');

latestbtn.onclick = () => {
    trendybtn.classList.remove('active');
    latestbtn.classList.add('active');

    trendy_content.style.display = "none";
    latest_content.style.display = "block";
};

trendybtn.onclick = () => {
    trendybtn.classList.add('active');
    latestbtn.classList.remove('active');

    trendy_content.style.display = "block";
    latest_content.style.display = "none";
};
// ------------------------trendy-----------------------
let ts1 = document.querySelector('#ts1');
let ts2 = document.querySelector('#ts2');
let ts3 = document.querySelector('#ts3');
// ------------------------latest-----------------------
let ls1 = document.querySelector('#ls1');
let ls2 = document.querySelector('#ls2');
let ls3 = document.querySelector('#ls3');
// ------------------------trendy-----------------------
let ts1a = document.querySelector('#ts1a');
let ts2a = document.querySelector('#ts2a');
let ts3a = document.querySelector('#ts3a');
// ------------------------latest-----------------------
let ls1a = document.querySelector('#ls1a');
let ls2a = document.querySelector('#ls2a');
let ls3a = document.querySelector('#ls3a');
// ------------------------trendy-----------------------
let ts1_opacity = document.querySelector('#ts_lower_div1');

let ts2_opacity = document.querySelector('#ts_lower_div2');

let ts3_opacity = document.querySelector('#ts_lower_div3');
// ------------------------latest-----------------------
let ls1_opacity = document.querySelector('#ls_lower_div1');

let ls2_opacity = document.querySelector('#ls_lower_div2');

let ls3_opacity = document.querySelector('#ls_lower_div3');
// ------------------------trendy-----------------------
let ts1a_opacity = document.querySelector('#ts_lower_div1a');

let ts2a_opacity = document.querySelector('#ts_lower_div2a');

let ts3a_opacity = document.querySelector('#ts_lower_div3a');
// ------------------------latest-----------------------
let ls1a_opacity = document.querySelector('#ls_lower_div1a');

let ls2a_opacity = document.querySelector('#ls_lower_div2a');

let ls3a_opacity = document.querySelector('#ls_lower_div3a');
// ------------------------trendy-----------------------
ts1.onmouseover = () => {
    ts1.classList.add('width');
    ts2.classList.remove('width');
    ts3.classList.remove('width');

    ts1_opacity.style.opacity = 1;
    ts2_opacity.style.opacity = 0;
    ts3_opacity.style.opacity = 0;


};
// ------------------------latest-----------------------
ls1.onmouseover = () => {
    ls1.classList.add('width');
    ls2.classList.remove('width');
    ls3.classList.remove('width');

    ls1_opacity.style.opacity = 1;
    ls2_opacity.style.opacity = 0;
    ls3_opacity.style.opacity = 0;


};
// -----------------------trendy------------------------
ts1a.onmouseover = () => {
    ts1a.classList.add('width');
    ts2a.classList.remove('width');
    ts3a.classList.remove('width');

    ts1a_opacity.style.opacity = 1;
    ts2a_opacity.style.opacity = 0;
    ts3a_opacity.style.opacity = 0;


};
// -----------------------latest------------------------
ls1a.onmouseover = () => {
    ls1a.classList.add('width');
    ls2a.classList.remove('width');
    ls3a.classList.remove('width');

    ls1a_opacity.style.opacity = 1;
    ls2a_opacity.style.opacity = 0;
    ls3a_opacity.style.opacity = 0;


};
// -----------------------trendy------------------------
ts2.onmouseover = () => {
    ts1.classList.remove('width');
    ts2.classList.add('width');
    ts3.classList.remove('width');
    
    ts1_opacity.style.opacity = 0;
    ts2_opacity.style.opacity = 1;
    ts3_opacity.style.opacity = 0;

};
// -----------------------latest------------------------
ls2.onmouseover = () => {
    ls1.classList.remove('width');
    ls2.classList.add('width');
    ls3.classList.remove('width');
    
    ls1_opacity.style.opacity = 0;
    ls2_opacity.style.opacity = 1;
    ls3_opacity.style.opacity = 0;

};
// ----------------------trendy------------------------
ts2a.onmouseover = () => {
    ts1a.classList.remove('width');
    ts2a.classList.add('width');
    ts3a.classList.remove('width');
    
    ts1a_opacity.style.opacity = 0;
    ts2a_opacity.style.opacity = 1;
    ts3a_opacity.style.opacity = 0;

};
// ----------------------latest------------------------
ls2a.onmouseover = () => {
    ls1a.classList.remove('width');
    ls2a.classList.add('width');
    ls3a.classList.remove('width');
    
    ls1a_opacity.style.opacity = 0;
    ls2a_opacity.style.opacity = 1;
    ls3a_opacity.style.opacity = 0;

};
// ----------------------trendy-----------------------
ts3.onmouseover = () => {
    ts1.classList.remove('width');
    ts2.classList.remove('width');
    ts3.classList.add('width');

    ts1_opacity.style.opacity = 0;
    ts2_opacity.style.opacity = 0;
    ts3_opacity.style.opacity = 1;


};
// ----------------------latest-----------------------
ls3.onmouseover = () => {
    ls1.classList.remove('width');
    ls2.classList.remove('width');
    ls3.classList.add('width');

    ls1_opacity.style.opacity = 0;
    ls2_opacity.style.opacity = 0;
    ls3_opacity.style.opacity = 1;


};
// ----------------------trendy-----------------------
ts3a.onmouseover = () => {
    ts1a.classList.remove('width');
    ts2a.classList.remove('width');
    ts3a.classList.add('width');

    ts1a_opacity.style.opacity = 0;
    ts2a_opacity.style.opacity = 0;
    ts3a_opacity.style.opacity = 1;


};
// ----------------------latest-----------------------
ls3a.onmouseover = () => {
    ls1a.classList.remove('width');
    ls2a.classList.remove('width');
    ls3a.classList.add('width');

    ls1a_opacity.style.opacity = 0;
    ls2a_opacity.style.opacity = 0;
    ls3a_opacity.style.opacity = 1;


};


