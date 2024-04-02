var prod = 0;
// prod == 1 livve server 
// prod == 2 test server 
var host = (prod == 0) ? 'https://www.streamkarlive.live' : 'http://test.streamkar.tv';
var infoData = { "errorCode": 0, "msg": "success", "data": { "userDrawPoint": 1, "userTodayPkPoint": 123, "hourlyPotValue": 123, "dailyPotValue": 123, "userTeam": 1, "teamDayInfo": [{ "teamIndex": 1, "point": 11000 }, { "teamIndex": 2, "point": 22000 }] } };
var userDrawData = { "errorCode": 0, "msg": "success", "data": { "firstShowLevel": 8, "showList": [{ "rewardLevel": 3, "count": 6000, "rewardDesc": "Beans x %s" }] } };
var rankingData = [{ "userId": 555000045, "userScore": 2, "nickName": "test045", "gender": 1, "userLevel": 17, "actorLevel": 28, "liveType": 0, "portrait": "", "isFollowed": 1 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }, { "userId": 555000004, "userScore": 940858, "nickName": "test04图录取我哦我一句剧透我一句路", "gender": 0, "userLevel": 13, "actorLevel": 23, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128", "isFollowed": 0 }];

var infoApi = host + "/api/activity/recordV1/getUserEventInfo";
var gameApi = host + "/api/activity/pin/drawGame";

var userOverallApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=1&rankType=1&pageIndex=1&pageCount=20&eventDesc=20230501_winner";

var talentOverallApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=2&rankType=1&pageIndex=1&pageCount=20&eventDesc=20230501_winner";





var userCurrentApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=1&rankType=3&isBefore=false&pageIndex=1&pageCount=20&eventDesc=20230501_winner";
var userPreviousApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=1&rankType=3&isBefore=true&pageIndex=1&pageCount=20&eventDesc=20230501_winner";


var talentCurrentApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=2&rankType=3&isBefore=false&pageIndex=1&pageCount=20&eventDesc=20230501_winner";
var talentPreviousApi = host + "/api/activity/eventShow/getModulePushRankV4?rankIndex=2&rankType=3&isBefore=true&pageIndex=1&pageCount=20&eventDesc=20230501_winner";



//User daily
var userDailyCurrent = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=1&rankType=4&isBefore=false&pageIndex=1&pageCount=20&eventDesc=20230501_winner";
var userPreviousDailyApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=1&rankType=4&isBefore=true&pageIndex=1&pageCount=20&eventDesc=20230501_winner";

//Talent Daily

var talentDailyCurrentApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=2&rankType=4&isBefore=false&pageIndex=1&pageCount=20&eventDesc=20230501_winner";
var taleNTdailyprEvious = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=2&rankType=4&isBefore=true&pageIndex=1&pageCount=20&eventDesc=20230501_winner";


var winnerApi = host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=7&rankType=2&pageIndex=1&pageCount=20&eventDesc=20230501_winner";

var pkWinnerApi=host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=8&rankType=2&pageIndex=1&pageCount=20&eventDesc=20230501_winner";


var winnerRankApi=  host + "/api/activity/eventShow/getModulePushRankV3?rankIndex=3&rankType=2&pageIndex=1&pageCount=20&eventDesc=20230501_winner";

var rewardsRecordurl = host + '/api/activity/pin/getUserRewardHis?userId='; 
var userlevel = '../common/img/ulv/';
var actorlvel = '../common/img/tlv/';
var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
var gamegifTime = 1500;

function pageInfo(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: infoApi + '?userId=' + uid,
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                // $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                // $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                // $('#responseArrayPage').html(JSON.stringify(data) + ' Tokken: ' + u_token + ' userId: ' + uid);
                if(data.errorCode==0){
                      pageInfoPopulate(data);

                }
                else{
                    $('#ops2TxtContent').html(data.msg);
                          
                         
                            showModal('oppsModal2');
                            

                }
              

            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        pageInfoPopulate(infoData);
    }
}

function pageInfoPopulate(data) {
    

    
    beanPotValue=data.data.nowPotInfos[0].value;  //hourly
    beanPotValue1=data.data.nowPotInfos[1].value; //daily
    beanPotValueTotal=data.data.nowPotInfos[2].value; //overall
      beanPotValuePrevious=data.data.nowPotInfos[1].value;  //previous 
console.log(beanPotValue)
    $('#beanPotVal1').html('<span>' + data.data.nowPotInfos[0].value + '</span>');
    $('#beanPotVal2').html('<span>' + data.data.nowPotInfos[1].value + '</span>');
      $('#beanPotVal3').html('<span>' + data.data.nowPotInfos[2].value + '</span>');
         $('#beanPotValPre').html('<span>' + data.data.previousPotInfos[0].value + '</span>');
            $('#heroPot').html('<span>' + data.data.nowPotInfos[3].value + '</span>');

        getUserPreviousApi(local);
      if(data.data.topUserInfo.userId!=0){
         $('#topUserInfo').show();
    $('#topUserInfo').html(`
 <button onclick="openProfile(${data.data.topUserInfo.userId})"><img src="${data.data.topUserInfo.avatar}" class="heroprofimg" onerror="imgError(this)"><img src="img/backgrounds/heroframe.png" class="heroframe"></button>
                    <div><div class="txtsdots textLeft">${data.data.topUserInfo.nickName}</div><div class="textLeft"><img src="../common/img/ulv/${data.data.topUserInfo.userLevel}.png" class="wvw11"></div>
        <span> <span id="score" class="sValue"><img src="img/coin.png" class="wvw5 vmiddle">${data.data.topUserInfo.score}</span></span> </div>`)

}
     window.setTimeout(() => {
                      getUserCurrentApi(local);
      UserCurrentDailyData(local);
       getUserOverallApi(local);
         getTalentPreviousApi(local);
   
                 
                }, 1000);

    
  
  
   
   

   
   
}
function getUserOverallApi(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: userOverallApi,
            cache: false,
            success: function(data) {
                console.log("Ajax success.");
                userOverallPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        userOverallPopulate(rankingData);
    }
}

function userOverallPopulate(data) {

    $.each(data, function(key, value) {
        $('#userOverallRows').append(createRankingRow(value, key, 'moreRows1', 'userOverall'));
    });
    if (data.length <= 0) {
        $('#userOverallRows').html('No Data!');
    }
    if (data.length > 10) {
        $('#more1').show();
    }
}

function getUserCurrentApi(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: userCurrentApi,
            cache: false,
            success: function(data) {
                userCurrentPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        userCurrentPopulate(rankingData);
    }
}

function userCurrentPopulate(data) {
     $('#userCurrentRows').html('');
     $('#more2').hide();
    //  alert(JSON.stringify(data))

    $.each(data, function(key, value) {
       // $('#userCurrentRows').append(createRankingRow(value, key, 'moreRows2'));
         $('#userCurrentRows').append(createRankingRow(value, key, 'moreRows2','userdaily1'));
       
    });
    if (data.length <= 0) {
        $('#userCurrentRows').html('No Data!');
    }
    if (data.length > 10) {
        $('#more2').show();
    }
}

function getUserPreviousApi(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: userPreviousApi,
            cache: false,
            success: function(data) {
                userPreviousPopulate(data);
                previousHourWinnerPopulate(data)
               
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        userPreviousPopulate(rankingData);
    }
}
function topFiveUser(data){
       $('#top5Div').html('');
    if(data.length>0){
        $('#top5Div').addClass('top5div');
    }

  for(i=0;i<(data.length>5?5:data.length);i++){
    console.log("dd"+data[i].isFollow)
    $('#top5Div').append(`
 <div>
 <button onclick="getfollowapi(${local},${data[i].userId},'${data[i].nickName}')" class="w-40 followbtn  `+(data[i].isFollow==1? 'greyScale' : '')+` "  `+(data[i].isFollow==1 ? 'disabled':'')+` `+(data[i].userId==uid? 'disabled':'')+` >
`+(data[i].isFollow==0? '<img src="img/btns/addBtn.png" class=" w100" />':'<img src="img/btns/ficon.png" class="w100" />')+`</button>

            <button onclick="openProfile(${data[i].userId})"><img src="${data[i].portrait}" class="top5img" onerror="imgError(this)"><img src="img/backgrounds/top5.png" class="top5frame"></button>
                    
            <div class="top5name">
                <p class="txtsdots">${data[i].nickName}</p>
            </div>

        </div>
        `)
  }

}

function userPreviousPopulate(data) {

    $.each(data, function(key, value) {
           $('#userPreviousRows').append(createRankingRow(value, key, 'moreRows3','user'));

       // $('#userPreviousRows').append(createRankingRow(value, key, 'moreRows3','overall'));
    });
    if (data.length <= 0) {
        $('#userPreviousRows').html('No Data!');
    }
    if (data.length > 10) {
        $('#more3').show();
    }
}

function UserCurrentDailyData(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: userDailyCurrent,
            cache: false,
            success: function(data) {
                currentuserPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        currentuserPopulate(rankingData);
    }
}

function currentuserPopulate(data) {
 $('#dailyCurRow').html('');
    $.each(data, function(key, value) {
       // $('#dailyCurRow').append(createRankingRow2(value, key));
                $('#dailyCurRow').append(createRankingRow(value, key, 'moreRows12','userdaily'));

    });
    if (data.length <= 0) {
        $('#dailyCurRow').html('No Data!');
    }
    if (data.length > 10) {
        $('#more12').show();
    }
}





function getUserPreviousDaily(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: userPreviousDailyApi,
            cache: false,
            success: function(data) {
                userPreviousPopulateDaily(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        userPreviousPopulateDaily(rankingData);
    }
}

function userPreviousPopulateDaily(data) {


    $.each(data, function(key, value) {
          $('#dailyPrevRow').append(createRankingRow(value, key, 'moreRows13','user'));
       /// $('#dailyPrevRow').append(createRankingRow3(value, key));
    });
    if (data.length <= 0) {
        $('#dailyPrevRow').html('No Data!');
    }

    if (data.length > 10) {
        $('#more13').show();
    }
}
///
function talentDailyCurrent(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: talentDailyCurrentApi,
            cache: false,
            success: function(data) {
                talentDailyCurrentPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        talentDailyCurrentPopulate(rankingData);
    }
}

function talentDailyCurrentPopulate(data) {
  $('#talentCurrentRowsDaily').html('');
    $.each(data, function(key, value) {
        $('#talentCurrentRowsDaily').append(createRankingRow(value, key, 'moreRows15','talent'));
    });
    if (data.length <= 0) {
        $('#talentCurrentRowsDaily').html('No Data!');
    }
    if (data.length > 10) {
        $('#more15').show();
    }
}

function talentDailyPrevious(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: taleNTdailyprEvious,
            cache: false,
            success: function(data) {
                talentPrevDailyPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        talentPrevDailyPopulate(rankingData);
    }
}

function talentPrevDailyPopulate(data) {

    $.each(data, function(key, value) {
      $('#talentPreviousRowsPrevious').append(createRankingRow(value, key, 'moreRows16','talent'));
    });
    if (data.length <= 0) {
        $('#talentPreviousRowsPrevious').html('No Data!');
    }
    if (data.length > 10) {
        $('#more16').show();
    }
    
}

function getTalentOverallApi(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: talentOverallApi,
            cache: false,
            success: function(data) {
                talentOverallPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        talentOverallPopulate(rankingData);
    }
}

function talentOverallPopulate(data) {

    $.each(data, function(key, value) {
        $('#talentOverallRows').append(createRankingRow(value, key, 'moreRows4', 'talent'));
    });
    if (data.length <= 0) {
        $('#talentOverallRows').html('No Data!');
    }
    if (data.length > 10) {
        $('#more4').show();
    }
}

function getTalentCurrentApi(local) {
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: talentCurrentApi,
            cache: false,
            success: function(data) {
                talentCurrentPopulate(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        talentCurrentPopulate(rankingData);
    }
}

function talentCurrentPopulate(data) {

    $.each(data, function(key, value) {
        $('#talentCurrentRows').append(createRankingRow(value, key, 'moreRows5','talent'));
    });
    if (data.length <= 0) {
        $('#talentCurrentRows').html('No Data!');
    }
    if (data.length > 10) {
        $('#more5').show();
    }
}

function getTalentPreviousApi(local) {
    console.log(talentPreviousApi+'&userId='+uid)
    if (local == 0) {
        $.ajax({
            type: "GET",
            async: true,
            url: talentPreviousApi+'&userId='+uid,
            cache: false,
            success: function(data) {
                talentPreviousPopulate(data);
                 topFiveUser(data);
            },
            failure: function() {
                console.log("Ajax Failure.");
            },
        });
    } else {
        talentPreviousPopulate(rankingData);
    }
}

function talentPreviousPopulate(data) {
    var topHtml = '';
    $.each(data, function(key, value) {
        if (key <= 1) {
            $('#talentmarq').append(createMarquee2(value, key));
            if (key == 0) {
                topHtml += '<div class="colThree w90 headProfileCon">';
            }
            topHtml += createTopTwoRecords(value, key);
            if (key == 0) {
                topHtml += '<div></div>';
            }
            if (data.length == 1) {
                topHtml += '<div></div>';
                topHtml += '</div>';
                $('#topTwoRecords').html(topHtml);
            }
            if (key == 1) {
                topHtml += '</div>';
                $('#topTwoRecords').html(topHtml);
            }
        }
        $('#talentPreviousRows').append(createRankingRow(value, key, 'moreRows6','talent'));
    });
    if (data.length <= 0) {
        $('#talentPreviousRows').html('No Data!');
        $('.container').css("margin-top", "-10vw");
    }
    if (data.length > 10) {
        $('#more6').show();
    }
}


function previousHourWinnerPopulate(data) {

    $.each(data, function(key, value) {
        if(key<5){
        $('#topmarq').append(createMarquee(value, key));
    }
    });
}

function createMarquee(data, index) {
   var top2;
   var prevPot;
    if (index==0) {

        top2 = '1st';
    }else if (index == 1) {
        top2= '2nd'
    }
    else if (index == 2) {
        top2= '3rd'
    }
    else if (index == 3) {
        top2= '4th'
    }
    else if (index == 4) {
        top2= '5th'
    }
     if(index==0){
            prevPot=beanPotValuePrevious*40/100;

        }
       else if(index==1){
            prevPot=beanPotValuePrevious*30/100;
            
        }
        else if(index==2){
                prevPot=beanPotValuePrevious*15/100;
            
        }
        else if(index==3){
                prevPot=beanPotValuePrevious*10/100;
            
        }
        else if(index==4){
                prevPot=beanPotValuePrevious*5/100;
            
        }
    var html = '<div class="tickerTapeMain  marauto" style="padding-right:2vw !important">';
    html += '<div class="colTwo tickerCol  marauto">';
    html += '<div>';
    html += '<div>';
    html += '<a href="' + kk_tv_url + data.userId + '" target="_blank">';
    html += '<img src="' + data.portrait + '" class="tickerUserImg" onerror="imgError(this)"/>';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html += '<div style="display: flex;">';
    html += '<div class="txtsdots wvw18">';
    html += '';
    html += '</div>';
    html += '<div style="white-space: normal;">';
    html +=  data.nickName +'<span> has  won '+prevPot+ ' <img src="../rewards/beanbag.png" class="w5 vmiddle">  in the previous hour.</span><span> Congratulations</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

function createMarquee2(data, index) {
    var top2;
    if (index==0) {

        top2 = '1st';
    }else if (index == 1) {
        top2= '2nd'
    }
    var html = '<div class="tickerTapeMain  marauto" style="padding-right:2vw !important">';
    html += '<div class="colTwo tickerCol  marauto">';
    html += '<div>';
    html += '<div>';
    html += '<a href="' + kk_tv_url + data.userId + '" target="_blank">';
    html += '<img src="' + data.portrait + '" class="tickerUserImg" onerror="imgError(this)"/>';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html += '<div style="display: flex;">';
    html += '<div class="txtsdots wvw18">';
    html += '';
    html += '</div>';
    html += '<div style="white-space: normal;">';
    html +=  data.nickName +'<span> has ranked '+top2+' on the hourly leaderboard.</span><span> Congratulations</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}



function createMarquee3(data, index) {
    var html = '<div class="tickerTapeMain w90 marauto">';
    html += '<div class="colTwo tickerCol w90 marauto">';
    html += '<div>';
    html += '<div>';
   // html += '<a href="' + kk_tv_url + data.userId + '" target="_blank">';
      html += '<button onclick="openProfile('  + data.userId + ')" >';
    html += '<img src="' + data.portrait + '" class="tickerUserImg" onerror="imgError(this)"/>';
    html += '</button>';
    html += '</div>';
    html += '</div>';
    html += '<div style="display: flex;">';
    html += '<div class="txtsdots wvw18">';
    html += '';
    html += '</div>';
    html += '<div style="white-space: normal;">';
    html += '<span> <span>' + data.nickName + '</span> has won a PK match and scored ' + data.userScore + ' combat points for their team.</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}


function createTopTwoRecords(data, index) {
    var html = '<div>';
    //html += '<a href="' + kk_tv_url + data.userId + '" target="_blank">';
      html += '<button onclick="openProfile('  + data.userId + ')" >';
    html += '<div class="headProfileFrame">';
    html += '<img src="img/backgrounds/headProfileFrame.png" />';
    html += '<img src="' + data.portrait + '" onerror="imgError(this)"/>';
    html += '</div>';
    html += '</button>';
    html += '<div class="headProfileTxt">';
    html += '<div class="w90 txtsdots  textcentre">' + data.nickName + '</div>';
  //  html += '<div class="textcentre"><img src="' + (userlevel + data.userLevel) + '.png" class="w25"/></div>';
    html += '</div>';
    html += '</div>';
    return html;
}

function createRankingRow(data, index, cla, isfor) {
    var beanPotuserVal=0;
    var beanPotuserVal1=0;
    var beanPotuserValOverall=0;
  
    // var html = '<div class="' + (index == 0 ? "rankRow1 w80" : "rankRow2 w100") + '  textnormal marb1 ' + (index > 9 ? cla : "") + '">';
    var html = '<div class="' + (index < 1 ? "rankRow1 w80" : "rankRow2 w95") + '  textnormal marb1 ' + (index > 9 ? cla : "") + '">';
    if (index == 0) {
       html +=  '<div class="toprankimg">';
    html += '<button onclick="openProfile('  + data.userId + ')" >' ;
    html += '<img src="' + data.portrait + '" class="rankuserImg" onerror="imgError(this)"/>';
    html += '<img src="img/backgrounds/frame' + (index + 1) + '.png" class="rankFrame"></button></div>';
      
    }
   html += '<div class="' + (index < 1 ? "colThree pb2" :(index <= 2 ? "colFour rankRowCol1" : "colFive rankRowCol2")) + '">';
    if (index > 2) {
        html += '<div><div class="rankcounter">' + (index + 1) + '</div></div>';
    }
    html += (index > 0 ? '<div>': '');
    // html += '<div>';
    if(index > 2){
        html += '<div class="rankUserImgCon1 ml1" >';
    }else {
    html += (index > 0 ? '<div class="rankUserImgCon1 ml2">': '');
        // html += '<div class="rankUserImgCon1">';
    }
    
    // html += '<button onclick="openProfile('  + data.userId + ')" >';
    html += (index== 0 ? '' :'<button onclick="openProfile('  + data.userId + ')" >' );
    html += (index > 0 ? '<img src="' + data.portrait + '" class="rankuserImg1" onerror="imgError(this)"/>' :'');
    if (index <= 2 && index >0) {
        html += '<img src="img/backgrounds/frame' + (index + 1) + '.png" class="rankFrame1">';
    }
    html += (index > 0 ? '</button>': '');
    html += (index > 0 ? '</div>': '');
    html += (index > 0 ? '</div>': '');
    // html += '</div>';
    // html += '</div>';
    html += '<div>';
    html += '<div class="txtsdots textLeft">' + data.nickName + '</div>';
    html += '<div class="textLeft"><img src="' + (userlevel + data.userLevel) + '.png" class="'+(index == 0 ? 'wvw15': 'wvw7')+'"/></div>';
    html += '</div>';

    html += (index > 0 ? '<div>' : '');
    if(index<5){
   if(isfor == 'userdaily1'){
    console.log("beanPotValue"+beanPotValue)
        if(index==0){
            beanPotuserVal=beanPotValue*40/100;

        }
       else if(index==1){
            beanPotuserVal=beanPotValue*30/100;
            
        }
        else if(index==2){
                beanPotuserVal=beanPotValue*15/100;
            
        }
        else if(index==3){
                beanPotuserVal=beanPotValue*10/100;
            
        }
        else if(index==4){
                beanPotuserVal=beanPotValue*5/100;
            
        }
    }
     else if(isfor == 'userOverall'){

        if(index==0){
            beanPotuserValOverall=beanPotValueTotal*40/100;

        }
       else if(index==1){
            beanPotuserValOverall=beanPotValueTotal*30/100;
            
        }
        else if(index==2){
                beanPotuserValOverall=beanPotValueTotal*15/100;
            
        }
        else if(index==3){
                beanPotuserValOverall=beanPotValueTotal*10/100;
            
        }
        else if(index==4){
                beanPotuserValOverall=beanPotValueTotal*5/100;
            
        }
    }
       else if(isfor == 'userdaily'){


        if(index==0){
            beanPotuserVal1=beanPotValue1*40/100;

        }
       else if(index==1){
            beanPotuserVal1=beanPotValue1*30/100;
            
        }
        else if(index==2){
                beanPotuserVal1=beanPotValue1*15/100;
            
        }
        else if(index==3){
                beanPotuserVal1=beanPotValue1*10/100;
            
        }
          else if(index==4){
                beanPotuserVal1=beanPotValue1*5/100;
            
        }
    }
      
    if (isfor == 'userdaily1' && index >=0) {
        // console.log(beanPotuserVal)
        html += '<div  class="textcentre">';
        html += 'Est rew<br><img src="img/coin.png" class="wvw5 vmiddle">'+Math.floor(beanPotuserVal);
        html += '</div>';
    }else if (isfor == 'userdaily' && index >=0) {
        html += '<div  class="textcentre">';
        html += 'Est rew<br><img src="img/coin.png" class="wvw5 vmiddle">'+Math.floor(beanPotuserVal1);
        html += '</div>';
    }
    else if (isfor == 'userOverall' && index >=0) {
        html += '<div  class="textcentre">';
        html += 'Est rew<br><img src="img/coin.png" class="wvw5 vmiddle">'+Math.floor(beanPotuserValOverall);
        html += '</div>';
    }
    else{
        html += '<div></div>'
    }

    
    console.log("beanPotVal"+  beanPotValue);
}
    html += (index > 0 ? '</div>' : '');
    html += '<div>';
    if (isfor == 'user') {
        html += '<div ><img src="img/coin.png" class="wvw5 vmiddle">' + data.userScore + '</div>';
        html += '<div></div>';
    } else if(isfor=="talent") {
       html += '<div ><img src="img/gemIcon.png" class="wvw5 vmiddle">' + data.userScore + '</div>';
        //html += '<div>Rewards</div>';
    }

     else {
       html += '<div><img src="img/coin.png" class="wvw5 vmiddle">' + data.userScore + '</div>';
        //html += '<div>Rewards</div>';
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}

function createRankingRow2(data, index) {
    var fortunepotval;
    var html = '<div class="teamRankRowCon w85 marb2">';
    html += '<div class="colFour teamRankCol">';
    html += '<div>' + (index + 1) + '</div>';
    html += '<div>';
    html += '<div>';

      if(index==0){
            fortunepotval=fortunePOT*40/100;

        }
       else if(index==1){
            fortunepotval=fortunePOT*30/100;
            
        }
        else if(index>=2){
                fortunepotval=fortunePOT*10/100;
            
        }
 
      html += '<button onclick="openProfile('  + data.userId + ')" >';
    html += '<img src="' + data.portrait + '" class="teamRankImg" onerror="imgError(this)"/>';
    html += '</button>';
    html += '</div>';
    html += '</div>';
    html += '<div>';
    html += '<div class="txtsdots">' + data.nickName + '</div>';
    html += '</div>';
    html += '<div>';

    if(index<5){
        html += '<div>' + data.userScore + ' points<br>Est.Rew: <img src="../rewards/gems.png" class="wvw5 vmiddle">'+Math.floor(fortunepotval)+'</div>';  
    }
    else{
       html += '<div>' + data.userScore + ' points</div>';    
    }
  
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}




function createRankingRow3(data, index) {
    var fortunepotval;
    var html = '<div class="teamRankRowCon w85 marb2">';
    html += '<div class="colFour teamRankCol">';
    html += '<div>' + (index + 1) + '</div>';
    html += '<div>';
    html += '<div>';
  
        
 
      html += '<button onclick="openProfile('  + data.userId + ')" >';
    html += '<img src="' + data.portrait + '" class="teamRankImg" onerror="imgError(this)"/>';
    html += '</button>';
    html += '</div>';
    html += '</div>';
    html += '<div>';
    html += '<div class="txtsdots">' + data.nickName + '</div>';
    html += '</div>';
    html += '<div>';
   
       html += '<div>' + data.userScore + ' points</div>';    
    
  
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}
function seeMore1(class1, class2, class3) {
    $('.' + class1).css("display", "block");
    $('#' + class2).hide();
    $('#' + class3).show();
}

function seeLess1(class1, class2, class3) {
    $('.' + class1).css("display", "none");
    $('#' + class2).show();
    $('#' + class3).hide();
}

function imgError(image) {
    image.onerror = "";
    image.src = "img/user.png";
    return true;
}

function getRewardsNameAndImage(userScore) {
    var retVal = 'No Reward,0';
     if (userScore == 1) {
        retVal = 'Kingpin Entrance x1 day,../rewards/kingspin.png,x1 day';
    } 
    else if (userScore == 2) {
        retVal = 'Fury Profile Frame x2 days,../rewards/furyFrame.png,x2 days';
    } 

    else if (userScore == 3) {
        retVal = '500 Beans,../rewards/beanbag.png,500';
    } else if (userScore == 4) {
          retVal = '1000 Beans,../rewards/beanbag.png,1000';
    } else if (userScore == 5) {
        retVal = '1200 Beans,../rewards/beanbag.png,1200';
    } 
    else if (userScore == 6) {
        retVal = 'Brave HeartProfile Frame x2 days,../rewards/braveHeart.png,x2 days';
    } 
    else if (userScore == 7) {
        retVal = 'Phantom Entrance x1 day,../rewards/phantom.png,x1 day';
    } else if (userScore == 8) {
        retVal = 'Fierce Profile Frame x2 days,../rewards/fierceFrame.gif,x2 days';
    } else if (userScore == 9) {
        retVal = '1200 beans,../rewards/beanbag.png,1200';
    } else if (userScore == 10) {
        retVal = '1500 beans,../rewards/beanbag.png,1500';
    }

  
    
    return retVal;
}






        function openProfile(id) {


            try {

                var href = 'http://www.kktv1.com/m/?roomid=' + id + '';
                // showToast("Opening Squad page...");
                window.phone.goToActivityWeb("Pin A ball", href);
            } catch (_error) {
                console.error(_error);
                // showToast("Open Squad page error...");
                location.href = 'http://www.kktv1.com/m/?roomid=' + id + '';
            }

        }





function rewardsRecordApi(local){
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: rewardsRecordurl+uid+'&pageIndex=1&pageCount=50',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
              // alert(JSON.stringify(data));
                // $('#responseData').html(JSON.stringify(data));
                
                    rewardsRecordDataPopulation(data);
               

            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {

        if (rewardsRecordData.errorCode == 0) {
            rewardsRecordDataPopulation(rewardsRecordData);
        }else if(rewardsRecordData.errorCode == -1){
            $('#oopsTitle').attr('src','./img/ribbons/oopsTag.png');
            var oopsMsgDisplay =  rewardsRecordData.msg;
            $('#oopstxte1').html(oopsMsgDisplay);
            openModal('oopsBoxs1', 'oopsClose1');
        }
    }
}



function rewardsRecordDataPopulation(data) {
      $('#woHooModalContent').html('');
    $('#woHooModalContent').append(` <table class="w-100 mt-3 rewTable" style="background:none !important;margin-top:0 !important;padding:0 !important;border:1px solid hsl(51deg 38% 43%);">
    
    <tbody id="rowRecord"></tbody>
    </table>`)
    if(data.data.length>0){
    for (let i = 0; i < data.data.length; i++) {
        $('#rowRecord').append(`<tr>
       <td>${data.data[i].time}</td>
       <td> ${data.data[i].level==1?'<img src="./img/rewicon.png" class="rewbg"><img src="./img/tBeans.png" class="rewimg"><div><span>222</span><span><img src="./img/coin.png" class="rewcoin" /></div>':
       data.data[i].level==2?'<img class="w-15" src="../rewards/furyFrame.png" alt=""><span class="rewardsName">Fury Profile Frame <span class="gold"> x2 days</span> </span>':
       data.data[i].level==3?'<img class="w-15" src="../rewards/beanbag.png" alt=""><span class="rewardsName">500 Beans </span>':
       data.data[i].level==4?'<img class="w-15" src="../rewards/beanbag.png" alt=""><span class="rewardsName">1000 Beans </span>':
       data.data[i].level==5?'<img class="w-15" src="../rewards/beanbag.png" alt=""><span class="rewardsName">1200 Beans </span>':
       data.data[i].level==6?'<img class="w-15" src="../rewards/braveHeart.png" alt=""><span class="rewardsName">Brave Heart Profile Frame <span class="gold"> x2 days</span> </span>':
       data.data[i].level==7?'<img class="w-15" src="../rewards/phantom.png" alt=""><span class="rewardsName">Phantom Entrance <span class="gold"> x1 day</span> </span>':
       data.data[i].level==8?'<img class="w-15" src="../rewards/fierceFrame.gif" alt=""><span class="rewardsName">Fierce Profile Frame <span class="gold"> x2 days</span> </span>':
     
       data.data[i].level==9?'<img class="w-15" src="../rewards/beanbag.png" alt=""><span class="rewardsName">1200 Beans </span>':
       data.data[i].level==10?'<img class="w-15" src="../rewards/beanbag.png" alt=""><span class="rewardsName">1500 Beans  </span>':''
    }
       </td>
   </tr>`)
    }
}
    else{
           $('#rowRecord').append('<tr><td>No record history yet</td></tr>');
    }
   
   
}




function getfollowapi(local,id,name) {
    // console.log('jfdfjfjjfjjfjjfjjffj',local,id,name)
    
    if (local == 0) {
        $.ajax({
            type: "POST",
            async: true,
            url: host+'/meShow/entrance?parameter=%7B%22FuncTag%22:10003001,%22token%22:%22'+u_token+'%22,%22userId%22:%22'+uid+'%22,%22followedIds%22:%22'+id+'%22%7D',
            cache: false,
            success: function(data) {
                // followuser(data);
                
                // alert(JSON.stringify(data))
                data = jQuery.parseJSON(data);
                if (data.TagCode == '00000000' && data.followFansList != 0) {
                   showToast('Followed <span class="txtsdots">'+name+'</span>'); 
                   getTalentPreviousApi(local);
               }else{
                showToast('Not Followed!');
               }
                // $('#eventDetails00').html(JSON.stringify(data) + u_token);
            },
            failure: function() {
                console.log("Ajax Failure.");
            }
        });
    } else {
        // followuser(eventInfo);
    }
}

