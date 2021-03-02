//获取时间
(function () {
    var t = null;

    t = setTimeout(time, 1000)

    var weekdays = ['日', '一', '二', '三', '四', '五', '六']

    function time() {
        clearTimeout(t)
        var date = new Date()

        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        var weekday = weekdays[date.getDay()]
        var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

        document.querySelector('#time').innerHTML = `${year}年${month}月${day}日 星期${weekday} ${h}:${m}:${s}`

        t = setTimeout(time, 1000)
    }
})();
//雷达图
(function () {
    var myChart = echarts.init(document.querySelector('.panel-bd.radar'))
    var option = {
        radar: [
            {
                indicator: [
                    { text: '打开告警', max: 100, color: 'rgb(236, 128, 141)', },
                    { text: '松动告警', max: 100, color: 'rgb(129, 211, 248)', },
                    { text: '其他告警', max: 100, },
                    { text: '水满告警', max: 100, color: 'rgb(202, 249, 130)' }
                ],
                center: ['50%', '50%'],
                radius: "75%",
                nameGap: 10,//指示器名称和指示器轴的距离。
                name: {
                    fontSize: 12
                }
            }
        ],
        series: [
            {
                name: '井盖告警',
                type: 'radar',
                data: [
                    {
                        value: [54, 100, 58, 70],
                        name: '井盖告警',
                        areaStyle: {//雷达面积区域颜色
                            opacity: 0.9,
                            color: 'rgba(209,238,169,.8)'
                        },
                        lineStyle: {//雷达区域线框的设置
                            color: 'rgba(0,0,0,.5)'
                        },
                        symbol: 'none'//单个数据标记的图形类型，默认时circle
                    }
                ]
            }
        ]
    }
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//A区饼状图
(function () {
    var myChart = echarts.init(document.querySelector('.panel-bd div.pie1'))
    var datas = [
        ////////////////////////////////////////
        [
            { name: '水满告警', value: 59.5 },
            { name: '松动告警', value: 16.6 },
            { name: '打开告警', value: 23.8 },
        ],
    ];

    var option = {
        graphic: {//126这个文字
            type: 'text',
            top: 'center',
            left: 'center',
            style: {
                text: '126',
                fill: '#ff0000',
                fontSize: 16,
            },
            zlevel: 2//层级
        },
        series: [
            {
                name: '井盖告警',
                color: ['rgb(236, 128, 141)', 'rgb(129, 211, 248)', 'rgb(202, 249, 130)'],
                type: 'pie',
                radius: ["45%", "70%"],
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    emphasis:{
                        scaleSize:1
                    }
                },
                hoverAnimation: false,//鼠标经过不放大
                label: {
                    alignTo: 'edge',
                    formatter: '{b}{c}%\n',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    fontSize: 10,
                    padding: [0, -70]
                },
                labelLine: {
                    length: 10,
                    length2: 60,
                    maxSurfaceAngle: 80
                },
                labelLayout: function (params) {
                    var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                    var points = params.labelLinePoints;
                    // Update the end point.
                    points[2][0] = isLeft
                        ? params.labelRect.x
                        : params.labelRect.x + params.labelRect.width;

                    return {
                        labelLinePoints: points
                    };
                },
                data: datas[0]
            },
            {
                color: '#fff',
                name: '告警总数',//中间圆
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '搜索引擎' }
                ],
                hoverAnimation: false,//鼠标经过不放大
                label: {
                    show: false
                }
            }
        ]
    };

    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//B区饼状图
(function () {
    var myChart = echarts.init(document.querySelector('.panel-bd div.pie2'))
    var datas = [
        ////////////////////////////////////////
        [
            { name: '水满告警', value: 25 },
            { name: '松动告警', value: 53 },
            { name: '打开告警', value: 19 },
        ],
    ];

    var option = {
        graphic: {//126这个文字
            type: 'text',
            top: 'center',
            left: 'center',
            style: {
                text: '97',
                fill: '#ff0000',
                fontSize: 16,
            },
            zlevel: 2//层级
        },
        series: [
            {
                name: '井盖告警',
                color: ['rgb(236, 128, 141)', 'rgb(129, 211, 248)', 'rgb(202, 249, 130)'],
                type: 'pie',
                radius: ["45%", "70%"],
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                hoverAnimation: false,//鼠标经过不放大
                label: {
                    alignTo: 'edge',
                    formatter: '{b}{c}%\n',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    fontSize: 10,
                    padding: [0, -70]
                },
                labelLine: {
                    length: 10,
                    length2: 60,
                    maxSurfaceAngle: 80
                },
                labelLayout: function (params) {
                    var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                    var points = params.labelLinePoints;
                    // Update the end point.
                    points[2][0] = isLeft
                        ? params.labelRect.x
                        : params.labelRect.x + params.labelRect.width;

                    return {
                        labelLinePoints: points
                    };
                },
                data: datas[0]
            },
            {
                color: '#fff',
                name: '告警总数',//中间圆
                type: 'pie',
                radius: '45%',
                data: [
                    { value: 1048, name: '搜索引擎' }
                ],
                label: {
                    show: false
                },
                hoverAnimation: false,//鼠标经过不放大
                emphasis: {
                    scale: false
                }
            }
        ]
    };

    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//当日告警折线图
(function () {
    var dataA = [60, 100, 130, 135, 140, 150, 152, 153, 156, 157, 160, 173, 183, 190, 199, 201, 209, 160, 153, 140, 124, 102, 99]
    var dataB = [56, 96, 125, 120, 135, 145, 148, 150, 140, 160, 155, 172, 170, 185, 190, 184, 175, 135, 120, 160, 153, 120, 109]
    var total = []
    dataA.forEach((item, index) => {
        total[index] = item + dataB[index]
    })
    var myChart = echarts.init(document.querySelector('.panel-bd.line1'))
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                fontSize: 10,
                color: '#fff'
            },
            itemHeight: 8
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            }
        },
        color: ["rgb(236, 128, 141)", "rgb(202, 249, 130)", "rgb(129, 211, 248)"],
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff',
                fontSize: 10,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            }
        },
        series: [

            {
                name: '机场总区',
                type: 'line',
                lineStyle: {
                    width: 1
                },
                symbolSize: 3,
                data: total
            },
            {
                name: '机场A区',
                type: 'line',
                lineStyle: {
                    width: 1
                },
                symbolSize: 3,
                data: dataA
            },
            {
                name: '机场B区',
                type: 'line',
                stack: '总量',
                lineStyle: {
                    width: 1
                },
                symbolSize: 3,
                data: dataB
            },
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//当月告警折线图
(function () {
    var dataA = [60, 100, 130, 135, 140, 150, 152, 153, 156, 157, 160, 173, 183, 190, 199, 201, 209, 160, 153, 140, 124, 102, 99, 120, 160, 250, 260, 100, 256, 160]
    var dataB = [56, 96, 125, 120, 135, 145, 148, 150, 140, 160, 155, 172, 170, 185, 190, 184, 175, 135, 120, 160, 153, 120, 109, 200, 180, 165, 135, 199, 165, 222]
    var total = []
    dataA.forEach((item, index) => {
        total[index] = item + dataB[index]
    })
    var myChart = echarts.init(document.querySelector('.panel-bd.line2'))
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                fontSize: 10,
                color: '#fff'
            },
            itemHeight: 8
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            axisLabel: {
                color: '#fff',
                fontSize: 10,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            }
        },
        color: ["rgb(236, 128, 141)", "rgb(202, 249, 130)", "rgb(129, 211, 248)"],
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff',
                fontSize: 10,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            }
        },
        series: [

            {
                name: '机场总区',
                type: 'line',
                lineStyle: {
                    width: 1
                },
                symbolSize: 3,
                data: total
            },
            {
                name: '机场A区',
                type: 'line',
                lineStyle: {
                    width: 1
                },
                symbolSize: 3,
                data: dataA
            },
            {
                name: '机场B区',
                type: 'line',
                stack: '总量',
                lineStyle: {
                    width: 1
                },
                symbolSize: 3,
                data: dataB
            },
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//告警较昨日情况柱状图
(function () {
    var myChart = echarts.init(document.querySelector('.panel-bd .bar1'))
    var option = {
        color: ['rgb(236, 128, 141)', 'rgb(129, 211, 248)', 'rgb(202, 249, 130)'],
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 10
                }
            },
            data: ['昨日', '今日',]
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            }
        },
        series: [
            {
                name: '机场总区',
                data: [250, 259],
                type: 'bar',
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            {
                name: '机场A区',
                data: [141, 120],
                type: 'bar',
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            {
                name: '机场B区',
                data: [105, 137],
                type: 'bar',
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//告警较上一周情况柱状图
(function () {
    var myChart = echarts.init(document.querySelector('.panel-bd .bar2'))
    var option = {
        color: ['rgb(236, 128, 141)', 'rgb(129, 211, 248)', 'rgb(202, 249, 130)'],
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 10
                }
            },
            data: ['上一周', '本周',]
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(121,121,121,.8)'
                }
            }
        },
        series: [
            {
                name: '机场总区',
                data: [312, 273],
                type: 'bar',
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            {
                name: '机场A区',
                data: [221, 208],
                type: 'bar',
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            {
                name: '机场B区',
                data: [257, 231],
                type: 'bar',
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//机场告警详情
(function ($) {
    $(function () {
        var data = [
            {
                index: 'SZJC_A_00001',
                address: '深圳机场A区XXX',
                time: '2020-11-09 17:48:29',
                info: '松动告警'
            },
            {
                index: 'SZJC_A_00131',
                address: '深圳机场B区XXX',
                time: '2020-11-09 17:48:29',
                info: '低电压告警、松动告警、信号弱告警'
            },
            {
                index: 'SZJC_B_00613',
                address: '深圳机场A区XXX',
                time: '2020-11-09 17:48:29',
                info: '松动告警,低电压告警'
            },
            {
                index: 'SZJC_B_06666',
                address: '深圳机场B区XXX',
                time: '2020-11-09 17:48:29',
                info: '松动告警'
            },
            {
                index: 'SZJC_B_00984',
                address: '深圳机场A区XXX',
                time: '2020-11-09 17:48:29',
                info: '松动告警,低电压告警'
            },
            {
                index: 'SZJC_A_22001',
                address: '深圳机场A区XXX',
                time: '2020-11-09 17:48:29',
                info: ',低电压告警'
            },
        ]
        //生成html字符串，插入到dom中
        var htmlStr = ''
        var keys = ['设备编号：', '设备地址：', '报警时间：', '报警信息：']
        for (var i = 0, len = data.length; i < len; i++) {//控制li数量
            htmlStr += '<li>'
            var count = 0
            for (var j in data[i]) {//控制div数量
                if (count == 2 || count == 3) {
                    htmlStr += '<div><span>' + keys[count] + '</span><span class="warning-color">' + data[i][j] + '</span></div>'
                } else {
                    htmlStr += '<div><span>' + keys[count] + '</span><span>' + data[i][j] + '</span></div>'
                }
                count++
            }

            htmlStr += '</li>'
        }
        htmlStr = '<ul>' + htmlStr + '</ul>'
        // console.log(htmlStr)
        $('#warning-detail').html(htmlStr)

        var container = $('#warning-detail')
        var content = $('#warning-detail ul')
        var containerH = container.height()//容器高度
        var contentH = content.height()//内容高度
        // console.log('容器高度',containerH)
        // console.log('内容高度',contentH)
        if (contentH > containerH) {//内容高度大于容器高度，则向下滚动
            //设置transform

            var disY = contentH - containerH
            // console.log(disY)
            content.addClass('scroll')
            //动态生成样式表
            var sheet = (function () {
                // Create the <style> tag
                var style = document.createElement("style");

                // 如果你愿意的话，可以添加media属性 (或 media query) 
                // style.setAttribute("media", "screen")
                // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

                // WebKit 补丁 
                style.appendChild(document.createTextNode(""));

                // Add the <style> element to the page
                document.head.appendChild(style);

                return style.sheet;
            })();
            //添加样式规则
            sheet.insertRule(` 
            @keyframes scroll {
                     from{
                         transform: translateY(-${disY}px);
                     }
                     to{
                         transform: translateY(0);
                     }
                 }`)



        }
    })
})($);

//机场总区情况统计
(function () {
    // var data = [73, 27, 100]
    var data = [
        {
            value: 73, itemStyle: {
                emphasis: {
                    color: '#95F204'
                }
            }
        },
        {
            value: 27, itemStyle: {
                emphasis: {//鼠标经过颜色
                    color: '#aaaaaa'
                }
            }
        },
        { value: 100 },
    ]
    var myChart = echarts.init(document.querySelector('.all-area.pie3'))
    var option = {
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '73%',
                textAlign: 'center',
                fill: 'skyblue',
                width: 30,
                height: 30
            }
        },
        {
            type: 'text',
            left: 'center',
            top: '65%',
            style: {
                text: '日警告处理进度',
                textAlign: 'center',
                fill: '#81D3F8',
                width: 30,
                height: 30,
                fontSize: 10
            }
        },
        ],
        series: [
            {
                name: '访问来源',
                color: ['#95F204', '#aaaaaa', 'transparent'],
                type: 'pie',
                startAngle: 180,
                hoverAnimation: false,//鼠标经过不放大
                radius: ['120%', '155%'],
                center: ['50%', '85%'],//圆心坐标
                data: data,
                itemStyle: {
                    emphasis: {
                        scale: false,
                        scaleSize: 1
                    }
                },
                labelLine: {
                    show: false
                },
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//机场A区总体情况统计
(function () {
    // var data = [73, 27, 100]
    var data = [
        {
            value: 73, itemStyle: {
                emphasis: {
                    color: '#95F204'
                }
            }
        },
        {
            value: 27, itemStyle: {
                emphasis: {//鼠标经过颜色
                    color: '#aaaaaa'
                }
            }
        },
        { value: 100 },
    ]
    var myChart = echarts.init(document.querySelector('.A-area.pie4'))
    var option = {
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '73%',
                textAlign: 'center',
                fill: 'skyblue',
                width: 30,
                height: 30
            }
        },
        {
            type: 'text',
            left: 'center',
            top: '65%',
            style: {
                text: '日警告处理进度',
                textAlign: 'center',
                fill: '#81D3F8',
                width: 30,
                height: 30,
                fontSize: 10
            }
        },
        ],
        series: [
            {
                name: '访问来源',
                color: ['#95F204', '#aaaaaa', 'transparent'],
                type: 'pie',
                startAngle: 180,
                hoverAnimation: false,//鼠标经过不放大
                radius: ['120%', '155%'],
                center: ['50%', '85%'],//圆心坐标
                data: data,
                itemStyle: {
                    emphasis: {
                        scale: false,
                        scaleSize: 1
                    }
                },
                labelLine: {
                    show: false
                },
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//机场B区总体情况统计
(function () {
    var data = [
        {
            value: 73, itemStyle: {
                emphasis: {
                    color: '#95F204'
                }
            }
        },
        {
            value: 27, itemStyle: {
                emphasis: {//鼠标经过颜色
                    color: '#aaaaaa'
                }
            }
        },
        { value: 100 },
    ]
    var myChart = echarts.init(document.querySelector('.B-area.pie5'))
    var option = {
        graphic: [{
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
                text: '73%',
                textAlign: 'center',
                fill: 'skyblue',
                width: 30,
                height: 30
            }
        },
        {
            type: 'text',
            left: 'center',
            top: '65%',
            style: {
                text: '日警告处理进度',
                textAlign: 'center',
                fill: '#81D3F8',
                width: 30,
                height: 30,
                fontSize: 10
            }
        },
        ],
        series: [
            {
                name: '访问来源',
                color: ['#95F204', '#aaaaaa', 'transparent'],
                type: 'pie',
                startAngle: 180,
                hoverAnimation: false,//鼠标经过不放大
                radius: ['120%', '155%'],
                center: ['50%', '85%'],//圆心坐标
                data: data,
                itemStyle: {
                    emphasis: {
                        scale: false,
                        scaleSize: 1
                    }
                },
                labelLine: {
                    show: false
                },
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();