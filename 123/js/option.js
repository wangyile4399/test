$(function () {



left1_1 = {
    title:{
        text: '历年新增人口',
        left: '0',
        top: '0',
        textStyle: {
            color: '#fff',
            fontSize: 16,
        }
    },
    tooltip: {
        trigger: 'item',
        //   formatter: '{c}%'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:'30',
        data: ["世间", "哈哈"],
        textStyle:{
            color:'#fff'
        }
    },
    series: [{
        type: 'pie',
        radius: ['65%', '80%'],
        center: ['66%', '50%'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 30,
            name: "世间",
            itemStyle: {
                normal: {
                    color: '#7bb912',
                }
            },
            label: {
                show: false,
            }
        },
            {
                value: 100,
                //name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#959594',
                    }
                },
                label: {
                    normal: {
                        //formatter: 24.2 + '',
                        textStyle: {
                            fontSize: 20,
                            color: '#959594'
                        }
                    },

                }
            }
        ]
    },
        {
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['66%', '50%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 30,
                name: "哈哈",
                itemStyle: {
                    normal: {
                        color: '#6ba30a',
                    }
                },
                label: {
                    show: false,
                }
            },{
                value:100,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
            ]
        }
    ]
}


left1_2 = {
    title:{
        text: '历年新增人口',
        left: '0',
        top: '0',
        textStyle: {
            color: '#fff',
            fontSize: 16,
        }
    },
    tooltip: {
        trigger: 'item',
        //   formatter: '{c}%'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:'30',
        data: ["世间", "哈哈"],
        textStyle:{
            color:'#fff'
        }
    },
    series: [{
        type: 'pie',
        radius: ['65%', '80%'],
        center: ['66%', '50%'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 30,
            name: "世间",
            itemStyle: {
                normal: {
                    color: '#118dfc',
                }
            },
            label: {
                show: false,
            }
        },
            {
                value: 100,
                //name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#959594',
                    }
                },
                label: {
                    normal: {
                        //formatter: 24.2 + '',
                        textStyle: {
                            fontSize: 20,
                            color: '#959594'
                        }
                    },

                }
            }
        ]
    },
        {
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['66%', '50%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 30,
                name: "哈哈",
                itemStyle: {
                    normal: {
                        color: '#0c70c9',
                    }
                },
                label: {
                    show: false,
                }
            },{
                value:100,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
            ]
        }
    ]
}

left1_3 = {
    title:{
        text: '历年新增人口',
        left: '0',
        top: '0',
        textStyle: {
            color: '#fff',
            fontSize: 16,
        }
    },
    tooltip: {
        trigger: 'item',
        //   formatter: '{c}%'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:'30',
        data: ["世间", "哈哈"],
        textStyle:{
            color:'#fff'
        }
    },
    series: [{
        type: 'pie',
        radius: ['65%', '80%'],
        center: ['66%', '50%'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 30,
            name: "世间",
            itemStyle: {
                normal: {
                    color: '#db9611',
                }
            },
            label: {
                show: false,
            }
        },
            {
                value: 100,
                //name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#959594',
                    }
                },
                label: {
                    normal: {
                        //formatter: 24.2 + '',
                        textStyle: {
                            fontSize: 20,
                            color: '#959594'
                        }
                    },

                }
            }
        ]
    },
        {
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['66%', '50%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 30,
                name: "哈哈",
                itemStyle: {
                    normal: {
                        color: '#b97e0c',
                    }
                },
                label: {
                    show: false,
                }
            },{
                value:100,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
            ]
        }
    ]
}





    left2 = {
        legend: {
            bottom: 5,
            textStyle:{
                color:'#fff',
            },
            data: ['杭州市', '宁波市']
        },
        grid: {
            left: '4%',
            right: '4%',
            top: '2%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data:['GDP', '研发经费支出', '规模以上工…', '授权发明专利', '有效发明专利','技术交易额'],
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        align: 'center',
                        width: 15,
                        height: 15
                    },
                }
            },
        }, {
            show: true,
            inverse: true,
            data: [90, 70, 80, 66, 88,90],
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '杭州市',
            type: 'bar',
            yAxisIndex: 0,
            data: [70, 34, 60, 78, 69,77],
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: "#4c8af8",
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
        },
            {
                name: '宁波市',
                type: 'bar',
                yAxisIndex:0,
                barGap: '-100%',
                data: [10, 15, 20, 25, 24,14],
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: "#03cddf",
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%'
                    }
                },
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: '#6b7177',
                        borderWidth: 1,
                        barBorderRadius: 20,
                    }
                }
            }, ]
    };

right1 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['已申报','已立项','已签合同'],
        bottom:"5%",
        textStyle: {
            color:'#fff'
        }
    },
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '5%',
            top: '5%',
            bottom: '15%',
            width: '90%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            color:["#1b5874","#2091af","#1eb4ed"],
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 0,
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 0
                }
            },
            data: [
                {value: 30, name: '已签合同'},
                {value: 60, name: '已立项'},
                {value: 90, name: '已申报'}
            ]
        }
    ]
};




right2 = {
    color: ['#01a790', '#c6cb9b'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        left: 'left',
        top: '8%',
        textStyle: {
            color:'#fff'
        }
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '0',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLine:{
            show:true,
            lineStyle:{
                color: '#fff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
    }],
    xAxis: [{
        type: 'category',
        data: ['地震处', '高新处', '合作处', '计划处', '农社处', '社发处', '知识产权管理处', '知识产权执法处'],
        axisLine:{
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel:{
            color: '#fff',
            rotate:'45',
            fontSize:'12'
        }
    }],
    series: [
        {
            name: '未拨付',
            type: 'bar',
            stack: '总量',
            barWidth: '20px',
            data: [123, 212,123,80,190,94,45,44]

        },
        {
            name: '已拨付',
            type: 'bar',
            stack: '总量',
            data: [112, 232,78,44,87,90,66,63],
        }
    ]
}






// var chart2_data = {
//     x: ['海曙区', '江北区', '镇海区', '鄞州区', '北仑区', '象山县', '宁海县', '慈溪市', '余姚市', '奉化区'],
//     id: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
//     data1: [0,0,0,0,0,0,0,0,0,0],
// };
var myChart5 = echarts.init(document.getElementById('mid1'));
// var init = function (data) {
//     myChart5 = echarts.init(document.getElementById('mid1'));
//     var uploadedDataURL = "js/ningbo.json";
//     function showProvince(data) {
//         var name = 'nb';
//         echarts.registerMap(name, geoJson);
//         var maxData = 200;
//         var minData = 0;
//         mid1 = {
//             title: {
//                 text: data.title,
//                 left: 30,
//                 top: 10,
//                 textStyle: {
//                     fontWeight: 'normal',
//                     fontSize: 16
//                 }
//             },
//             tooltip: {
//                 trigger: 'item',
//                 formatter: "{b} : {c}"
//             },
//             visualMap: {
//                 show: false,
//                 min: minData,
//                 max: maxData,
//                 realtime: false,
//                 calculable: true,
//                 inRange: {
//                     color: ['rgba(92,181,250,0.8)', 'rgba(92,181,250,1)'],
//                     colorLightness: [0.9, 0.6]
//                 }
//             },
//             series: [{
//                 name: '高新技术企业',
//                 type: 'map',
//                 mapType: name,
//                 zoom: 1.1,
//                 aspectScale: 1,
//                 selectedMode: 'single',
//                 label: {
//                     normal: {
//                         show: true
//                     },
//                     emphasis: {
//                         textStyle: {
//                             color: '#fff'
//                         }
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         borderColor: '#fff',
//                         borderWidth: 1,
//                         label: {
//                             textStyle: {
//                                 color: "#333333"
//                             }
//                         },
//                         areaColor: 'rgba(229,229,224,1)',
//                         color: 'rgba(229,229,224,1)',
//                     }
//                 },
//                 data: [
//                     { name: '海曙区', value: data.data1[0], id: data.id[0], itemStyle: { color: '' }, selected: '' },
//                     { name: '江北区', value: data.data1[1], id: data.id[1], itemStyle: { color: '' }, selected: '' },
//                     { name: '镇海区', value: data.data1[2], id: data.id[2], itemStyle: { color: '' }, selected: '' },
//                     { name: '鄞州区', value: data.data1[3], id: data.id[3], itemStyle: { color: '' }, selected: '' },
//                     { name: '北仑区', value: data.data1[4], id: data.id[4], itemStyle: { color: '' }, selected: '' },
//                     { name: '象山县', value: data.data1[5], id: data.id[5], itemStyle: { color: '' }, selected: '' },
//                     { name: '宁海县', value: data.data1[6], id: data.id[6], itemStyle: { color: '' }, selected: '' },
//                     { name: '慈溪市', value: data.data1[7], id: data.id[7], itemStyle: { color: '' }, selected: '' },
//                     { name: '余姚市', value: data.data1[8], id: data.id[8], itemStyle: { color: '' }, selected: '' },
//                     { name: '奉化区', value: data.data1[9], id: data.id[9], itemStyle: { color: '' }, selected: '' }
//                 ],
//             }]
//         };
//         myChart5.setOption(mid1);
//     }
//     showProvince(data);
// };



myChart5.showLoading();
$.getJSON("http://map.sti.gov/json/boundary.json", function (geoJson) {
    echarts.registerMap('nb', geoJson);
    myChart5.hideLoading();
    var geoCoordMap = {
        '海曙区':[121.4500922850001, 29.935982633000037],
        '江北区':[121.51792536000009,29.93823222200000],
        '镇海区':[121.6074758060001, 29.999701746000053],
        '鄞州区':[121.5823253420001, 29.62878808800008],
        '北仑区':[121.97502427400002, 29.89824886000008],
        '象山县':[121.84231279800002, 29.358775376000067],
        '宁海县':[121.79426627500004, 29.269921921000048],
        '慈溪市':[121.12529851200009, 30.29898573400004],
        '余姚市':[120.97085831100003, 30.06724207600007],
        '奉化区':[121.39178511, 29.74275312800006],
    }
    var data = [
        { name: '海曙区', value: 0},
        { name: '江北区', value: 0},
        { name: '镇海区', value: 0},
        { name: '鄞州区', value: 0},
        { name: '北仑区', value: 0},
        { name: '象山县', value: 0},
        { name: '宁海县', value: 0},
        { name: '慈溪市', value: 0},
        { name: '余姚市', value: 0},
        { name: '奉化区', value: 0}
    ];
    var max = 480, min = 9; // todo
    var maxSize4Pin = 100, minSize4Pin = 20;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };


    mid1 = {
        backgroundColor: '#020933',
        title: {
            top:20,
            text: '“会员活跃度” - 山东省',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if(typeof(params.value)[2] == "undefined"){
                    return params.name + ' : ' + params.value;
                }else{
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        /*   legend: {
               orient: 'vertical',
               y: 'bottom',
               x: 'right',
                data:['pm2.5'],
               textStyle: {
                   color: '#fff'
               }
           },*/
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                //color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        geo: {
            show: true,
            map: 'jiangxi',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
            {
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
            },
            {
                type: 'map',
                map: 'jiangxi',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },

        ]
    };
    myChart5.setOption(mid1);
});


mid2_1 = {
    series: [{
        type: 'liquidFill',
        data: [0.6],
        color: ['#5cb5fa', '#5cb5fa', '#5cb5fa'],
        radius: '80%',
        waveLength: '85%',
        label: {
            normal: {
                formatter: function () {
                    // return data;
                },
                textStyle: {
                    color: '#000',
                    insideColor: 'white',
                    fontSize: 14,
                    fontWeight: 'normal'
                }
            }
        },
        outline: {
            borderDistance: 3,
            itemStyle: {
                borderColor: '#b5e3ff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0
            }
        },
        itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0)',
            normal: {
                backgroundColor: '#fff'
            }
        },
        backgroundStyle: {
            color: 'rgba(0,0,0,0)',
            shadowColor: 'rgba(0, 0, 0, 0)',
            shadowBlur: 10
        }
    }]
};


mid2_2 = {
    series: [{
        type: 'liquidFill',
        data: [0.6],
        color: ['#5cb5fa', '#5cb5fa', '#5cb5fa'],
        radius: '80%',
        waveLength: '85%',
        label: {
            normal: {
                textStyle: {
                    insideColor: 'white',
                    fontSize: 40,
                    color: '#D94854',
                    fontWeight: 'normal'
                }
            }
        },
        outline: {
            borderDistance: 3,
            itemStyle: {
                borderColor: '#b5e3ff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0
            }
        },
        itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0)',
            normal: {
                backgroundColor: '#fff'
            }
        },
        backgroundStyle: {
            color: 'rgba(0,0,0,0)',
            shadowColor: 'rgba(0, 0, 0, 0)',
            shadowBlur: 20
        }
    }]
};


mid3 = {
    color:'#ffca5b',
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#ffc665'
            }
        }
    },
    grid: {
        left: '100',
        right: '4%',
        top: '10%',
        bottom: '0%',
        containLabel: true
    },
    xAxis : [{
            type : 'category',
            boundaryGap : false,
            data : ['2010年','2011年','2012年','2013年','2014年','2015年','2016年'],
            axisLine:{
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel:{
                color: '#fff',
                fontSize:'12'
            }
        }],
    yAxis : [{
            type : 'value',
            axisLine:{
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel:{
                color: '#fff',
                fontSize:'12'
            }
        }],
    series : [
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {
                normal: {
                    background: '#ffc665'
                }
            },
            data:[44, 112, 80, 134, 200, 150, 50]
        }
    ]
};


})