"use strict";

var city = [{
  "CityID": "A",
  "CityName": "臺北市",
  "CityCode": "TPE",
  "City": "Taipei",
  "CountyID": "A",
  "Version": "21.08.1"
}, {
  "CityID": "B",
  "CityName": "臺中市",
  "CityCode": "TXG",
  "City": "Taichung",
  "CountyID": "B",
  "Version": "21.08.1"
}, {
  "CityID": "C",
  "CityName": "基隆市",
  "CityCode": "KEE",
  "City": "Keelung",
  "CountyID": "C",
  "Version": "21.08.1"
}, {
  "CityID": "D",
  "CityName": "臺南市",
  "CityCode": "TNN",
  "City": "Tainan",
  "CountyID": "D",
  "Version": "21.08.1"
}, {
  "CityID": "E",
  "CityName": "高雄市",
  "CityCode": "KHH",
  "City": "Kaohsiung",
  "CountyID": "E",
  "Version": "21.08.1"
}, {
  "CityID": "F",
  "CityName": "新北市",
  "CityCode": "NWT",
  "City": "NewTaipei",
  "CountyID": "F",
  "Version": "21.08.1"
}, {
  "CityID": "G",
  "CityName": "宜蘭縣",
  "CityCode": "ILA",
  "City": "YilanCounty",
  "CountyID": "G",
  "Version": "21.08.1"
}, {
  "CityID": "H",
  "CityName": "桃園市",
  "CityCode": "TAO",
  "City": "Taoyuan",
  "CountyID": "H",
  "Version": "21.08.1"
}, {
  "CityID": "I",
  "CityName": "嘉義市",
  "CityCode": "CYI",
  "City": "Chiayi",
  "CountyID": "I",
  "Version": "21.08.1"
}, {
  "CityID": "J",
  "CityName": "新竹縣",
  "CityCode": "HSQ",
  "City": "HsinchuCounty",
  "CountyID": "J",
  "Version": "21.08.1"
}, {
  "CityID": "K",
  "CityName": "苗栗縣",
  "CityCode": "MIA",
  "City": "MiaoliCounty",
  "CountyID": "K",
  "Version": "21.08.1"
}, {
  "CityID": "M",
  "CityName": "南投縣",
  "CityCode": "NAN",
  "City": "NantouCounty",
  "CountyID": "M",
  "Version": "21.08.1"
}, {
  "CityID": "N",
  "CityName": "彰化縣",
  "CityCode": "CHA",
  "City": "ChanghuaCounty",
  "CountyID": "N",
  "Version": "21.08.1"
}, {
  "CityID": "O",
  "CityName": "新竹市",
  "CityCode": "HSZ",
  "City": "Hsinchu",
  "CountyID": "O",
  "Version": "21.08.1"
}, {
  "CityID": "P",
  "CityName": "雲林縣",
  "CityCode": "YUN",
  "City": "YunlinCounty",
  "CountyID": "P",
  "Version": "21.08.1"
}, {
  "CityID": "Q",
  "CityName": "嘉義縣",
  "CityCode": "CYQ",
  "City": "ChiayiCounty",
  "CountyID": "Q",
  "Version": "21.08.1"
}, {
  "CityID": "T",
  "CityName": "屏東縣",
  "CityCode": "PIF",
  "City": "PingtungCounty",
  "CountyID": "T",
  "Version": "21.08.1"
}, {
  "CityID": "U",
  "CityName": "花蓮縣",
  "CityCode": "HUA",
  "City": "HualienCounty",
  "CountyID": "U",
  "Version": "21.08.1"
}, {
  "CityID": "V",
  "CityName": "臺東縣",
  "CityCode": "TTT",
  "City": "TaitungCounty",
  "CountyID": "V",
  "Version": "21.08.1"
}, {
  "CityID": "W",
  "CityName": "金門縣",
  "CityCode": "KIN",
  "City": "KinmenCounty",
  "CountyID": "W",
  "Version": "21.08.1"
}, {
  "CityID": "X",
  "CityName": "澎湖縣",
  "CityCode": "PEN",
  "City": "PenghuCounty",
  "CountyID": "X",
  "Version": "21.08.1"
}, {
  "CityID": "Z",
  "CityName": "連江縣",
  "CityCode": "LIE",
  "City": "LienchiangCounty",
  "CountyID": "Z",
  "Version": "21.08.1"
}];
$(function () {
  if (location.pathname == '/F2E_3rd_first_week/' || location.pathname == '/F2E_3rd_first_week/index.html') {
    //首頁
    console.log('首頁');
    var randomnumber = Math.floor(Math.random() * 100 + 1);
    var indexActUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=4&$skip=".concat(randomnumber, "&$format=JSON");
    var idexSpotUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=16&$skip=".concat(randomnumber, "&$format=JSON");
    var indexRestaurantUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=16&$skip=".concat(randomnumber, "&$format=JSON");
    funSwiper(".indexSwiper1"); //首頁熱門景點Swiper

    funSwiper(".indexSwiper2"); //首頁推薦美食Swiper

    funAxaj(indexActUrl, ".featuredContent");
    funAxaj(idexSpotUrl, ".ScenicSpotContent");
    funAxaj(indexRestaurantUrl, ".recommendedContent");
  } else if (location.pathname == '/F2E_3rd_first_week/featured.html') {
    //精選活動
    $("#navbarSupportedContent .nav-link:eq(0)").addClass('active');
    var randomnumber = Math.floor(Math.random() * 100 + 1);
    var select1 = "";
    var Today = new Date();
    var pageActUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON";
    select1 += "<option selected disabled>\u6240\u6709\u7E23\u5E02</option>";
    $.each(city, function (key, item) {
      select1 += "<option value=\"".concat(item.City, "\">").concat(item.CityName, "</option>");
    });
    $("#city").html(select1);
    funAxaj(pageActUrl, "", "featured", ".featuredpageContent");
    $("#city").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      var pageActCityUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/".concat(value1, "?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON");
      funAxaj(pageActCityUrl, "", "featured", ".featuredpageContent");
    });
    $(".subject-class").on("change", function () {
      var value1 = $(this).val();
      funAxaj(pageActUrl, "", "featured", ".featuredpageContent", value1);
      console.log(value1);
      $("#city").get(0).selectedIndex = 0;
    });
  } else if (location.pathname == '/F2E_3rd_first_week/attractions.html') {
    //全台景點
    $("#navbarSupportedContent .nav-link:eq(1)").addClass('active');
    var randomnumber = Math.floor(Math.random() * 100 + 1);
    var _select = "";
    _select += "<option selected disabled>\u6240\u6709\u7E23\u5E02</option>";
    $.each(city, function (key, item) {
      _select += "<option value=\"".concat(item.City, "\">").concat(item.CityName, "</option>");
    });
    $("#city").html(_select);
    var pageSpotUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON";
    $("#city").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      var pageSpotCityUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(value1, "?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON");
      funAxaj(pageSpotCityUrl, "", "attractions", ".attractionspageContent"); // $.ajax({  //jQuery ajax遠端資料讀取
      //   url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${value1}?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON`,
      //   headers: getAuthorizationHeader(),
      //   method: 'GET',
      //   dataType: 'json',
      //   // data: '',
      //   async: true,
      //   success: res => {
      //     console.log(res);
      //     (function (name) {
      //       var container = $('#pagination-' + name);
      //       var options = {
      //         dataSource: res, //內容資料
      //         totalNumber: res.length, //条目总数
      //         //totalNumberLocator,/*远程获取 totalNumber，用于异步分页，只在 dataSource 为字符串时可用注意: 指定 totalNumberLocator 后将会忽略 totalNumber*/
      //         //       //showFirstOnEllipsisShow:true, //是否在有省略号时显示开始页码
      //         //       //showLastOnEllipsisShow:true,//是否在有省略号时显示结束页码
      //         pageSize: 10, //每頁資料個數
      //         pageNumber: 1,//指定初始化时加载哪一页的数据
      //         pageRange: 2,//可见的页码范围
      //         callback: function (response, pagination) { //每次翻页时的回调，callback 会传入两个参数
      //           window.console && console.log(response, pagination);
      //           let data1 = "";
      //           $.each(response, function (key, item) {
      //             data1 += `<div class="col">
      //             <div class="card mb-3 shadow">
      //               <div class="row g-0 flex-column flex-lg-row">
      //                 <div class="col-12 col-lg-6"><img src="${item.Picture.PictureUrl1}" alt="" class="img-fluid  h-100  img-cover">
      //                 </div>
      //                 <div class="col-12 col-lg-6">
      //                   <div class="card-body d-flex flex-column h-100">
      //                     <h5 class="card-title fw-bolder">${item.Name}</h5>
      //                     <p class="card-text"><b class="fw-bolder fs-6 me-1">開放時間</b><span class="fs-7">${item.OpenTime}</span>
      //                     </p>
      //                     <p class="card-text"><b class="fw-bolder  fs-6 me-1">地點</b><span class="fs-7">${item.Address.substring(0, 3)}</span></p>
      //                     <p class="card-text text-break lh-base mb-5 d-none d-lg-block">
      //                     ${item.DescriptionDetail.substring(0, 30)}...</p>
      //                     <a href="detailed.html?id=${item.ID}"
      //                       class="btn btn-lblue rounded-pill  text-white fw-bold mt-auto fs-7 fs-sm-6 px-4 px-sm-5 py-2 align-self-end">了解更多</a>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>`
      //           });
      //           $(".attractionspageContent").html(data1);
      //           // container.prev().html(dataHtml);
      //         }
      //       };
      //       container.pagination(options);
      //     })('attractions');
      //   },
      //   error: err => {
      //     console.log(err);
      //   },
      // });
    });
    funAxaj(pageSpotUrl, "", "attractions", ".attractionspageContent");
    $(".subject-class").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      funAxaj(pageSpotUrl, "", "attractions", ".attractionspageConten", value1);
      $("#city").get(0).selectedIndex = 0;
      ;
    });
  } else if (location.pathname == '/F2E_3rd_first_week/foods.html') {
    //全台景點
    $("#navbarSupportedContent .nav-link:eq(2)").addClass('active');
    var randomnumber = Math.floor(Math.random() * 100 + 1);
    var _select2 = "";
    _select2 += "<option selected disabled>\u6240\u6709\u7E23\u5E02</option>";
    $.each(city, function (key, item) {
      _select2 += "<option value=\"".concat(item.City, "\">").concat(item.CityName, "</option>");
    });
    $("#city").html(_select2);
    var _pageSpotUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON";
    $("#city").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      var pageSpotCityUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/".concat(value1, "?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON");
      funAxaj(pageSpotCityUrl, "", "foods", ".foodspageContent");
    });
    funAxaj(_pageSpotUrl, "", "foods", ".foodspageContent");
    $(".subject-class").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      funAxaj(_pageSpotUrl, "", "foods", ".foodspageContent", value1);
      $("#city").get(0).selectedIndex = 0;
      ;
    });
  } else if (location.pathname == '/F2E_3rd_first_week/hotel.html') {
    //全台景點
    $("#navbarSupportedContent .nav-link:eq(3)").addClass('active');
    var randomnumber = Math.floor(Math.random() * 100 + 1);
    var _select3 = "";
    _select3 += "<option selected disabled>\u6240\u6709\u7E23\u5E02</option>";
    $.each(city, function (key, item) {
      _select3 += "<option value=\"".concat(item.City, "\">").concat(item.CityName, "</option>");
    });
    $("#city").html(_select3);
    var _pageSpotUrl2 = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON";
    $("#city").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      var pageSpotCityUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/".concat(value1, "?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON");
      funAxaj(pageSpotCityUrl, "", "hotel", ".hotelpageContent");
    });
    funAxaj(_pageSpotUrl2, "", "hotel", ".hotelpageContent");
    $(".subject-class").on("change", function () {
      var value1 = $(this).val();
      console.log(value1);
      funAxaj(_pageSpotUrl2, "", "hotel", ".hotelpageContent", value1);
      $("#city").get(0).selectedIndex = 0;
      ;
    });
  } else if (location.pathname == '/F2E_3rd_first_week/detailed.html') {
    //內文
    funSwiper(".detailedSwiper");
    console.log(location.href);
    var randomnumber = Math.floor(Math.random() * 100 + 1); //先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」

    var url = location.href; //再來用去尋找網址列中是否有資料傳遞(QueryString)

    if (url.indexOf('?') != -1) {
      //之後去分割字串把分割後的字串放進陣列中
      var ary1 = url.split('?'); //此時ary1裡的內容為：
      //ary1[0] = 'index.aspx'，ary2[1] = 'id=U001&name=GQSM'
      //下一步把後方傳遞的每組資料各自分割

      var ary2 = ary1[1].split('&'); //此時ary2裡的內容為：
      //ary2[0] = 'id=U001'，ary2[1] = 'name=GQSM'
      //最後如果我們要找id的資料就直接取ary[0]下手，name的話就是ary[1]

      var ary3 = ary2[0].split('='); //此時ary3裡的內容為：
      //ary3[0] = 'id'，ary3[1] = 'U001'
      //取得id值

      var id = ary3[1];
    }

    console.log(id);
    var Url;
    var detailedSwiperUrl;

    if (id.substr(1, 1) == "1") {
      Url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ID%20eq%20'".concat(id, "'&$format=JSON");
      detailedSwiperUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=16&$skip=".concat(randomnumber, "&$format=JSON");
    } else if (id.substr(1, 1) == "2") {
      Url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=ID%20eq%20'".concat(id, "'&$format=JSON");
      detailedSwiperUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=16&$skip=".concat(randomnumber, "&$format=JSON");
    } else if (id.substr(1, 1) == "3") {
      Url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=ID%20eq%20'".concat(id, "'&$format=JSON");
      detailedSwiperUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=16&$skip=".concat(randomnumber, "&$format=JSON");
    } else if (id.substr(1, 1) == "4") {
      Url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=ID%20eq%20'".concat(id, "'&$format=JSON");
      detailedSwiperUrl = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=16&$skip=".concat(randomnumber, "&$format=JSON");
    }

    $.ajax({
      //jQuery ajax遠端資料讀取
      url: Url,
      // headers: getAuthorizationHeader(),
      method: 'GET',
      dataType: 'json',
      async: true,
      success: function success(res) {
        console.log(res);
        console.log(Object.keys(res[0].Picture).length);
        var html1;
        var html2;
        var html3;

        if (id.substr(1, 1) == "1") {
          html1 = "";
          html2 = "<div class=\"d-flex flex-column\">\n              <h5 class=\"fw-bolder mb-3\">".concat(res[0].Name, "</h5>\n              <p>\n            <span class=\"badge rounded-pill bg-warning text-dark\">").concat(res[0].Class1 || "", "</span>\n          \n              </p>\n              <h6 class=\"fw-bolder text-dblue fz-md\">\u95DC\u65BC</h6>\n              <p>\n              ").concat(res[0].DescriptionDetail || res[0].Description, "\n              </p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u958B\u653E\u6642\u9593</h6>\n                    <p class=\"mb-3\">").concat(res[0].OpenTime, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u7968\u50F9\u8CC7\u8A0A</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].TicketInfo, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u5730\u5740</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Address, " <img src=\"./assets/images/logos_google-maps.png\" class=\"ms-2\" alt=\"\"></p>\n                    <div class=\" d-flex justify-content-start mt-4\">\n                      <a href=\"").concat(res[0].WebsiteUrl, "\" class=\"btn btn-info rounded-pill px-5 text-white text-decoration-non\">\u5B98\u65B9\u7DB2\u7AD9</a>\n                    </div>\n                </div>");
          html3 = "<div class=\"d-flex flex-column\">\n                <h6 class=\"fw-bolder text-dblue mb-3 fz-md\">\u4EA4\u901A\u8CC7\u8A0A</h6>\n                <p class=\"fw-normal h5\">\u5927\u773E\u904B\u8F38\uFF1A</p>\n                <p class=\"fw-normal\">".concat(res[0].TravelInfo, "</p>\n                  </div>");

          if (Object.keys(res[0].Picture).length == 2) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid h-100 img-cover\">");
          } else if (Object.keys(res[0].Picture).length >= 4) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-2 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else if (Object.keys(res[0].Picture).length == 6) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-3 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl3, "\" alt=\"").concat(res[0].PicturePictureDescription3, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"../images/Vector.png\" class=\"img-fluid w-100 h-100\">");
          }
        } else if (id.substr(1, 1) == "2") {
          html1 = "";
          html2 = "<div class=\"d-flex flex-column\">\n              <h5 class=\"fw-bolder mb-3\">".concat(res[0].ActivityName, "</h5>\n              <p>\n                <span class=\"badge rounded-pill bg-warning text-dark\">").concat(res[0].Class1 || "", "</span>\n              </p>\n              <h6 class=\"fw-bolder text-dblue fz-md\">\u95DC\u65BC</h6>\n              <p>\n              ").concat(res[0].Description, "\n              </p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u6642\u9593</h6>\n                    <p class=\"mb-3\">").concat(res[0].StartTime.substring(0, 10), "~").concat(res[0].EndTime.substring(0, 10), "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u6D3B\u52D5\u4E3B\u8FA6\u55AE\u4F4D</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Organizer, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u5730\u5740</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Address, " <img src=\"./assets/images/logos_google-maps.png\" class=\"ms-2\" alt=\"\"></p>\n                    <div class=\" d-flex justify-content-start mt-4\">\n                      <a href=\"").concat(res[0].WebsiteUrl, "\" class=\"btn btn-info rounded-pill px-5 text-white text-decoration-non\">\u5B98\u65B9\u7DB2\u7AD9</a>\n                    </div>\n                </div>");
          html3 = "<div class=\"d-flex flex-column\">\n                <h6 class=\"fw-bolder text-dblue mb-3 fz-md\">\u4EA4\u901A\u8CC7\u8A0A</h6>\n                <p class=\"fw-normal h5\">\u5927\u773E\u904B\u8F38\uFF1A</p>\n                <p class=\"fw-normal\">".concat(res[0].TravelInfo || '自行查地圖', "</p>\n                  </div>");

          if (Object.keys(res[0].Picture).length == 2) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid h-100 img-cover\">");
          } else if (Object.keys(res[0].Picture).length >= 4) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-2 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else if (Object.keys(res[0].Picture).length == 6) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-3 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl3, "\" alt=\"").concat(res[0].PicturePictureDescription3, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"../images/Vector.png\" class=\"img-fluid w-100 h-100\">");
          }
        } else if (id.substr(1, 1) == "3") {
          html1 = "";
          html2 = "<div class=\"d-flex flex-column\">\n              <h5 class=\"fw-bolder mb-3\">".concat(res[0].Name, "</h5>\n              <p>\n            <span class=\"badge rounded-pill bg-warning text-dark\">").concat(res[0].Class || "", "</span>\n          \n              </p>\n              <h6 class=\"fw-bolder text-dblue fz-md\">\u95DC\u65BC</h6>\n              <p>\n              ").concat(res[0].DescriptionDetail || res[0].Description, "\n              </p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u958B\u653E\u6642\u9593</h6>\n                    <p class=\"mb-3\">").concat(res[0].OpenTime, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u96FB\u8A71</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Phone, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u5730\u5740</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Address, " <img src=\"./assets/images/logos_google-maps.png\" class=\"ms-2\" alt=\"\"></p>\n                    <div class=\" d-flex justify-content-start mt-4\">\n                      <a href=\"").concat(res[0].WebsiteUrl || '#', "\" class=\"btn btn-info rounded-pill px-5 text-white text-decoration-non\">\u5B98\u65B9\u7DB2\u7AD9</a>\n                    </div>\n                </div>");
          html3 = "<div class=\"d-flex flex-column\">\n                <h6 class=\"fw-bolder text-dblue mb-3 fz-md\">\u4EA4\u901A\u8CC7\u8A0A</h6>\n                <p class=\"fw-normal\">".concat(res[0].TravelInfo || '請自行goole', "</p>\n                  </div>");

          if (Object.keys(res[0].Picture).length == 2) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid h-100 img-cover\">");
          } else if (Object.keys(res[0].Picture).length >= 4) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-2 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else if (Object.keys(res[0].Picture).length == 6) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-3 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl3, "\" alt=\"").concat(res[0].PicturePictureDescription3, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"../images/Vector.png\" class=\"img-fluid w-100 h-100\">");
          }
        } else if (id.substr(1, 1) == "4") {
          html1 = "";
          html2 = "<div class=\"d-flex flex-column\">\n              <h5 class=\"fw-bolder mb-3\">".concat(res[0].Name, "</h5>\n              <p>\n            <span class=\"badge rounded-pill bg-warning text-dark\">").concat(res[0].Class || "", "</span>\n          \n              </p>\n              <h6 class=\"fw-bolder text-dblue fz-md\">\u95DC\u65BC</h6>\n              <p>\n              ").concat(res[0].DescriptionDetail || res[0].Description, "\n              </p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u66F4\u65B0\u6642\u9593</h6>\n                    <p class=\"mb-3\">").concat(res[0].UpdateTime, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u96FB\u8A71</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Phone, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u623F\u9593\u50F9\u4F4D</h6>\n                    <p class=\"mb-3\">").concat(res[0].Spec, "</p>\n                    <h6 class=\"fw-bolder mb-3 text-dblue fz-md\">\u5730\u5740</h6>\n                    <p class=\"mb-3\"> ").concat(res[0].Address, " <img src=\"./assets/images/logos_google-maps.png\" class=\"ms-2\" alt=\"\"></p>\n                    <div class=\" d-flex justify-content-start mt-4\">\n                      <a href=\"").concat(res[0].WebsiteUrl || '#', "\" class=\"btn btn-info rounded-pill px-5 text-white text-decoration-non\">\u5B98\u65B9\u7DB2\u7AD9</a>\n                    </div>\n                </div>");
          html3 = "<div class=\"d-flex flex-column\">\n                <h6 class=\"fw-bolder text-dblue mb-3 fz-md\">\u4EA4\u901A\u8CC7\u8A0A</h6>\n                <p class=\"fw-normal\">".concat(res[0].TravelInfo || '請自行goole', "</p>\n                  </div>");

          if (Object.keys(res[0].Picture).length == 2) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid h-100 img-cover\">");
          } else if (Object.keys(res[0].Picture).length >= 4) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-2 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else if (Object.keys(res[0].Picture).length == 6) {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\">\n                  <div class=\"row row-cols-3 mt-3\">\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl1, "\" alt=\"").concat(res[0].PicturePictureDescription1, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl2, "\" alt=\"").concat(res[0].PicturePictureDescription2, "\" class=\"img-fluid\"></div>\n                    <div class=\"col\"><img src=\"").concat(res[0].Picture.PictureUrl3, "\" alt=\"").concat(res[0].PicturePictureDescription3, "\" class=\"img-fluid\"></div>\n                  </div>");
          } else {
            html1 = "\n                  <img src=\"".concat(res[0].Picture.PictureUrl1, "\" alt=\"../images/Vector.png\" class=\"img-fluid w-100 h-100\">");
          }
        }

        $("#selfimg").html(html1);
        $("#selfcontent").html(html2);
        $("#traffic").html(html3); // 建立 Leaflet 地圖

        var map = L.map('selfmap');
        var Lon = res[0].Position.PositionLon;
        var Lat = res[0].Position.PositionLat; // 設定經緯度座標

        map.setView(new L.LatLng(Lat, Lon), 16); // 設定圖資來源

        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osm = new L.TileLayer(osmUrl, {
          minZoom: 8
        });
        map.addLayer(osm);
        L.marker([Lat, Lon]).addTo(map);
      },
      error: function error(err) {
        console.log(err);
      }
    });
    funAxaj(detailedSwiperUrl, ".detailedContent");
  }

  function funPag(data, name, pagecontentName) {
    var container = $('#pagination-' + name);
    var options = {
      dataSource: data,
      //內容資料
      totalNumber: data.length,
      //条目总数
      //totalNumberLocator,/*远程获取 totalNumber，用于异步分页，只在 dataSource 为字符串时可用注意: 指定 totalNumberLocator 后将会忽略 totalNumber*/
      //       //showFirstOnEllipsisShow:true, //是否在有省略号时显示开始页码
      //       //showLastOnEllipsisShow:true,//是否在有省略号时显示结束页码
      pageSize: 10,
      //每頁資料個數
      pageNumber: 1,
      //指定初始化时加载哪一页的数据
      pageRange: 2,
      //可见的页码范围
      callback: function callback(response, pagination) {
        //每次翻页时的回调，callback 会传入两个参数
        window.console && console.log(response, pagination);
        var data1 = "";
        $.each(response, function (key, item) {
          if (name == "featured") {
            data1 += "<div class=\"col\">\n                  <div class=\"card mb-3 shadow\">\n                    <div class=\"row g-0 flex-column flex-lg-row h-100\">\n                      <div class=\"col-12 col-lg-6\"><img src=\"".concat(item.Picture.PictureUrl1, "\" alt=\"\" class=\"img-fluid h-100 w-100 img-cover\">\n                    </div>\n                      <div class=\"col-12 col-lg-6\">\n                        <div class=\"card-body d-flex flex-column h-100\">\n                          <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                          <p class=\"card-text\"><b class=\"fw-bolder fs-6 me-1\">\u6642\u9593</b><span class=\"fs-7\">").concat(item.StartTime.substring(0, 10), "~").concat(item.EndTime.substring(0, 10), "</span>\n                          </p>\n                          <p class=\"card-text\"><b class=\"fw-bolder  fs-6 me-1\">\u5730\u9EDE</b><span class=\"fs-7\">").concat(item.Location, "</span></p>\n                          <p class=\"card-text text-break lh-base mb-5 d-none d-lg-block\">\n                          ").concat(item.Description.substring(0, 30), "..\n                          </p>\n                          <a href=\"detailed.html?id=").concat(item.ID, "\"\n                            class=\"btn btn-lblue rounded-pill  text-white fw-bold mt-auto fs-7 fs-sm-6 px-4 px-sm-5 py-2 align-self-end\"\">\u6D3B\u52D5\u8A73\u60C5</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>");
          } else if (name == "attractions") {
            data1 += "<div class=\"col\">\n                  <div class=\"card mb-3 shadow\">\n                    <div class=\"row g-0 flex-column flex-lg-row h-100\">\n                      <div class=\"col-12 col-lg-6\"><img src=\"".concat(item.Picture.PictureUrl1, "\" alt=\"\" class=\"img-fluid h-100 w-100 img-cover\">\n                    </div>\n                      <div class=\"col-12 col-lg-6\">\n                        <div class=\"card-body d-flex flex-column h-100\">\n                          <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                          <p class=\"card-text\"><b class=\"fw-bolder fs-6 me-1\">\u958B\u653E\u6642\u9593</b><span class=\"fs-7\">").concat(item.OpenTime, "</span>\n                          </p>\n                          <p class=\"card-text\"><b class=\"fw-bolder  fs-6 me-1\">\u5730\u9EDE</b><span class=\"fs-7\">").concat(item.Location || item.Address, "</span></p>\n                          <p class=\"card-text text-break lh-base mb-5 d-none d-lg-block\">\n                          ").concat(item.DescriptionDetail.substring(0, 30), "..\n                          </p>\n                          <a href=\"detailed.html?id=").concat(item.ID, "\"\n                            class=\"btn btn-lblue rounded-pill  text-white fw-bold mt-auto fs-7 fs-sm-6 px-4 px-sm-5 py-2 align-self-end\" >\u98A8\u666F\u8A73\u60C5</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>");
          } else if (name == "foods") {
            data1 += "<div class=\"col\">\n                  <div class=\"card mb-3 shadow\">\n                    <div class=\"row g-0 flex-column flex-lg-row h-100\">\n                      <div class=\"col-12 col-lg-6\"><img src=\"".concat(item.Picture.PictureUrl1, "\" alt=\"\" class=\"img-fluid h-100 w-100 img-cover\">\n                    </div>\n                      <div class=\"col-12 col-lg-6\">\n                        <div class=\"card-body d-flex flex-column h-100\">\n                          <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                          <p class=\"card-text\"><b class=\"fw-bolder fs-6 me-1\">\u958B\u653E\u6642\u9593</b><span class=\"fs-7\">").concat(item.OpenTime, "</span>\n                          </p>\n                          <p class=\"card-text\"><b class=\"fw-bolder  fs-6 me-1\">\u5730\u9EDE</b><span class=\"fs-7\">").concat(item.City || item.Address, "</span></p>\n                          <p class=\"card-text text-break lh-base mb-5 d-none d-lg-block\">\n                          ").concat(item.Description.substring(0, 30), "..\n                          </p>\n                          <a href=\"detailed.html?id=").concat(item.ID, "\"\n                            class=\"btn btn-lblue rounded-pill  text-white fw-bold mt-auto fs-7 fs-sm-6 px-4 px-sm-5 py-2 align-self-end\" >\u7F8E\u98DF\u8A73\u60C5</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>");
          } else if (name == "hotel") {
            data1 += "<div class=\"col\">\n                  <div class=\"card mb-3 shadow\">\n                    <div class=\"row g-0 flex-column flex-lg-row h-100\">\n                      <div class=\"col-12 col-lg-6\"><img src=\"".concat(item.Picture.PictureUrl1, "\" alt=\"\" class=\"img-fluid h-100 w-100 img-cover\">\n                    </div>\n                      <div class=\"col-12 col-lg-6\">\n                        <div class=\"card-body d-flex flex-column h-100\">\n                          <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                          <p class=\"card-text\"><b class=\"fw-bolder fs-6 me-1\">\u96FB\u8A71</b><span class=\"fs-7\">").concat(item.Phone, "</span>\n                          </p>\n                          <p class=\"card-text\"><b class=\"fw-bolder  fs-6 me-1\">\u5730\u9EDE</b><span class=\"fs-7\">").concat(item.City || item.Address, "</span></p>\n                          <p class=\"card-text text-break lh-base mb-5 d-none d-lg-block\">\n                          ").concat(item.Description.substring(0, 20), "..\n                          </p>\n                          <a href=\"detailed.html?id=").concat(item.ID, "\"\n                            class=\"btn btn-lblue rounded-pill  text-white fw-bold mt-auto fs-7 fs-sm-6 px-4 px-sm-5 py-2 align-self-end\" >\u98EF\u5E97\u8A73\u60C5</a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </div>");
          }
        });
        $(pagecontentName).html(data1);
      }
    };
    container.pagination(options);
  }

  ;

  function funAxaj(url) {
    var ClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var pagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var pagcentent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var Subtopic = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    $.ajax({
      //jQuery ajax遠端資料讀取
      url: url,
      // headers: getAuthorizationHeader(),
      method: 'GET',
      dataType: 'json',
      async: true,
      success: function success(res) {
        var html = "";

        if (ClassName == ".featuredContent") {
          $.each(res, function (key, item) {
            html += "<div class=\"col\">\n            <div class=\"card mb-3 shadow\">\n              <div class=\"row g-0 flex-column flex-lg-row h-100\">\n                <div class=\"col-12 col-lg-6 \" >\n                <img src=\"".concat(item.Picture.PictureUrl1, "\" alt=\"\"\n                  class=\"img-fluid h-100 w-100 img-cover\">\n                </div>\n                <div class=\"col-12 col-lg-6\">\n                  <div class=\"card-body d-flex flex-column\">\n                    <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                    <p class=\"card-text\"><b class=\"fw-bolder h6 me-1\">\u6642\u9593</b><span class=\"fz-sm\">").concat(item.StartTime.substring(0, 10), "~").concat(item.EndTime.substring(0, 10), "</span>\n                    </p>\n                    <p class=\"card-text\"><b class=\"fw-bolder  h6 me-1\">\u5730\u9EDE</b><span class=\"fz-sm\">").concat(item.Location, "</span></p>\n                    <p class=\"card-text text-break lh-base mb-5\">").concat(item.Description.substring(0, 30), "....\n                      </p>\n                      <a href=\"detailed.html?id=").concat(item.ID, "\"\n                      class=\"btn btn-lblue rounded-pill  text-white fw-bold mt-auto fs-7 fs-sm-6 px-4 px-sm-5 py-2 align-self-end\"\">\u6D3B\u52D5\u8A73\u60C5</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>");
          });
          $(ClassName).html(html);
        } else if (ClassName == ".ScenicSpotContent") {
          $.each(res, function (key, item) {
            html += "<div class=\"swiper-slide h-auto\">\n            <div class=\"card\">\n              <img src=\"".concat(item.Picture.PictureUrl1, "\" class=\"card-img-top\" alt=\"...\" >\n              <div class=\"card-body mt-3 d-flex flex-column\">\n                <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                <p class=\"card-text mt-1\"><i class=\"bi bi-geo-alt-fill text-lblue me-2\"></i><span class=\"text-lblue\">").concat(item.Address, "</span></p>\n              </div>\n            </div>\n          </div>");
          });
          $(ClassName).html(html);
        } else if (ClassName == ".recommendedContent") {
          $.each(res, function (key, item) {
            html += "<div class=\"swiper-slide h-auto\">\n            <div class=\"card\">\n              <img src=\"".concat(item.Picture.PictureUrl1, "\" class=\"card-img-top img-cover\" alt=\"...\" style=\"height:194px;\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                <p class=\"card-text mt-1\"><i class=\"bi bi-geo-alt-fill text-lblue me-2\"></i><span class=\"text-lblue\">").concat(item.City, "</span></p>\n              </div>\n            </div>\n          </div>");
          });
          $(ClassName).html(html);
        } else if (ClassName == ".detailedContent") {
          $.each(res, function (key, item) {
            html += "<div class=\"swiper-slide h-auto\">\n            <div class=\"card\">\n              <img src=\"".concat(item.Picture.PictureUrl1, "\" class=\"card-img-top\" alt=\"...\" >\n              <div class=\"card-body mt-3 d-flex flex-column\">\n                <h5 class=\"card-title fw-bolder\">").concat(item.Name, "</h5>\n                <p class=\"card-text mt-1\"><i class=\"bi bi-geo-alt-fill text-lblue me-2\"></i><span class=\"text-lblue\">").concat(item.Address, "</span></p>\n              </div>\n            </div>\n          </div>");
          });
          $(ClassName).html(html);
        } else if (pagName == "featured") {
          funPag(res, pagName, pagcentent);

          if (Subtopic != "") {
            var fliterdata = [];

            switch (Subtopic) {
              case '近期活動':
                fliterdata = res.filter(function (item) {
                  return item.StartTime.substring(5, 7).match(String(Today.getMonth() + 1));
                });
                break;

              case '節慶活動':
                fliterdata = res.filter(function (item) {
                  return item.Class1 == '節慶活動';
                });
                break;

              case '原住民':
                fliterdata = res.filter(function (item) {
                  return item.ActivityName.match('原住民');
                });
                break;

              default:
                console.log('沒有符合的條件');
            }

            funPag(fliterdata, pagName, pagcentent);
          }
        } else if (pagName == "attractions") {
          funPag(res, pagName, pagcentent);

          if (Subtopic != "") {
            var fliterdata = [];

            switch (Subtopic) {
              case '自然風景類':
                fliterdata = res.filter(function (item) {
                  return item.Class1 == '自然風景類' || item.Class2 == '自然風景類' || item.Class3 == '自然風景類';
                });
                break;

              case '遊憩類':
                fliterdata = res.filter(function (item) {
                  return item.Class1 == '遊憩類' || item.Class2 == '遊憩類' || item.Class3 == '遊憩類';
                });
                break;

              case '其他':
                fliterdata = res.filter(function (item) {
                  return item.Class1 == '其他' || item.Class2 == '其他' || item.Class3 == '其他';
                });
                break;

              default:
                console.log('沒有符合的條件');
            }

            funPag(fliterdata, pagName, pagcentent);
          }
        } else if (pagName == "foods") {
          funPag(res, pagName, pagcentent);

          if (Subtopic != "") {
            var fliterdata = [];

            switch (Subtopic) {
              case '異國料理':
                fliterdata = res.filter(function (item) {
                  return item.Class == '異國料理';
                });
                break;

              case '地方特產':
                fliterdata = res.filter(function (item) {
                  return item.Class == '地方特產';
                });
                break;

              case '中式美食':
                fliterdata = res.filter(function (item) {
                  return item.Class == '中式美食';
                });
                break;

              case '伴手禮':
                fliterdata = res.filter(function (item) {
                  return item.Class == '伴手禮';
                });
                break;

              case '甜點冰品':
                fliterdata = res.filter(function (item) {
                  return item.Class == '甜點冰品';
                });
                break;

              case '其他':
                fliterdata = res.filter(function (item) {
                  return item.Class == '其他';
                });
                break;

              default:
                console.log('沒有符合的條件');
            }

            funPag(fliterdata, pagName, pagcentent);
          }
        } else if (pagName == "hotel") {
          funPag(res, pagName, pagcentent);

          if (Subtopic != "") {
            var fliterdata = [];

            switch (Subtopic) {
              case '民宿':
                fliterdata = res.filter(function (item) {
                  return item.Class == '民宿';
                });
                break;

              case '一般旅館':
                fliterdata = res.filter(function (item) {
                  return item.Class == '一般旅館';
                });
                break;

              case '國際觀光旅館':
                fliterdata = res.filter(function (item) {
                  return item.Class == '國際觀光旅館';
                });
                break;

              case '一般觀光旅館':
                fliterdata = res.filter(function (item) {
                  return item.Class == '一般觀光旅館';
                });
                break;

              default:
                console.log('沒有符合的條件');
            }

            funPag(fliterdata, pagName, pagcentent);
          }
        }
      },
      error: function error(err) {
        console.log(err);
      }
    });
  }
});

function funSwiper(name) {
  var swiper = new Swiper(name, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  });
}

;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * pagination.js 2.1.5
 * A jQuery plugin to provide simple yet fully customisable pagination.
 * https://github.com/superRaytin/paginationjs
 *
 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
 */
(function (global, $) {
  if (typeof $ === 'undefined') {
    throwError('Pagination requires jQuery.');
  }

  var pluginName = 'pagination';
  var pluginHookMethod = 'addHook';
  var eventPrefix = '__pagination-'; // Conflict, use backup

  if ($.fn.pagination) {
    pluginName = 'pagination2';
  }

  $.fn[pluginName] = function (options) {
    if (typeof options === 'undefined') {
      return this;
    }

    var container = $(this);
    var attributes = $.extend({}, $.fn[pluginName].defaults, options);
    var pagination = {
      initialize: function initialize() {
        var self = this; // Cache attributes of current instance

        if (!container.data('pagination')) {
          container.data('pagination', {});
        }

        if (self.callHook('beforeInit') === false) return; // Pagination has been initialized, destroy it

        if (container.data('pagination').initialized) {
          $('.paginationjs', container).remove();
        } // Whether to disable Pagination at the initialization


        self.disabled = !!attributes.disabled; // Model will be passed to the callback function

        var model = self.model = {
          pageRange: attributes.pageRange,
          pageSize: attributes.pageSize
        }; // dataSource`s type is unknown, parse it to find true data

        self.parseDataSource(attributes.dataSource, function (dataSource) {
          // Currently in asynchronous mode
          self.isAsync = Helpers.isString(dataSource);

          if (Helpers.isArray(dataSource)) {
            model.totalNumber = attributes.totalNumber = dataSource.length;
          } // Currently in asynchronous mode and a totalNumberLocator is specified


          self.isDynamicTotalNumber = self.isAsync && attributes.totalNumberLocator;
          var el = self.render(true); // Add extra className to the pagination element

          if (attributes.className) {
            el.addClass(attributes.className);
          }

          model.el = el; // Append/prepend pagination element to the container

          container[attributes.position === 'bottom' ? 'append' : 'prepend'](el); // Bind events

          self.observer(); // Pagination is currently initialized

          container.data('pagination').initialized = true; // Will be invoked after initialized

          self.callHook('afterInit', el);
        });
      },
      render: function render(isBoot) {
        var self = this;
        var model = self.model;
        var el = model.el || $('<div class="paginationjs"></div>');
        var isForced = isBoot !== true;
        self.callHook('beforeRender', isForced);
        var currentPage = model.pageNumber || attributes.pageNumber;
        var pageRange = attributes.pageRange || 0;
        var totalPage = self.getTotalPage();
        var rangeStart = currentPage - pageRange;
        var rangeEnd = currentPage + pageRange;

        if (rangeEnd > totalPage) {
          rangeEnd = totalPage;
          rangeStart = totalPage - pageRange * 2;
          rangeStart = rangeStart < 1 ? 1 : rangeStart;
        }

        if (rangeStart <= 1) {
          rangeStart = 1;
          rangeEnd = Math.min(pageRange * 2 + 1, totalPage);
        }

        el.html(self.generateHTML({
          currentPage: currentPage,
          pageRange: pageRange,
          rangeStart: rangeStart,
          rangeEnd: rangeEnd
        })); // There is only one page

        if (attributes.hideWhenLessThanOnePage) {
          el[totalPage <= 1 ? 'hide' : 'show']();
        }

        self.callHook('afterRender', isForced);
        return el;
      },
      // Generate HTML of the pages
      generatePageNumbersHTML: function generatePageNumbersHTML(args) {
        var self = this;
        var currentPage = args.currentPage;
        var totalPage = self.getTotalPage();
        var rangeStart = args.rangeStart;
        var rangeEnd = args.rangeEnd;
        var html = '';
        var i;
        var pageLink = attributes.pageLink;
        var ellipsisText = attributes.ellipsisText;
        var classPrefix = attributes.classPrefix;
        var activeClassName = attributes.activeClassName;
        var disableClassName = attributes.disableClassName; // Disable page range, display all the pages

        if (attributes.pageRange === null) {
          for (i = 1; i <= totalPage; i++) {
            if (i == currentPage) {
              html += '<li class="' + classPrefix + '-page J-paginationjs-page ' + activeClassName + '" data-num="' + i + '"><a>' + i + '<\/a><\/li>';
            } else {
              html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>';
            }
          }

          return html;
        }

        if (rangeStart <= 3) {
          for (i = 1; i < rangeStart; i++) {
            if (i == currentPage) {
              html += '<li class="' + classPrefix + '-page J-paginationjs-page ' + activeClassName + '" data-num="' + i + '"><a>' + i + '<\/a><\/li>';
            } else {
              html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>';
            }
          }
        } else {
          if (attributes.showFirstOnEllipsisShow) {
            html += '<li class="' + classPrefix + '-page ' + classPrefix + '-first J-paginationjs-page" data-num="1"><a href="' + pageLink + '">1<\/a><\/li>';
          }

          html += '<li class="' + classPrefix + '-ellipsis ' + disableClassName + '"><a>' + ellipsisText + '<\/a><\/li>';
        }

        for (i = rangeStart; i <= rangeEnd; i++) {
          if (i == currentPage) {
            html += '<li class="' + classPrefix + '-page J-paginationjs-page ' + activeClassName + '" data-num="' + i + '"><a>' + i + '<\/a><\/li>';
          } else {
            html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>';
          }
        }

        if (rangeEnd >= totalPage - 2) {
          for (i = rangeEnd + 1; i <= totalPage; i++) {
            html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>';
          }
        } else {
          html += '<li class="' + classPrefix + '-ellipsis ' + disableClassName + '"><a>' + ellipsisText + '<\/a><\/li>';

          if (attributes.showLastOnEllipsisShow) {
            html += '<li class="' + classPrefix + '-page ' + classPrefix + '-last J-paginationjs-page" data-num="' + totalPage + '"><a href="' + pageLink + '">' + totalPage + '<\/a><\/li>';
          }
        }

        return html;
      },
      // Generate HTML content from the template
      generateHTML: function generateHTML(args) {
        var self = this;
        var currentPage = args.currentPage;
        var totalPage = self.getTotalPage();
        var totalNumber = self.getTotalNumber();
        var showPrevious = attributes.showPrevious;
        var showNext = attributes.showNext;
        var showPageNumbers = attributes.showPageNumbers;
        var showNavigator = attributes.showNavigator;
        var showGoInput = attributes.showGoInput;
        var showGoButton = attributes.showGoButton;
        var pageLink = attributes.pageLink;
        var prevText = attributes.prevText;
        var nextText = attributes.nextText;
        var goButtonText = attributes.goButtonText;
        var classPrefix = attributes.classPrefix;
        var disableClassName = attributes.disableClassName;
        var ulClassName = attributes.ulClassName;
        var html = '';
        var goInput = '<input type="text" class="J-paginationjs-go-pagenumber">';
        var goButton = '<input type="button" class="J-paginationjs-go-button" value="' + goButtonText + '">';
        var formattedString;
        var formatNavigator = $.isFunction(attributes.formatNavigator) ? attributes.formatNavigator(currentPage, totalPage, totalNumber) : attributes.formatNavigator;
        var formatGoInput = $.isFunction(attributes.formatGoInput) ? attributes.formatGoInput(goInput, currentPage, totalPage, totalNumber) : attributes.formatGoInput;
        var formatGoButton = $.isFunction(attributes.formatGoButton) ? attributes.formatGoButton(goButton, currentPage, totalPage, totalNumber) : attributes.formatGoButton;
        var autoHidePrevious = $.isFunction(attributes.autoHidePrevious) ? attributes.autoHidePrevious() : attributes.autoHidePrevious;
        var autoHideNext = $.isFunction(attributes.autoHideNext) ? attributes.autoHideNext() : attributes.autoHideNext;
        var header = $.isFunction(attributes.header) ? attributes.header(currentPage, totalPage, totalNumber) : attributes.header;
        var footer = $.isFunction(attributes.footer) ? attributes.footer(currentPage, totalPage, totalNumber) : attributes.footer; // Whether to display header

        if (header) {
          formattedString = self.replaceVariables(header, {
            currentPage: currentPage,
            totalPage: totalPage,
            totalNumber: totalNumber
          });
          html += formattedString;
        }

        if (showPrevious || showPageNumbers || showNext) {
          html += '<div class="paginationjs-pages">';

          if (ulClassName) {
            html += '<ul class="' + ulClassName + '">';
          } else {
            html += '<ul>';
          } // Whether to display the Previous button


          if (showPrevious) {
            if (currentPage <= 1) {
              if (!autoHidePrevious) {
                html += '<li class="' + classPrefix + '-prev ' + disableClassName + '"><a>' + prevText + '<\/a><\/li>';
              }
            } else {
              html += '<li class="' + classPrefix + '-prev J-paginationjs-previous" data-num="' + (currentPage - 1) + '" title="Previous page"><a href="' + pageLink + '">' + prevText + '<\/a><\/li>';
            }
          } // Whether to display the pages


          if (showPageNumbers) {
            html += self.generatePageNumbersHTML(args);
          } // Whether to display the Next button


          if (showNext) {
            if (currentPage >= totalPage) {
              if (!autoHideNext) {
                html += '<li class="' + classPrefix + '-next ' + disableClassName + '"><a>' + nextText + '<\/a><\/li>';
              }
            } else {
              html += '<li class="' + classPrefix + '-next J-paginationjs-next" data-num="' + (currentPage + 1) + '" title="Next page"><a href="' + pageLink + '">' + nextText + '<\/a><\/li>';
            }
          }

          html += '<\/ul><\/div>';
        } // Whether to display the navigator


        if (showNavigator) {
          if (formatNavigator) {
            formattedString = self.replaceVariables(formatNavigator, {
              currentPage: currentPage,
              totalPage: totalPage,
              totalNumber: totalNumber
            });
            html += '<div class="' + classPrefix + '-nav J-paginationjs-nav">' + formattedString + '<\/div>';
          }
        } // Whether to display the Go input


        if (showGoInput) {
          if (formatGoInput) {
            formattedString = self.replaceVariables(formatGoInput, {
              currentPage: currentPage,
              totalPage: totalPage,
              totalNumber: totalNumber,
              input: goInput
            });
            html += '<div class="' + classPrefix + '-go-input">' + formattedString + '</div>';
          }
        } // Whether to display the Go button


        if (showGoButton) {
          if (formatGoButton) {
            formattedString = self.replaceVariables(formatGoButton, {
              currentPage: currentPage,
              totalPage: totalPage,
              totalNumber: totalNumber,
              button: goButton
            });
            html += '<div class="' + classPrefix + '-go-button">' + formattedString + '</div>';
          }
        } // Whether to display footer


        if (footer) {
          formattedString = self.replaceVariables(footer, {
            currentPage: currentPage,
            totalPage: totalPage,
            totalNumber: totalNumber
          });
          html += formattedString;
        }

        return html;
      },
      // Find totalNumber from the remote response
      // Only available in asynchronous mode
      findTotalNumberFromRemoteResponse: function findTotalNumberFromRemoteResponse(response) {
        var self = this;
        self.model.totalNumber = attributes.totalNumberLocator(response);
      },
      // Go to the specified page
      go: function go(number, callback) {
        var self = this;
        var model = self.model;
        if (self.disabled) return;
        var pageNumber = number;
        pageNumber = parseInt(pageNumber); // Page number is out of bounds

        if (!pageNumber || pageNumber < 1) return;
        var pageSize = attributes.pageSize;
        var totalNumber = self.getTotalNumber();
        var totalPage = self.getTotalPage(); // Page number is out of bounds

        if (totalNumber > 0) {
          if (pageNumber > totalPage) return;
        } // Pick data fragment in synchronous mode


        if (!self.isAsync) {
          render(self.getDataFragment(pageNumber));
          return;
        }

        var postData = {};
        var alias = attributes.alias || {};
        postData[alias.pageSize ? alias.pageSize : 'pageSize'] = pageSize;
        postData[alias.pageNumber ? alias.pageNumber : 'pageNumber'] = pageNumber;
        var ajaxParams = $.isFunction(attributes.ajax) ? attributes.ajax() : attributes.ajax;
        var formatAjaxParams = {
          type: 'get',
          cache: false,
          data: {},
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          dataType: 'json',
          async: true
        };
        $.extend(true, formatAjaxParams, ajaxParams);
        $.extend(formatAjaxParams.data, postData);
        formatAjaxParams.url = attributes.dataSource;

        formatAjaxParams.success = function (response) {
          if (self.isDynamicTotalNumber) {
            self.findTotalNumberFromRemoteResponse(response);
          } else {
            self.model.totalNumber = attributes.totalNumber;
          }

          var finalData = self.filterDataByLocator(response);
          render(finalData);
        };

        formatAjaxParams.error = function (jqXHR, textStatus, errorThrown) {
          attributes.formatAjaxError && attributes.formatAjaxError(jqXHR, textStatus, errorThrown);
          self.enable();
        };

        self.disable();
        $.ajax(formatAjaxParams);

        function render(data) {
          // Will be invoked before paging
          if (self.callHook('beforePaging', pageNumber) === false) return false; // Pagination direction

          model.direction = typeof model.pageNumber === 'undefined' ? 0 : pageNumber > model.pageNumber ? 1 : -1;
          model.pageNumber = pageNumber;
          self.render();

          if (self.disabled && self.isAsync) {
            // enable pagination
            self.enable();
          } // cache model data


          container.data('pagination').model = model; // format result data before callback invoked

          if (attributes.formatResult) {
            var cloneData = $.extend(true, [], data);

            if (!Helpers.isArray(data = attributes.formatResult(cloneData))) {
              data = cloneData;
            }
          }

          container.data('pagination').currentPageData = data; // invoke callback

          self.doCallback(data, callback);
          self.callHook('afterPaging', pageNumber); // pageNumber now is the first page

          if (pageNumber == 1) {
            self.callHook('afterIsFirstPage');
          } // pageNumber now is the last page


          if (pageNumber == self.getTotalPage()) {
            self.callHook('afterIsLastPage');
          }
        }
      },
      doCallback: function doCallback(data, customCallback) {
        var self = this;
        var model = self.model;

        if ($.isFunction(customCallback)) {
          customCallback(data, model);
        } else if ($.isFunction(attributes.callback)) {
          attributes.callback(data, model);
        }
      },
      destroy: function destroy() {
        // Before destroy
        if (this.callHook('beforeDestroy') === false) return;
        this.model.el.remove();
        container.off(); // Remove style element

        $('#paginationjs-style').remove(); // After destroyed

        this.callHook('afterDestroy');
      },
      previous: function previous(callback) {
        this.go(this.model.pageNumber - 1, callback);
      },
      next: function next(callback) {
        this.go(this.model.pageNumber + 1, callback);
      },
      disable: function disable() {
        var self = this;
        var source = self.isAsync ? 'async' : 'sync'; // Before disabled

        if (self.callHook('beforeDisable', source) === false) return;
        self.disabled = true;
        self.model.disabled = true; // After disabled

        self.callHook('afterDisable', source);
      },
      enable: function enable() {
        var self = this;
        var source = self.isAsync ? 'async' : 'sync'; // Before enabled

        if (self.callHook('beforeEnable', source) === false) return;
        self.disabled = false;
        self.model.disabled = false; // After enabled

        self.callHook('afterEnable', source);
      },
      refresh: function refresh(callback) {
        this.go(this.model.pageNumber, callback);
      },
      show: function show() {
        var self = this;
        if (self.model.el.is(':visible')) return;
        self.model.el.show();
      },
      hide: function hide() {
        var self = this;
        if (!self.model.el.is(':visible')) return;
        self.model.el.hide();
      },
      // Parse variables in the template
      replaceVariables: function replaceVariables(template, variables) {
        var formattedString;

        for (var key in variables) {
          var value = variables[key];
          var regexp = new RegExp('<%=\\s*' + key + '\\s*%>', 'img');
          formattedString = (formattedString || template).replace(regexp, value);
        }

        return formattedString;
      },
      // Get data fragment
      getDataFragment: function getDataFragment(number) {
        var pageSize = attributes.pageSize;
        var dataSource = attributes.dataSource;
        var totalNumber = this.getTotalNumber();
        var start = pageSize * (number - 1) + 1;
        var end = Math.min(number * pageSize, totalNumber);
        return dataSource.slice(start - 1, end);
      },
      // Get total number
      getTotalNumber: function getTotalNumber() {
        return this.model.totalNumber || attributes.totalNumber || 0;
      },
      // Get total page
      getTotalPage: function getTotalPage() {
        return Math.ceil(this.getTotalNumber() / attributes.pageSize);
      },
      // Get locator
      getLocator: function getLocator(locator) {
        var result;

        if (typeof locator === 'string') {
          result = locator;
        } else if ($.isFunction(locator)) {
          result = locator();
        } else {
          throwError('"locator" is incorrect. (String | Function)');
        }

        return result;
      },
      // Filter data by "locator"
      filterDataByLocator: function filterDataByLocator(dataSource) {
        var locator = this.getLocator(attributes.locator);
        var filteredData; // Datasource is an Object, use "locator" to locate the true data

        if (Helpers.isObject(dataSource)) {
          try {
            $.each(locator.split('.'), function (index, item) {
              filteredData = (filteredData ? filteredData : dataSource)[item];
            });
          } catch (e) {}

          if (!filteredData) {
            throwError('dataSource.' + locator + ' is undefined.');
          } else if (!Helpers.isArray(filteredData)) {
            throwError('dataSource.' + locator + ' must be an Array.');
          }
        }

        return filteredData || dataSource;
      },
      // Parse dataSource
      parseDataSource: function parseDataSource(dataSource, callback) {
        var self = this;

        if (Helpers.isObject(dataSource)) {
          callback(attributes.dataSource = self.filterDataByLocator(dataSource));
        } else if (Helpers.isArray(dataSource)) {
          callback(attributes.dataSource = dataSource);
        } else if ($.isFunction(dataSource)) {
          attributes.dataSource(function (data) {
            if (!Helpers.isArray(data)) {
              throwError('The parameter of "done" Function should be an Array.');
            }

            self.parseDataSource.call(self, data, callback);
          });
        } else if (typeof dataSource === 'string') {
          if (/^https?|file:/.test(dataSource)) {
            attributes.ajaxDataType = 'jsonp';
          }

          callback(dataSource);
        } else {
          throwError('Unexpected type of "dataSource".');
        }
      },
      callHook: function callHook(hook) {
        var paginationData = container.data('pagination');
        var result;
        var args = Array.prototype.slice.apply(arguments);
        args.shift();

        if (attributes[hook] && $.isFunction(attributes[hook])) {
          if (attributes[hook].apply(global, args) === false) {
            result = false;
          }
        }

        if (paginationData.hooks && paginationData.hooks[hook]) {
          $.each(paginationData.hooks[hook], function (index, item) {
            if (item.apply(global, args) === false) {
              result = false;
            }
          });
        }

        return result !== false;
      },
      observer: function observer() {
        var self = this;
        var el = self.model.el; // Go to specified page number

        container.on(eventPrefix + 'go', function (event, pageNumber, done) {
          pageNumber = parseInt($.trim(pageNumber));
          if (!pageNumber) return;

          if (!$.isNumeric(pageNumber)) {
            throwError('"pageNumber" is incorrect. (Number)');
          }

          self.go(pageNumber, done);
        }); // Page number button click

        el.delegate('.J-paginationjs-page', 'click', function (event) {
          var current = $(event.currentTarget);
          var pageNumber = $.trim(current.attr('data-num'));
          if (!pageNumber || current.hasClass(attributes.disableClassName) || current.hasClass(attributes.activeClassName)) return; // Before page button clicked

          if (self.callHook('beforePageOnClick', event, pageNumber) === false) return false;
          self.go(pageNumber); // After page button clicked

          self.callHook('afterPageOnClick', event, pageNumber);
          if (!attributes.pageLink) return false;
        }); // Previous button click

        el.delegate('.J-paginationjs-previous', 'click', function (event) {
          var current = $(event.currentTarget);
          var pageNumber = $.trim(current.attr('data-num'));
          if (!pageNumber || current.hasClass(attributes.disableClassName)) return; // Before previous clicked

          if (self.callHook('beforePreviousOnClick', event, pageNumber) === false) return false;
          self.go(pageNumber); // After previous clicked

          self.callHook('afterPreviousOnClick', event, pageNumber);
          if (!attributes.pageLink) return false;
        }); // Next button click

        el.delegate('.J-paginationjs-next', 'click', function (event) {
          var current = $(event.currentTarget);
          var pageNumber = $.trim(current.attr('data-num'));
          if (!pageNumber || current.hasClass(attributes.disableClassName)) return; // Before next clicked

          if (self.callHook('beforeNextOnClick', event, pageNumber) === false) return false;
          self.go(pageNumber); // After next clicked

          self.callHook('afterNextOnClick', event, pageNumber);
          if (!attributes.pageLink) return false;
        }); // Go button click

        el.delegate('.J-paginationjs-go-button', 'click', function (event) {
          var pageNumber = $('.J-paginationjs-go-pagenumber', el).val(); // Before Go button clicked

          if (self.callHook('beforeGoButtonOnClick', event, pageNumber) === false) return false;
          container.trigger(eventPrefix + 'go', pageNumber); // After Go button clicked

          self.callHook('afterGoButtonOnClick', event, pageNumber);
        }); // go input enter

        el.delegate('.J-paginationjs-go-pagenumber', 'keyup', function (event) {
          if (event.which === 13) {
            var pageNumber = $(event.currentTarget).val(); // Before Go input enter

            if (self.callHook('beforeGoInputOnEnter', event, pageNumber) === false) return false;
            container.trigger(eventPrefix + 'go', pageNumber); // Regains focus

            $('.J-paginationjs-go-pagenumber', el).focus(); // After Go input enter

            self.callHook('afterGoInputOnEnter', event, pageNumber);
          }
        }); // Previous page

        container.on(eventPrefix + 'previous', function (event, done) {
          self.previous(done);
        }); // Next page

        container.on(eventPrefix + 'next', function (event, done) {
          self.next(done);
        }); // Disable

        container.on(eventPrefix + 'disable', function () {
          self.disable();
        }); // Enable

        container.on(eventPrefix + 'enable', function () {
          self.enable();
        }); // Refresh

        container.on(eventPrefix + 'refresh', function (event, done) {
          self.refresh(done);
        }); // Show

        container.on(eventPrefix + 'show', function () {
          self.show();
        }); // Hide

        container.on(eventPrefix + 'hide', function () {
          self.hide();
        }); // Destroy

        container.on(eventPrefix + 'destroy', function () {
          self.destroy();
        }); // Whether to load the default page

        var validTotalPage = Math.max(self.getTotalPage(), 1);
        var defaultPageNumber = attributes.pageNumber; // Default pageNumber should be 1 when totalNumber is dynamic

        if (self.isDynamicTotalNumber) {
          defaultPageNumber = 1;
        }

        if (attributes.triggerPagingOnInit) {
          container.trigger(eventPrefix + 'go', Math.min(defaultPageNumber, validTotalPage));
        }
      }
    }; // Pagination has been initialized

    if (container.data('pagination') && container.data('pagination').initialized === true) {
      // Handle events
      if ($.isNumeric(options)) {
        // eg: container.pagination(5)
        container.trigger.call(this, eventPrefix + 'go', options, arguments[1]);
        return this;
      } else if (typeof options === 'string') {
        var args = Array.prototype.slice.apply(arguments);
        args[0] = eventPrefix + args[0];

        switch (options) {
          case 'previous':
          case 'next':
          case 'go':
          case 'disable':
          case 'enable':
          case 'refresh':
          case 'show':
          case 'hide':
          case 'destroy':
            container.trigger.apply(this, args);
            break;
          // Get selected page number

          case 'getSelectedPageNum':
            if (container.data('pagination').model) {
              return container.data('pagination').model.pageNumber;
            } else {
              return container.data('pagination').attributes.pageNumber;
            }

          // Get total page

          case 'getTotalPage':
            return Math.ceil(container.data('pagination').model.totalNumber / container.data('pagination').model.pageSize);
          // Get data of selected page

          case 'getSelectedPageData':
            return container.data('pagination').currentPageData;
          // Whether pagination has been disabled

          case 'isDisabled':
            return container.data('pagination').model.disabled === true;

          default:
            throwError('Unknown action: ' + options);
        }

        return this;
      } else {
        // Uninstall the old instance before initializing a new one
        uninstallPlugin(container);
      }
    } else {
      if (!Helpers.isObject(options)) throwError('Illegal options');
    } // Check parameters


    parameterChecker(attributes);
    pagination.initialize();
    return this;
  }; // Instance defaults


  $.fn[pluginName].defaults = {
    // Data source
    // Array | String | Function | Object
    //dataSource: '',
    // String | Function
    //locator: 'data',
    // Find totalNumber from remote response, the totalNumber will be ignored when totalNumberLocator is specified
    // Function
    //totalNumberLocator: function() {},
    // Total entries
    totalNumber: 0,
    // Default page
    pageNumber: 1,
    // entries of per page
    pageSize: 10,
    // Page range (pages on both sides of the current page)
    pageRange: 2,
    // Whether to display the 'Previous' button
    showPrevious: true,
    // Whether to display the 'Next' button
    showNext: true,
    // Whether to display the page buttons
    showPageNumbers: true,
    showNavigator: false,
    // Whether to display the 'Go' input
    showGoInput: false,
    // Whether to display the 'Go' button
    showGoButton: false,
    // Page link
    pageLink: '',
    // 'Previous' text
    prevText: '&laquo;',
    // 'Next' text
    nextText: '&raquo;',
    // Ellipsis text
    ellipsisText: '...',
    // 'Go' button text
    goButtonText: 'Go',
    // Additional className for Pagination element
    //className: '',
    classPrefix: 'paginationjs',
    // Default active class
    activeClassName: 'active',
    // Default disable class
    disableClassName: 'disabled',
    //ulClassName: '',
    // Whether to insert inline style
    inlineStyle: true,
    formatNavigator: '<%= currentPage %> / <%= totalPage %>',
    formatGoInput: '<%= input %>',
    formatGoButton: '<%= button %>',
    // Pagination element's position in the container
    position: 'bottom',
    // Auto hide previous button when current page is the first page
    autoHidePrevious: false,
    // Auto hide next button when current page is the last page
    autoHideNext: false,
    //header: '',
    //footer: '',
    // Aliases for custom pagination parameters
    //alias: {},
    // Whether to trigger pagination at initialization
    triggerPagingOnInit: true,
    // Whether to hide pagination when less than one page
    hideWhenLessThanOnePage: false,
    showFirstOnEllipsisShow: true,
    showLastOnEllipsisShow: true,
    // Pagination callback
    callback: function callback() {}
  }; // Hook register

  $.fn[pluginHookMethod] = function (hook, callback) {
    if (arguments.length < 2) {
      throwError('Missing argument.');
    }

    if (!$.isFunction(callback)) {
      throwError('callback must be a function.');
    }

    var container = $(this);
    var paginationData = container.data('pagination');

    if (!paginationData) {
      container.data('pagination', {});
      paginationData = container.data('pagination');
    }

    !paginationData.hooks && (paginationData.hooks = {}); //paginationData.hooks[hook] = callback;

    paginationData.hooks[hook] = paginationData.hooks[hook] || [];
    paginationData.hooks[hook].push(callback);
  }; // Static method


  $[pluginName] = function (selector, options) {
    if (arguments.length < 2) {
      throwError('Requires two parameters.');
    }

    var container; // 'selector' is a jQuery object

    if (typeof selector !== 'string' && selector instanceof jQuery) {
      container = selector;
    } else {
      container = $(selector);
    }

    if (!container.length) return;
    container.pagination(options);
    return container;
  }; // ============================================================
  // helpers
  // ============================================================


  var Helpers = {}; // Throw error

  function throwError(content) {
    throw new Error('Pagination: ' + content);
  } // Check parameters


  function parameterChecker(args) {
    if (!args.dataSource) {
      throwError('"dataSource" is required.');
    }

    if (typeof args.dataSource === 'string') {
      if (args.totalNumberLocator === undefined) {
        if (args.totalNumber === undefined) {
          throwError('"totalNumber" is required.');
        } else if (!$.isNumeric(args.totalNumber)) {
          throwError('"totalNumber" is incorrect. (Number)');
        }
      } else {
        if (!$.isFunction(args.totalNumberLocator)) {
          throwError('"totalNumberLocator" should be a Function.');
        }
      }
    } else if (Helpers.isObject(args.dataSource)) {
      if (typeof args.locator === 'undefined') {
        throwError('"dataSource" is an Object, please specify "locator".');
      } else if (typeof args.locator !== 'string' && !$.isFunction(args.locator)) {
        throwError('' + args.locator + ' is incorrect. (String | Function)');
      }
    }

    if (args.formatResult !== undefined && !$.isFunction(args.formatResult)) {
      throwError('"formatResult" should be a Function.');
    }
  } // uninstall plugin


  function uninstallPlugin(target) {
    var events = ['go', 'previous', 'next', 'disable', 'enable', 'refresh', 'show', 'hide', 'destroy']; // off events of old instance

    $.each(events, function (index, value) {
      target.off(eventPrefix + value);
    }); // reset pagination data

    target.data('pagination', {}); // remove old

    $('.paginationjs', target).remove();
  } // Object type detection


  function getObjectType(object, tmp) {
    return ((tmp = _typeof(object)) == "object" ? object == null && "null" || Object.prototype.toString.call(object).slice(8, -1) : tmp).toLowerCase();
  }

  $.each(['Object', 'Array', 'String'], function (index, name) {
    Helpers['is' + name] = function (object) {
      return getObjectType(object) === name.toLowerCase();
    };
  });
  /*
   * export via AMD or CommonJS
   * */

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return $;
    });
  }
})(void 0, window.jQuery);
//# sourceMappingURL=all.js.map
