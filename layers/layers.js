var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_zeljava_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "zeljava",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/zeljava_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1748475.917836, 5594149.645004, 1758584.165707, 5604388.728553]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_zeljava_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zeljava_1];
