define([
    'jquery'
], function () {
    return {
        xuanran: (function () {
            $(function () {
                $.ajax({
                    type: "get",
                    url: "http://localhost/sanmu/php/alldata.php",
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);
                        console.log(res[0].url);
                        let str = '';
                        res.forEach(ele => {
                            str +=
                                `

                            
                                <li>
                                <img src="${ele.url}" alt="">
                                <p>${ele.title}</p>
                                <p>¥${ele.price}</p>
                                </li>
                                
                            
                             `
                            
                        });
                        str = `<div class="food-1">

                        </div>` +str
                        $('.food').html(str)
                        // console.log(res)
                    }
                });
            })
        })(),

        xuanran1: (function () {
            $(function () {
                $.ajax({
                    type: "get",
                    url: "http://localhost/sanmu/php/alldata.php",
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);
                        let str = '';
                        res.forEach(ele => {
                            str +=
                                `
                                
                            
                                <li>
                                <img src="${ele.url}" alt="">
                                <p>${ele.title}</p>
                                <p>¥${ele.price}</p>
                                </li>
                                
                            
                             `
                            
                        });
                        str = `<div class="drink-1">

                        </div>` +str
                        $('.drink').html(str)
                        // console.log(res)
                    }
                });
            })
        })()
        ,
        xuanran: (function () {
            $(function () {
                $.ajax({
                    type: "get",
                    url: "http://localhost/sanmu/php/alldata.php",
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);
                        let str = '';
                        res.forEach(ele => {
                            str +=
                                `
                                
                                <li>
                                <img src="${ele.url}" alt="">
                                <p>${ele.title}</p>
                                <p>¥${ele.price}</p>
                                </li>
                                
                            
                             `
                            
                        });
                        str = `<div class="center-1">

                        </div>` +str
                        $('.center').html(str)
                        // console.log(res)
                    }
                });
            })
        })(),
        xuanran: (function () {
            $(function () {
                $.ajax({
                    type: "get",
                    url: "http://localhost/sanmu/php/alldata.php",
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                        let str = '';
                        for( var i=0;i<3;i++){
                            str +=
                            `
                            
                        <li>
                        <img src="${res[i].url}" alt="">
                        <p>${res[i].title}</p>
                        <p>¥${res[i].price}</p>
                        </li>
                        
                         `
                        }
                        str = `<div class="clear-1">

                        </div>` +str
                        $('.clear').html(str)
                        // console.log(res)
                    }
                });
            })
        })()
        ,
        xuanran: (function () {
            $(function () {
                $.ajax({
                    type: "get",
                    url: "http://localhost/sanmu/php/alldata.php",
                    dataType: "json",
                    success: function (res) {
                        console.log(res);
                        let str = '';
                        for( var i=0;i<3;i++){
                            str +=
                            `
                            
                        <li>
                        <img src="${res[i].url}" alt="">
                        <p>${res[i].title}</p>
                        <p>¥${res[i].price}</p>
                        </li>
                        
                         `
                        }
                        str = `<div class="ele-1">

                        </div>` +str
                        $('.ele').html(str)
                        // console.log(res)
                    }
                });
            })
        })()
    }
});
 

