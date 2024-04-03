var local = 1;
// local == 0 server
// local == 1 local machine

// prod == 0 production
// prod == 1 test server
var userId = 0;
var uid = 0;
var u_token;
var beanPotValue = 0;
var beanPotValue1 = 0;
var beanPotValueTotal = 0;

var beanPotValuePrevious;
var fortunePOT;


$(document).ready(function () {
    // showModal('congoModal');

    // uid=502184261;
    //        pageInfo(local);

    if (local == 0) {
        try {
            // get user info
            // window.phone.getUserInfo(function (userInfo) {
                // console.log(userInfo.userId)
                // uid = userInfo.userId > 0 ? userInfo.userId : 0;
                // userId = userInfo.userId > 0 ? userInfo.userId : 0;
                // u_token = (userInfo.token != '') ? userInfo.token : null;
                
                pageInfo(local);


                // showToast(userId);
                // alert(userId + ' UID: ' + uid);
                // queryData();
            // });
        } catch (_error) {
            console.error("Can't get userInfo by window.phone.getUserInfo");
            // showToast("error ");

        }
    } else {
        // queryData();
        pageInfo(local)
    }

    // if (local == 0) {
    //     try {
    //         // Check if window.phone and window.phone.getUserInfo are defined
    //         if (window.phone && typeof window.phone.getUserInfo === 'function') {
    //             // Call getUserInfo with a callback function
    //             window.phone.getUserInfo(function(userInfo) {
    //                 // Check if userInfo is valid
    //                 if (userInfo && typeof userInfo === 'object') {
    //                     // Extract user information
    //                     uid = userInfo.userId > 0 ? userInfo.userId : 0;
    //                     userId = userInfo.userId > 0 ? userInfo.userId : 0;
    //                     u_token = userInfo.token ? userInfo.token : null;
    //                 }
    //                 // Call pageInfo function
    //                 pageInfo(local);
    //             });
    //         } else {
    //             // Handle the case when window.phone or getUserInfo is not available
    //             console.error("Can't get userInfo: window.phone or getUserInfo function is not available");
    //             // Show toast or handle the error in some way
    //         }
    //     } catch (error) {
    //         // Handle any exceptions that occur during execution
    //         console.error("Error while getting userInfo:", error);
    //         // Show toast or handle the error in some way
    //     }
    // } else {
    //     // Call pageInfo function with the local parameter
    //     pageInfo(local);
    // }
    

    $(".langs>div>button").each(function (index) {
        $(this).on("click", function () {
            $('#lngtxt').html('<span>' + $(this).text().trim() + '</span>');
            contentNext($(this).attr('data-id'));
            $('.langs').hide();
        });
    });

    $('#lngmainbtn').on("click", function () {
        if ($('.langs').is(":hidden")) {
            $('.langs').show();
        } else {
            $('.langs').hide();
        }
    });



    getUserPreviousDaily(local);


    getTalentOverallApi(local);

    getTalentCurrentApi(local);






    talentDailyCurrent(local);
    talentDailyPrevious(local);

});





function loadless() {
    document.getElementById('rewtable').style.maxHeight = '84vw';
    $('.loadbtn').attr("src", "./img/btns/loadmore.png");
    loadbtn = 0;
}
var loadbtn = 0;
function loadmore() {
    if (loadbtn == 0) {
        document.getElementById('rewtable').style.maxHeight = '100%';
        $('.loadbtn').attr("src", "./img/btns/lessBtn.png");
        loadbtn = 1;
    } else if (loadbtn == 1) {
        document.getElementById('rewtable').style.maxHeight = '84vw';
        $('.loadbtn').attr("src", "./img/btns/loadmore.png");
        loadbtn = 0;
    }

}

function switchbtn(btn, btnOn, tab, tabID) {
    // var btns = document.getElementsByClassName(btnsClass);
    // for (var i = 0; i < tabs.length; i++) {
    //     tabs[i].classList.remove(tabActiveClass);
    // }
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].classList.remove(activeClass);

    // }
    $('#hourlyBtn').attr('src', './img/btns/hourlyBtnOff.png');
    $('#dailyBtn').attr('src', './img/btns/dailyBtnOff.png');
    $('#overallBtn').attr('src', './img/btns/overallBtnOff.png');
    $('#' + btnOn).attr('src', './img/btns/' + btnOn + 'On.png');
    // $('#'+btnOff).attr('src', './img/btns/'+btnOff+'Off.png');
    //  var tabs = document.getElementsByClassName(tab);
    // for (var i = 0; i < tabs.length; i++){
    //      tabs[i].style.display = none;
    //  }
    if (tabID == 1) {
        $('#beanstab1').show(); // Shows
        $('#beanstab2').hide();
        $('#beanstab3').hide();

    } else if (tabID == 2) {
        $('#beanstab2').show(); // Shows
        $('#beanstab1').hide();
        $('#beanstab3').hide();

    } else if (tabID == 3) {
        $('#beanstab3').show(); // Shows
        $('#beanstab1').hide();
        $('#beanstab2').hide();

    }

}
function tabBtnsClick(btn, btnsClass, activeClass, tab, tabClass, tabActiveClass, extraBtn, extraBtn2) {
    var btns = document.getElementsByClassName(btnsClass);
    var tabs = document.getElementsByClassName(tabClass);

    console.log(tab)
    if (tab == "talentTab") {

        $('#topMainTab').show();
        $('#topmarq').hide();

        $('#talentmarq').show();

    }
    if (tab == "userTab") {
        $('#topMainTab').show();
        $('#topmarq').show();

        $('#talentmarq').hide();

    }
    // alert(tab);
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove(tabActiveClass);
    }
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove(activeClass);
    }
    document.getElementById(tab).classList.add(tabActiveClass);
    if (extraBtn) {
        try {
            document.getElementById(extraBtn).click();
        } catch (e) { }
    }
    if (extraBtn2) {
        try {
            document.getElementById(extraBtn2).click();
        } catch (e) { }
    }
    btn.classList.add(activeClass);
}

function activeGameBtns(btn, btnsClass, activeClass) {
    var btns = document.getElementsByClassName(btnsClass);
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove(activeClass);
    }
    btn.classList.add(activeClass);
}

function playGameNow(id) {
    console.log("thus" + $('#myGameChances').val())

    if (parseInt($('#myGameChances').val()) == 0) {
        $('#ops2TxtContent').html('Please spend 25k more beans to earn a chance. Start Playing to win beans and other accessories.');
        showModal('oppsModal2');

    }

    else if (parseInt($('#myGameChances').val()) == "") {
        $('#ops2TxtContent').html('Please enter some value other than 0');
        showModal('oppsModal2');

    }

    else if (parseInt($('#myGameChances').val()) == "" && parseInt(myChancesVal, 10) == 0) {

        $('#ops2TxtContent').html('Please spend 25k more beans to earn a chance. Start Playing to win beans and other accessories.');
        showModal('oppsModal2');


    }
    else if (parseInt($('#myGameChances').val()) == 0 && parseInt(myChancesVal, 10) == 0) {

        $('#ops2TxtContent').html('Please spend 25k more beans to earn a chance. Start Playing to win beans and other accessories.');
        showModal('oppsModal2');


    }

    else if (parseInt($('#myGameChances').val()) <= 0) {
        $('#ops2TxtContent').html('Please spend 25k more beans to earn a chance to flip the cards. Start Playing to win exciting rewards.');
        showModal('oppsModal2');

    } else {
        playGameNowApi($('#myGameChances').val(), id);
    }
}

function showModal(id) {
    document.getElementById(id).style.display = 'block';
    $('body').addClass('overlay');

}

function hideModal(id) {


    document.getElementById(id).style.display = 'none';
    $('body').removeClass('overlay');
    if (id == "rewardsModal") {
        document.getElementById('topCon').scrollIntoView();
        $(window).scrollTop($('#topCon').offset().top);

    }

    else if (id == "congoModal") {
        document.getElementById('topCon').scrollIntoView();
        $(window).scrollTop($('#topCon').offset().top);

    }
    else if (id == "rewardshisModal") {
        document.getElementById('myChances').scrollIntoView();
        $(window).scrollTop($('#myChances').offset().top);

    }

    $('#cbtn1').prop('disabled', false);
    $('#cbtn2').prop('disabled', false);

}

function hideModal2(id) {
    document.getElementById(id).style.display = 'none';
    $('body').removeClass('overlay');
    if (id == "rewardsModal") {
        document.getElementById('topCon').scrollIntoView();
        $(window).scrollTop($('#topCon').offset().top);


    }
    else if (id == "congoModal") {
        document.getElementById('topCon').scrollIntoView();
        $(window).scrollTop($('#topCon').offset().top);

    }
    $('#cbtn1').prop('disabled', false);
    $('#cbtn2').prop('disabled', false);
}

var timer = null;
//moveSlide('nxt', 'slide2', 3)
function moveSlide(action, slideClass, totalSlides, dotsClass) {



    clearTimeout(timer);
    $("." + slideClass).each(function (index, element) {
        if (action === 'nxt') {

            if ($(element).hasClass('active')) {
                if ((index + 1) < totalSlides) {
                    $("." + slideClass).removeClass('active');
                    $($("." + slideClass).get((index + 1))).addClass('active');
                    $('.' + dotsClass).removeClass('active');
                    document.getElementsByClassName(dotsClass)[index + 1].classList.add('active');
                } else {
                    $("." + slideClass).removeClass('active');
                    $($("." + slideClass).get((0))).addClass('active');
                    $('.' + dotsClass).removeClass('active');
                    document.getElementsByClassName(dotsClass)[0].classList.add('active');
                }
                return false;
            }
        } else if (action === 'pre') {
            if ($(element).hasClass('active')) {
                if ((index - 1) >= 0) {
                    $("." + slideClass).removeClass('active');
                    $($("." + slideClass).get((index - 1))).addClass('active');
                    $('.' + dotsClass).removeClass('active');
                    document.getElementsByClassName(dotsClass)[index - 1].classList.add('active');
                } else {
                    $("." + slideClass).removeClass('active');
                    $($("." + slideClass).get((totalSlides - 1))).addClass('active');
                    $('.' + dotsClass).removeClass('active');
                    document.getElementsByClassName(dotsClass)[totalSlides - 1].classList.add('active');
                }
                return false;
            }
        }
    });



}

setInterval(function () { moveSlide('nxt', 'firstSlide2', 5, 'dots3'); }, 3000);

setInterval(function () { moveSlide('nxt', 'thirdSlide1', 3, 'dots1'); }, 3000);

setInterval(function () { moveSlide('nxt', 'firstSlide3', 5, 'dots5'); }, 3000);

setInterval(function () { moveSlide('nxt', 'firstSlide1', 5, 'dots4'); }, 3000);

setInterval(function () { moveSlide('nxt', 'firstSlide4', 3, 'dots2'); }, 3000);


function scrollUp() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}




function stringlength(id, maxlength) {

    var user_ent = parseInt($('#myGameChances').val());
    var maxlength = parseInt($('#myChances').text());




    if (user_ent <= 99) {
        if (user_ent > maxlength) {
            $('#myGameChances').val(maxlength);
        } else {
            //alert("elseee case")
            //$('#'+id).val(999);
            // Swal.fire({
            //        html: 'Please Enter value less than equal to 999',
            //        showConfirmButton: false,
            //        showCloseButton: true
            //      });
        }
    } else if (user_ent >= 99 && maxlength >= user_ent) {
        $('#myGameChances').val(99);

    }

    else if (user_ent < 1) {
        //alert('midd')

        $('#myGameChances').val();

    }


    else {
        // alert("stopp case")
        $('#myGameChances').val(0);

        // document.getElementById(id).value = 0;
    }

}



function stringlengthUser() {
    let user_ent = parseInt($('#myGameChances').val());
    let maxlength = parseInt($('#myChances').text());

    if (user_ent <= 99) {
        if (user_ent > maxlength) {
            $('#myGameChances').val(maxlength);
        }
        else {

        }
    }
    else if (user_ent >= 99 && maxlength >= user_ent) {
        $('#myGameChances').val(99);

    }
    else {
        // alert("stopp case")
        $('#myGameChances').val("");

        //document.getElementById(id).value='';
    }


}


function play_audio(task) {
    if (task == 'play') {
        $(".my_audio").trigger('play');
    }
    if (task == 'stop') {
        $(".my_audio").trigger('pause');
        $(".my_audio").prop("currentTime", 0);
    }
}