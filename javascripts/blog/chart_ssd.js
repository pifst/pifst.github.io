$(function () {
    $('#container').highcharts({
        title: {
             text: 'Optimization of Crucial M4-128GB Solid State Disk',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: CrystalDiskMark 3.0.2 x64',
            x: -20
        },

       xAxis: {
            categories: [
                'Case #1: BIOS; CMOS Reset',
                'Case #2: BIOS; Firmware update',
                'Case #3: BIOS; Changed IDE to ACHI ',
                'Case #4: SSD; Firmware update to 070H',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Megabytes per Second (MB/s)'
            }
        },
        tooltip: {
            valueSuffix: 'MB/s'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

                    series: [{
            name: 'Sequential Read',
            data: [277.805, 267.017, 389.082, 493.680]

        }, {
            name: 'Sequential Write',
            data: [198.613, 168.230, 173.433, 198.275]

        }, {
            name: 'Random Read 512KB',
            data: [256.388, 247.544, 333.519, 378.919]

        }, {
            name: 'Random Write 512KB',
            data: [197.877, 180.370, 176.203, 198.041]
        }, {
            name: 'Random Read 4KB (QD=1)',
            data: [24.502, 24.055, 24.467, 26.798]
        }, {
            name: 'Random Write 4KB (QD=32)',
            data: [59.896, 56.566, 56.605, 63.847]
        }, {
            name: 'Random Read 4KB (QD=32)',
            data: [27.010, 25.566, 226.795, 261.364]
         }, {
            name: 'Random Write 4KB (QD=32)',
            data: [89.199, 90.593, 164.915, 174.677]

        }]
    });
});

