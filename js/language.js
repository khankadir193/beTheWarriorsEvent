function getapi() {
    $.ajax({
        url: "https://ip.seeip.org/geoip",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            console.log(location.country);
            if (location.country == 'India') {
                sessionStorage.setItem('SelectedItem', 2)
                sessionStorage.setItem('country', 'India');
                $('#lngtxt').html('<span>Hindi</span>');
                contentChange(2);
            } else if (location.country == 'Pakistan') {
                sessionStorage.setItem('SelectedItem', 1)
                sessionStorage.setItem('country', 'Pakistan');
                $('#lngtxt').html('<span>Urdu</span>');
                contentChange(2);
            } else {
                console.log("rest");
                sessionStorage.setItem('SelectedItem', 1)
                sessionStorage.setItem('country', 'English');
                $('#lngtxt').html('<span>English</span>');
                contentChange(1);
            }
        }
    });
}

function contentNext(val) {
    //  alert(val);
    sessionStorage.setItem('SelectedItem', val);
    switch (val) {
        case '1':
            {
                contentChange(1);
                sessionStorage.setItem('SelectedItem', 1);
                break;
            }
        case '2':
            {
                contentChange(2);
                sessionStorage.setItem('SelectedItem', 2);
                break;
            }
        

        default:
            {
                contentChange(1);
                sessionStorage.setItem('SelectedItem', 1);
            }
    }
}

var data = [{
    key: "1",
    values: [{
        id: "rulesContent",
        content: '<ol class="textLeft"> <li> To start playing, send event gifts. (25k beans=1 Spin) </li><li> Click on the Roller button beside the game to receive rewards. </li><li> At once, you can play x1, x50, or x100 spins at once. </li><li> You can see the number of spins accumulated by sending event gifts on the webpage on "My Spins" section. </li><p class="textLeft w95 marauto yellownote"> Note: You will receive rewards only if the machine displays the same rewards on the machine. </p><li> If the machine displays different rewards on the three columns, you won’t receive any rewards. </li><li> Beans spent on event gifts will be accumulated in the Beans Pot. </li><li> This beans pot will be rewarded to top 5 users ranking on the hourly leaderboard. Beans will reset to 0 after distribution every hour. </li></ol>'
    }, {
        id: "rulesContent2",
        content:' <li> There will be two teams on the webpage: Team Red&Team Blue. </li><li> Talents that receive event gifts and ranked on the Daily leaderboard that day will be randomly divided in these two teams. </li><li> Talents have to randomly engage in a PK match with other talents to increase the COMBAT POINTS of their team. </li><li> Talents will receive combat points only if they win the PK match.</li><li> Combat Points will be rewarded to talents on the basis of beans a talent wins in a PK match.  </li><table class="w95"> <tr> <th>Beans earning of winning talent</th> <th>Combat Points Earned</th> </tr><tr> <td>0 - 999 beans</td><td>1</td></tr><tr> <td>1000 – 9999</td><td>5</td></tr><tr> <td>10,000-99,999</td><td>10</td></tr><tr> <td>100,000-499999</td><td>50</td></tr><tr> <td>500,000 - 999,999</td><td>100</td></tr><tr> <td>1m - 9,999,999</td><td>1000</td></tr><tr> <td>10m +</td><td>10,000</td></tr></table> <li> By playing PK matches, talents will win combat points for their team, which will be added automatically to the team’s overall combat points. </li><li> A talent can check the overall combat points his team has accumulated on the webpage. There will be a section stating the overall combat points each team has won. </li><li> Team with maximum combat points at the end of the day will be declared as the winner. </li><li> Beans received by the winning talent by playing PK match will be accumulated in the Gems Pot. </li><li> The gems pot will be distributed to Top 5 talents ranking on the Daily leaderboard. Distribution Time: 00:30 GMT </li><li> Additionally, talents that are part of the winning team will be given a surprise reward. </li><li> At the end of each day, the teams (including talents, combat points received by both teams) will reset and another round will start. Reset Time- 00:00:01 GMT. </li><li> Top 2 talents ranking on the Hourly leaderboard will be featured on the Top of the webpage for the next hour. </li>'
    }, {
        id: "rules",
        content: 'RULES'
    }]
}, {
    key: "2",
    values: [{
        id: "rulesContent",
        content:  '<ol class="textLeft"> <li> Iss khel ko khelne ke liye, event gifts bhejhe. (25k beans=1 Spin) </li><li>Rewards jeetne ke liye, side me diye gaye Roller button ko click kare. </li><li> Ek baar me aap x1, x50 aur x100 spins khel sakte hai. </li><li> Aap apne saare spins jo event gifts bhejhne se mile hai woh “My Spins” section me dekh sakte hai. </li><p class="textLeft w95 marauto yellownote"> Dhyaan De: Jab machine ki display par saare rewards ki picture same hogi tab hi aapko woh reward milega. </p><li> Agar machine ki display par alag-alag rewards ki picture hai toh aapko koi reward nahi milega. </li><li> Beans jo event gifts par kharch honge woh ek Beans Pot me collect kiye jaayenge. </li><li> Ye beans pot Top 5 users jo hourly leaderboard par rank karte hai unhe diya jaayega. Beans pot distribute hone ke baad, harr ghante 0 par reset ho jaayega. </li></ol>'
    }, {
        id: "rulesContent2",
        content: '<li> Webpage par 2 teams honge: Team Red aur Team Blue.e. </li><li> Uss din jo talents ko event gifts milte hai aur jo Daily leaderboard pe rank karenge unhe randomly inn 2 teams me divide kar diya jaayega. </li><li> Talents ko PK matches khelna hoga Combat Points paane ke liye. </li><li> Talents ko randomly dusre talents ke sath PK matches khelna hoga apne team ke Combat Points ko increase karne ke liye. </li><li> Talents ko combat points sirf PK match jeetne par hi milega. </li><li> Talents ko PK match me mile gaye beans ke hisaab se Combat Points milega. </li><table class="w95"> <tr> <th>Beans earning of winning talent</th> <th>Combat Points Earned</th> </tr><tr> <td>0 - 999 beans</td><td>1</td></tr><tr> <td>1000 – 9999</td><td>5</td></tr><tr> <td>10,000-99,999</td><td>10</td></tr><tr> <td>100,000-499999</td><td>50</td></tr><tr> <td>500,000 - 999,999</td><td>100</td></tr><tr> <td>1m - 9,999,999</td><td>1000</td></tr><tr> <td>10m +</td><td>10,000</td></tr></table> <li> PK match khelne se, talents combat points jeetenge jo automatically team ke overall combat points me add ho jaayega. </li><li> Talents apne team ki overall combat points webpage par check kar sakte hai. Webpage par ek section hoga jaha talent ko unki team ka overall combat points dikhega. </li><li> Din ke end me, jiss team ke sabse zyaada combat points honge, woh team ko winner declare kiya jaayega. </li><li> Beans jo winning talent ko PK match me milta hai, woh ek Gems Pot me collect ho jaayenge. </li><li> Saath hi, saare talents jo winning team ka hissa the, unh ek surprise reward diya jaayega. </li><li> Ye gems pot Top 5 talents jo Daily leaderboard par rank karte hai unke beech distribute kiya jaayega. Distribution Time: 00:30 GMT </li><li> Harr din ke end me, teams (uss team ke talents aur combat points uss team ke) ko reset kar diya jaayega aur naya round shuru hoga. Reset Time: 00.00.01 GMT. </li><li> Top 2 talents jo Hourly leaderboard par rank karenge, unhe Top of the Webpage par feature kiya jaayega.</li>'
    }, {
        id: "rules",
        content: 'नियमों'
    }]

}];

function contentChange(lang) {
    $.each(data, function(key, value) {
        if (value.key === lang.toString()) {
            $.each(value.values, function(key2, value2) {
                $('#' + value2.id).html(value2.content);
            });
            return false;
        }
    });
    if (lang == 2) {
        $('#guideHing').show();
        $('#guideEng').hide();
        $('#infoeng').hide();
        $('#infourd').show();

    }else if (lang ==1) {
        $('#guideEng').show();
        $('#guideHing').hide();
        $('#infoeng').show();
        $('#infourd').hide();


    }

}
$(document).ready(function() {
   
        var selectedItem = sessionStorage.getItem('SelectedItem');
        console.log("selectedItem" + typeof(selectedItem));
        if (selectedItem == "1") {
            $('#lngtxt').html('<span>English</span>');
            contentChange(1);
        } else if (selectedItem == "2") {
            $('#lngtxt').html('<span>Urdu/Hindi</span>');
            contentChange(2);
        } 
    

});