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
                        
                        $('.food-2').html(str)
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
                        
                        $('.drink-2').html(str)
                        
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

                        $('.center-2').html(str)
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
                       
                        $('.clear-2').html(str)
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
                        
                        $('.ele-2').html(str)
                        // console.log(res)
                    }
                });
            })
        })()


    }
});
 

