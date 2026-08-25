var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelitHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satelit Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelit_4 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });
var format_JalanLokal_6 = new ol.format.GeoJSON();
var features_JalanLokal_6 = format_JalanLokal_6.readFeatures(json_JalanLokal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_6.addFeatures(features_JalanLokal_6);
var lyr_JalanLokal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_6, 
                style: style_JalanLokal_6,
                popuplayertitle: 'Jalan Lokal',
                interactive: false,
                title: '<img src="styles/legend/JalanLokal_6.png" /> Jalan Lokal'
            });
var format_JalanRaya_7 = new ol.format.GeoJSON();
var features_JalanRaya_7 = format_JalanRaya_7.readFeatures(json_JalanRaya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_7.addFeatures(features_JalanRaya_7);
var lyr_JalanRaya_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_7, 
                style: style_JalanRaya_7,
                popuplayertitle: 'Jalan Raya',
                interactive: false,
                title: '<img src="styles/legend/JalanRaya_7.png" /> Jalan Raya'
            });
var format_JalanTol_8 = new ol.format.GeoJSON();
var features_JalanTol_8 = format_JalanTol_8.readFeatures(json_JalanTol_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanTol_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanTol_8.addFeatures(features_JalanTol_8);
var lyr_JalanTol_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanTol_8, 
                style: style_JalanTol_8,
                popuplayertitle: 'Jalan Tol',
                interactive: false,
                title: '<img src="styles/legend/JalanTol_8.png" /> Jalan Tol'
            });
var format_AreaLuar_9 = new ol.format.GeoJSON();
var features_AreaLuar_9 = format_AreaLuar_9.readFeatures(json_AreaLuar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaLuar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaLuar_9.addFeatures(features_AreaLuar_9);
var lyr_AreaLuar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaLuar_9, 
                style: style_AreaLuar_9,
                popuplayertitle: 'Area Luar',
                interactive: false,
                title: '<img src="styles/legend/AreaLuar_9.png" /> Area Luar'
            });
var format_BatasDusun_10 = new ol.format.GeoJSON();
var features_BatasDusun_10 = format_BatasDusun_10.readFeatures(json_BatasDusun_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_10.addFeatures(features_BatasDusun_10);
var lyr_BatasDusun_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_10, 
                style: style_BatasDusun_10,
                popuplayertitle: 'Batas Dusun',
                interactive: true,
                title: '<img src="styles/legend/BatasDusun_10.png" /> Batas Dusun'
            });
var format_BatasDesa_11 = new ol.format.GeoJSON();
var features_BatasDesa_11 = format_BatasDesa_11.readFeatures(json_BatasDesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_11.addFeatures(features_BatasDesa_11);
var lyr_BatasDesa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_11, 
                style: style_BatasDesa_11,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_11.png" /> Batas Desa'
            });
var format_BatasKecamatan_12 = new ol.format.GeoJSON();
var features_BatasKecamatan_12 = format_BatasKecamatan_12.readFeatures(json_BatasKecamatan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_12.addFeatures(features_BatasKecamatan_12);
var lyr_BatasKecamatan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_12, 
                style: style_BatasKecamatan_12,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_12.png" /> Batas Kecamatan'
            });
var format_BatasKabupaten_13 = new ol.format.GeoJSON();
var features_BatasKabupaten_13 = format_BatasKabupaten_13.readFeatures(json_BatasKabupaten_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_13.addFeatures(features_BatasKabupaten_13);
var lyr_BatasKabupaten_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_13, 
                style: style_BatasKabupaten_13,
                popuplayertitle: 'Batas Kabupaten',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupaten_13.png" /> Batas Kabupaten'
            });
var format_BatasProvinsi_14 = new ol.format.GeoJSON();
var features_BatasProvinsi_14 = format_BatasProvinsi_14.readFeatures(json_BatasProvinsi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_14.addFeatures(features_BatasProvinsi_14);
var lyr_BatasProvinsi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvinsi_14, 
                style: style_BatasProvinsi_14,
                popuplayertitle: 'Batas Provinsi',
                interactive: false,
                title: '<img src="styles/legend/BatasProvinsi_14.png" /> Batas Provinsi'
            });
var format_TitikPentingDesa_15 = new ol.format.GeoJSON();
var features_TitikPentingDesa_15 = format_TitikPentingDesa_15.readFeatures(json_TitikPentingDesa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPentingDesa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPentingDesa_15.addFeatures(features_TitikPentingDesa_15);
var lyr_TitikPentingDesa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPentingDesa_15, 
                style: style_TitikPentingDesa_15,
                popuplayertitle: 'Titik Penting Desa',
                interactive: true,
    title: 'Titik Penting Desa<br />\
    <img src="styles/legend/TitikPentingDesa_15_0.png" /> Infrastruktur<br />\
    <img src="styles/legend/TitikPentingDesa_15_1.png" /> Kuliner<br />\
    <img src="styles/legend/TitikPentingDesa_15_2.png" /> Makam<br />\
    <img src="styles/legend/TitikPentingDesa_15_3.png" /> Masjid<br />\
    <img src="styles/legend/TitikPentingDesa_15_4.png" /> Pemerintahan<br />\
    <img src="styles/legend/TitikPentingDesa_15_5.png" /> Sekolah<br />\
    <img src="styles/legend/TitikPentingDesa_15_6.png" /> Niaga<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_GoogleSatelitHybrid_3.setVisible(true);lyr_GoogleSatelit_4.setVisible(true);lyr_Sungai_5.setVisible(true);lyr_JalanLokal_6.setVisible(true);lyr_JalanRaya_7.setVisible(true);lyr_JalanTol_8.setVisible(true);lyr_AreaLuar_9.setVisible(true);lyr_BatasDusun_10.setVisible(true);lyr_BatasDesa_11.setVisible(true);lyr_BatasKecamatan_12.setVisible(true);lyr_BatasKabupaten_13.setVisible(true);lyr_BatasProvinsi_14.setVisible(true);lyr_TitikPentingDesa_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WorldImagery_1,lyr_GoogleTerrainHybrid_2,lyr_GoogleSatelitHybrid_3,lyr_GoogleSatelit_4,lyr_Sungai_5,lyr_JalanLokal_6,lyr_JalanRaya_7,lyr_JalanTol_8,lyr_AreaLuar_9,lyr_BatasDusun_10,lyr_BatasDesa_11,lyr_BatasKecamatan_12,lyr_BatasKabupaten_13,lyr_BatasProvinsi_14,lyr_TitikPentingDesa_15];
lyr_Sungai_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'maxspeed:advisory': 'maxspeed:advisory', 'sidewalk:right': 'sidewalk:right', 'construction': 'construction', 'placement': 'placement', 'sidewalk:left:surface': 'sidewalk:left:surface', 'name:jv': 'name:jv', 'opening_date': 'opening_date', 'check_date': 'check_date', 'proposed': 'proposed', 'int_ref:colour': 'int_ref:colour', 'maxheight': 'maxheight', 'service': 'service', 'turn:lanes': 'turn:lanes', 'level': 'level', 'toilets': 'toilets', 'description': 'description', 'boundary': 'boundary', 'tunnel': 'tunnel', 'destination:symbol': 'destination:symbol', 'import': 'import', 'operator:type': 'operator:type', 'disused:highway': 'disused:highway', 'abandoned:highway': 'abandoned:highway', 'covered': 'covered', 'hgv': 'hgv', 'motorroad': 'motorroad', 'wires': 'wires', 'voltage': 'voltage', 'power': 'power', 'operator:wikidata': 'operator:wikidata', 'operator:short': 'operator:short', 'frequency': 'frequency', 'circuits': 'circuits', 'cables': 'cables', 'motorcar': 'motorcar', 'cycleway': 'cycleway', 'cycleway:left': 'cycleway:left', 'access': 'access', 'old_name': 'old_name', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', 'cycleway:both': 'cycleway:both', 'horse': 'horse', 'wikimedia_commons': 'wikimedia_commons', 'name:en': 'name:en', 'bridge:name': 'bridge:name', 'oneway:motor_vehicle': 'oneway:motor_vehicle', 'district': 'district', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'shelter': 'shelter', 'public_transport': 'public_transport', 'smoothness': 'smoothness', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'short_name': 'short_name', 'motorcycle': 'motorcycle', 'traffic_signals': 'traffic_signals', 'width': 'width', 'waterway': 'waterway', 'alt_name': 'alt_name', 'name:ms': 'name:ms', 'name:id': 'name:id', 'lit': 'lit', 'natural': 'natural', 'man_made': 'man_made', 'admin_level': 'admin_level', 'maxweight:signed': 'maxweight:signed', 'sidewalk': 'sidewalk', 'lane_markings': 'lane_markings', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed:type': 'maxspeed:type', 'shoulder': 'shoulder', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'maxspeed': 'maxspeed', 'destination:ref': 'destination:ref', 'destination': 'destination', 'sidewalk:both': 'sidewalk:both', 'surface': 'surface', 'sidewalk:left': 'sidewalk:left', 'ref': 'ref', 'oneway': 'oneway', 'lanes': 'lanes', 'junction': 'junction', 'int_ref': 'int_ref', 'highway': 'highway', 'website': 'website', 'url': 'url', 'toll': 'toll', 'route': 'route', 'operator': 'operator', 'name': 'name', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'duration': 'duration', 'bicycle': 'bicycle', });
lyr_JalanLokal_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'maxspeed:advisory': 'maxspeed:advisory', 'sidewalk:right': 'sidewalk:right', 'construction': 'construction', 'placement': 'placement', 'sidewalk:left:surface': 'sidewalk:left:surface', 'name:jv': 'name:jv', 'opening_date': 'opening_date', 'check_date': 'check_date', 'proposed': 'proposed', 'int_ref:colour': 'int_ref:colour', 'maxheight': 'maxheight', 'service': 'service', 'turn:lanes': 'turn:lanes', 'level': 'level', 'toilets': 'toilets', 'description': 'description', 'boundary': 'boundary', 'tunnel': 'tunnel', 'destination:symbol': 'destination:symbol', 'import': 'import', 'operator:type': 'operator:type', 'disused:highway': 'disused:highway', 'abandoned:highway': 'abandoned:highway', 'covered': 'covered', 'hgv': 'hgv', 'motorroad': 'motorroad', 'wires': 'wires', 'voltage': 'voltage', 'power': 'power', 'operator:wikidata': 'operator:wikidata', 'operator:short': 'operator:short', 'frequency': 'frequency', 'circuits': 'circuits', 'cables': 'cables', 'motorcar': 'motorcar', 'cycleway': 'cycleway', 'cycleway:left': 'cycleway:left', 'access': 'access', 'old_name': 'old_name', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', 'cycleway:both': 'cycleway:both', 'horse': 'horse', 'wikimedia_commons': 'wikimedia_commons', 'name:en': 'name:en', 'bridge:name': 'bridge:name', 'oneway:motor_vehicle': 'oneway:motor_vehicle', 'district': 'district', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'shelter': 'shelter', 'public_transport': 'public_transport', 'smoothness': 'smoothness', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'short_name': 'short_name', 'motorcycle': 'motorcycle', 'traffic_signals': 'traffic_signals', 'width': 'width', 'waterway': 'waterway', 'alt_name': 'alt_name', 'name:ms': 'name:ms', 'name:id': 'name:id', 'lit': 'lit', 'natural': 'natural', 'man_made': 'man_made', 'admin_level': 'admin_level', 'maxweight:signed': 'maxweight:signed', 'sidewalk': 'sidewalk', 'lane_markings': 'lane_markings', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed:type': 'maxspeed:type', 'shoulder': 'shoulder', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'maxspeed': 'maxspeed', 'destination:ref': 'destination:ref', 'destination': 'destination', 'sidewalk:both': 'sidewalk:both', 'surface': 'surface', 'sidewalk:left': 'sidewalk:left', 'ref': 'ref', 'oneway': 'oneway', 'lanes': 'lanes', 'junction': 'junction', 'int_ref': 'int_ref', 'highway': 'highway', 'website': 'website', 'url': 'url', 'toll': 'toll', 'route': 'route', 'operator': 'operator', 'name': 'name', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'duration': 'duration', 'bicycle': 'bicycle', });
lyr_JalanRaya_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'maxspeed:advisory': 'maxspeed:advisory', 'sidewalk:right': 'sidewalk:right', 'construction': 'construction', 'placement': 'placement', 'sidewalk:left:surface': 'sidewalk:left:surface', 'name:jv': 'name:jv', 'opening_date': 'opening_date', 'check_date': 'check_date', 'proposed': 'proposed', 'int_ref:colour': 'int_ref:colour', 'maxheight': 'maxheight', 'service': 'service', 'turn:lanes': 'turn:lanes', 'level': 'level', 'toilets': 'toilets', 'description': 'description', 'boundary': 'boundary', 'tunnel': 'tunnel', 'destination:symbol': 'destination:symbol', 'import': 'import', 'operator:type': 'operator:type', 'disused:highway': 'disused:highway', 'abandoned:highway': 'abandoned:highway', 'covered': 'covered', 'hgv': 'hgv', 'motorroad': 'motorroad', 'wires': 'wires', 'voltage': 'voltage', 'power': 'power', 'operator:wikidata': 'operator:wikidata', 'operator:short': 'operator:short', 'frequency': 'frequency', 'circuits': 'circuits', 'cables': 'cables', 'motorcar': 'motorcar', 'cycleway': 'cycleway', 'cycleway:left': 'cycleway:left', 'access': 'access', 'old_name': 'old_name', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', 'cycleway:both': 'cycleway:both', 'horse': 'horse', 'wikimedia_commons': 'wikimedia_commons', 'name:en': 'name:en', 'bridge:name': 'bridge:name', 'oneway:motor_vehicle': 'oneway:motor_vehicle', 'district': 'district', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'shelter': 'shelter', 'public_transport': 'public_transport', 'smoothness': 'smoothness', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'short_name': 'short_name', 'motorcycle': 'motorcycle', 'traffic_signals': 'traffic_signals', 'width': 'width', 'waterway': 'waterway', 'alt_name': 'alt_name', 'name:ms': 'name:ms', 'name:id': 'name:id', 'lit': 'lit', 'natural': 'natural', 'man_made': 'man_made', 'admin_level': 'admin_level', 'maxweight:signed': 'maxweight:signed', 'sidewalk': 'sidewalk', 'lane_markings': 'lane_markings', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed:type': 'maxspeed:type', 'shoulder': 'shoulder', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'maxspeed': 'maxspeed', 'destination:ref': 'destination:ref', 'destination': 'destination', 'sidewalk:both': 'sidewalk:both', 'surface': 'surface', 'sidewalk:left': 'sidewalk:left', 'ref': 'ref', 'oneway': 'oneway', 'lanes': 'lanes', 'junction': 'junction', 'int_ref': 'int_ref', 'highway': 'highway', 'website': 'website', 'url': 'url', 'toll': 'toll', 'route': 'route', 'operator': 'operator', 'name': 'name', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'duration': 'duration', 'bicycle': 'bicycle', });
lyr_JalanTol_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'location': 'location', 'generator:type': 'generator:type', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'maxspeed:advisory': 'maxspeed:advisory', 'sidewalk:right': 'sidewalk:right', 'construction': 'construction', 'placement': 'placement', 'sidewalk:left:surface': 'sidewalk:left:surface', 'name:jv': 'name:jv', 'opening_date': 'opening_date', 'check_date': 'check_date', 'proposed': 'proposed', 'int_ref:colour': 'int_ref:colour', 'maxheight': 'maxheight', 'service': 'service', 'turn:lanes': 'turn:lanes', 'level': 'level', 'toilets': 'toilets', 'description': 'description', 'boundary': 'boundary', 'tunnel': 'tunnel', 'destination:symbol': 'destination:symbol', 'import': 'import', 'operator:type': 'operator:type', 'disused:highway': 'disused:highway', 'abandoned:highway': 'abandoned:highway', 'covered': 'covered', 'hgv': 'hgv', 'motorroad': 'motorroad', 'wires': 'wires', 'voltage': 'voltage', 'power': 'power', 'operator:wikidata': 'operator:wikidata', 'operator:short': 'operator:short', 'frequency': 'frequency', 'circuits': 'circuits', 'cables': 'cables', 'motorcar': 'motorcar', 'cycleway': 'cycleway', 'cycleway:left': 'cycleway:left', 'access': 'access', 'old_name': 'old_name', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', 'cycleway:both': 'cycleway:both', 'horse': 'horse', 'wikimedia_commons': 'wikimedia_commons', 'name:en': 'name:en', 'bridge:name': 'bridge:name', 'oneway:motor_vehicle': 'oneway:motor_vehicle', 'district': 'district', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'shelter': 'shelter', 'public_transport': 'public_transport', 'smoothness': 'smoothness', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'short_name': 'short_name', 'motorcycle': 'motorcycle', 'traffic_signals': 'traffic_signals', 'width': 'width', 'waterway': 'waterway', 'alt_name': 'alt_name', 'name:ms': 'name:ms', 'name:id': 'name:id', 'lit': 'lit', 'natural': 'natural', 'man_made': 'man_made', 'admin_level': 'admin_level', 'maxweight:signed': 'maxweight:signed', 'sidewalk': 'sidewalk', 'lane_markings': 'lane_markings', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed:type': 'maxspeed:type', 'shoulder': 'shoulder', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'maxspeed': 'maxspeed', 'destination:ref': 'destination:ref', 'destination': 'destination', 'sidewalk:both': 'sidewalk:both', 'surface': 'surface', 'sidewalk:left': 'sidewalk:left', 'ref': 'ref', 'oneway': 'oneway', 'lanes': 'lanes', 'junction': 'junction', 'int_ref': 'int_ref', 'highway': 'highway', 'website': 'website', 'url': 'url', 'toll': 'toll', 'route': 'route', 'operator': 'operator', 'name': 'name', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'duration': 'duration', 'bicycle': 'bicycle', });
lyr_AreaLuar_9.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_BatasDusun_10.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', });
lyr_BatasDesa_11.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_BatasKecamatan_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_BatasKabupaten_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BatasProvinsi_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_TitikPentingDesa_15.set('fieldAliases', {'fid': 'fid', 'Nama Bangunan/Fasilitas': 'Nama Bangunan/Fasilitas', 'Kategori': 'Kategori', 'Foto': 'Foto', });
lyr_Sungai_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'maxspeed:advisory': '', 'sidewalk:right': '', 'construction': '', 'placement': '', 'sidewalk:left:surface': '', 'name:jv': '', 'opening_date': '', 'check_date': '', 'proposed': '', 'int_ref:colour': '', 'maxheight': '', 'service': '', 'turn:lanes': '', 'level': '', 'toilets': '', 'description': '', 'boundary': '', 'tunnel': '', 'destination:symbol': '', 'import': '', 'operator:type': '', 'disused:highway': '', 'abandoned:highway': '', 'covered': '', 'hgv': '', 'motorroad': '', 'wires': '', 'voltage': '', 'power': '', 'operator:wikidata': '', 'operator:short': '', 'frequency': '', 'circuits': '', 'cables': '', 'motorcar': '', 'cycleway': '', 'cycleway:left': '', 'access': '', 'old_name': '', 'bus': '', 'bin': '', 'bench': '', 'cycleway:both': '', 'horse': '', 'wikimedia_commons': '', 'name:en': '', 'bridge:name': '', 'oneway:motor_vehicle': '', 'district': '', 'lanes:forward': '', 'lanes:backward': '', 'shelter': '', 'public_transport': '', 'smoothness': '', 'wikipedia': '', 'wikidata': '', 'short_name': '', 'motorcycle': '', 'traffic_signals': '', 'width': '', 'waterway': '', 'alt_name': '', 'name:ms': '', 'name:id': '', 'lit': '', 'natural': '', 'man_made': '', 'admin_level': '', 'maxweight:signed': '', 'sidewalk': '', 'lane_markings': '', 'layer': '', 'bridge': '', 'maxspeed:type': '', 'shoulder': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'maxspeed': '', 'destination:ref': '', 'destination': '', 'sidewalk:both': '', 'surface': '', 'sidewalk:left': '', 'ref': '', 'oneway': '', 'lanes': '', 'junction': '', 'int_ref': '', 'highway': '', 'website': '', 'url': '', 'toll': '', 'route': '', 'operator': '', 'name': '', 'motor_vehicle': '', 'foot': '', 'duration': '', 'bicycle': '', });
lyr_JalanLokal_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'maxspeed:advisory': '', 'sidewalk:right': '', 'construction': '', 'placement': '', 'sidewalk:left:surface': '', 'name:jv': '', 'opening_date': '', 'check_date': '', 'proposed': '', 'int_ref:colour': '', 'maxheight': '', 'service': '', 'turn:lanes': '', 'level': '', 'toilets': '', 'description': '', 'boundary': '', 'tunnel': '', 'destination:symbol': '', 'import': '', 'operator:type': '', 'disused:highway': '', 'abandoned:highway': '', 'covered': '', 'hgv': '', 'motorroad': '', 'wires': '', 'voltage': '', 'power': '', 'operator:wikidata': '', 'operator:short': '', 'frequency': '', 'circuits': '', 'cables': '', 'motorcar': '', 'cycleway': '', 'cycleway:left': '', 'access': '', 'old_name': '', 'bus': '', 'bin': '', 'bench': '', 'cycleway:both': '', 'horse': '', 'wikimedia_commons': '', 'name:en': '', 'bridge:name': '', 'oneway:motor_vehicle': '', 'district': '', 'lanes:forward': '', 'lanes:backward': '', 'shelter': '', 'public_transport': '', 'smoothness': '', 'wikipedia': '', 'wikidata': '', 'short_name': '', 'motorcycle': '', 'traffic_signals': '', 'width': '', 'waterway': '', 'alt_name': '', 'name:ms': '', 'name:id': '', 'lit': '', 'natural': '', 'man_made': '', 'admin_level': '', 'maxweight:signed': '', 'sidewalk': '', 'lane_markings': '', 'layer': '', 'bridge': '', 'maxspeed:type': '', 'shoulder': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'maxspeed': '', 'destination:ref': '', 'destination': '', 'sidewalk:both': '', 'surface': '', 'sidewalk:left': '', 'ref': '', 'oneway': '', 'lanes': '', 'junction': '', 'int_ref': '', 'highway': '', 'website': '', 'url': '', 'toll': '', 'route': '', 'operator': '', 'name': '', 'motor_vehicle': '', 'foot': '', 'duration': '', 'bicycle': '', });
lyr_JalanRaya_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'maxspeed:advisory': '', 'sidewalk:right': '', 'construction': '', 'placement': '', 'sidewalk:left:surface': '', 'name:jv': '', 'opening_date': '', 'check_date': '', 'proposed': '', 'int_ref:colour': '', 'maxheight': '', 'service': '', 'turn:lanes': '', 'level': '', 'toilets': '', 'description': '', 'boundary': '', 'tunnel': '', 'destination:symbol': '', 'import': '', 'operator:type': '', 'disused:highway': '', 'abandoned:highway': '', 'covered': '', 'hgv': '', 'motorroad': '', 'wires': '', 'voltage': '', 'power': '', 'operator:wikidata': '', 'operator:short': '', 'frequency': '', 'circuits': '', 'cables': '', 'motorcar': '', 'cycleway': '', 'cycleway:left': '', 'access': '', 'old_name': '', 'bus': '', 'bin': '', 'bench': '', 'cycleway:both': '', 'horse': '', 'wikimedia_commons': '', 'name:en': '', 'bridge:name': '', 'oneway:motor_vehicle': '', 'district': '', 'lanes:forward': '', 'lanes:backward': '', 'shelter': '', 'public_transport': '', 'smoothness': '', 'wikipedia': '', 'wikidata': '', 'short_name': '', 'motorcycle': '', 'traffic_signals': '', 'width': '', 'waterway': '', 'alt_name': '', 'name:ms': '', 'name:id': '', 'lit': '', 'natural': '', 'man_made': '', 'admin_level': '', 'maxweight:signed': '', 'sidewalk': '', 'lane_markings': '', 'layer': '', 'bridge': '', 'maxspeed:type': '', 'shoulder': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'maxspeed': '', 'destination:ref': '', 'destination': '', 'sidewalk:both': '', 'surface': '', 'sidewalk:left': '', 'ref': '', 'oneway': '', 'lanes': '', 'junction': '', 'int_ref': '', 'highway': '', 'website': '', 'url': '', 'toll': '', 'route': '', 'operator': '', 'name': '', 'motor_vehicle': '', 'foot': '', 'duration': '', 'bicycle': '', });
lyr_JalanTol_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'turn:lanes:forward': '', 'turn:lanes:backward': '', 'location': '', 'generator:type': '', 'generator:source': '', 'generator:output:electricity': '', 'generator:method': '', 'maxspeed:advisory': '', 'sidewalk:right': '', 'construction': '', 'placement': '', 'sidewalk:left:surface': '', 'name:jv': '', 'opening_date': '', 'check_date': '', 'proposed': '', 'int_ref:colour': '', 'maxheight': '', 'service': '', 'turn:lanes': '', 'level': '', 'toilets': '', 'description': '', 'boundary': '', 'tunnel': '', 'destination:symbol': '', 'import': '', 'operator:type': '', 'disused:highway': '', 'abandoned:highway': '', 'covered': '', 'hgv': '', 'motorroad': '', 'wires': '', 'voltage': '', 'power': '', 'operator:wikidata': '', 'operator:short': '', 'frequency': '', 'circuits': '', 'cables': '', 'motorcar': '', 'cycleway': '', 'cycleway:left': '', 'access': '', 'old_name': '', 'bus': '', 'bin': '', 'bench': '', 'cycleway:both': '', 'horse': '', 'wikimedia_commons': '', 'name:en': '', 'bridge:name': '', 'oneway:motor_vehicle': '', 'district': '', 'lanes:forward': '', 'lanes:backward': '', 'shelter': '', 'public_transport': '', 'smoothness': '', 'wikipedia': '', 'wikidata': '', 'short_name': '', 'motorcycle': '', 'traffic_signals': '', 'width': '', 'waterway': '', 'alt_name': '', 'name:ms': '', 'name:id': '', 'lit': '', 'natural': '', 'man_made': '', 'admin_level': '', 'maxweight:signed': '', 'sidewalk': '', 'lane_markings': '', 'layer': '', 'bridge': '', 'maxspeed:type': '', 'shoulder': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'maxspeed': '', 'destination:ref': '', 'destination': '', 'sidewalk:both': '', 'surface': '', 'sidewalk:left': '', 'ref': '', 'oneway': '', 'lanes': '', 'junction': '', 'int_ref': '', 'highway': '', 'website': '', 'url': '', 'toll': '', 'route': '', 'operator': '', 'name': '', 'motor_vehicle': '', 'foot': '', 'duration': '', 'bicycle': '', });
lyr_AreaLuar_9.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'METADATA': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'UUPP': '', });
lyr_BatasDusun_10.set('fieldImages', {'fid': '', 'Dusun': '', });
lyr_BatasDesa_11.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'METADATA': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'UUPP': '', });
lyr_BatasKecamatan_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_BatasKabupaten_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_BatasProvinsi_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_TitikPentingDesa_15.set('fieldImages', {'fid': 'TextEdit', 'Nama Bangunan/Fasilitas': 'TextEdit', 'Kategori': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Sungai_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'maxspeed:advisory': 'no label', 'sidewalk:right': 'no label', 'construction': 'no label', 'placement': 'no label', 'sidewalk:left:surface': 'no label', 'name:jv': 'no label', 'opening_date': 'no label', 'check_date': 'no label', 'proposed': 'no label', 'int_ref:colour': 'no label', 'maxheight': 'no label', 'service': 'no label', 'turn:lanes': 'no label', 'level': 'no label', 'toilets': 'no label', 'description': 'no label', 'boundary': 'no label', 'tunnel': 'no label', 'destination:symbol': 'no label', 'import': 'no label', 'operator:type': 'no label', 'disused:highway': 'no label', 'abandoned:highway': 'no label', 'covered': 'no label', 'hgv': 'no label', 'motorroad': 'no label', 'wires': 'no label', 'voltage': 'no label', 'power': 'no label', 'operator:wikidata': 'no label', 'operator:short': 'no label', 'frequency': 'no label', 'circuits': 'no label', 'cables': 'no label', 'motorcar': 'no label', 'cycleway': 'no label', 'cycleway:left': 'no label', 'access': 'no label', 'old_name': 'no label', 'bus': 'no label', 'bin': 'no label', 'bench': 'no label', 'cycleway:both': 'no label', 'horse': 'no label', 'wikimedia_commons': 'no label', 'name:en': 'no label', 'bridge:name': 'no label', 'oneway:motor_vehicle': 'no label', 'district': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'smoothness': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'short_name': 'no label', 'motorcycle': 'no label', 'traffic_signals': 'no label', 'width': 'no label', 'waterway': 'no label', 'alt_name': 'no label', 'name:ms': 'no label', 'name:id': 'no label', 'lit': 'no label', 'natural': 'no label', 'man_made': 'no label', 'admin_level': 'no label', 'maxweight:signed': 'no label', 'sidewalk': 'no label', 'lane_markings': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed:type': 'no label', 'shoulder': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'maxspeed': 'no label', 'destination:ref': 'no label', 'destination': 'no label', 'sidewalk:both': 'no label', 'surface': 'no label', 'sidewalk:left': 'no label', 'ref': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'junction': 'no label', 'int_ref': 'no label', 'highway': 'no label', 'website': 'no label', 'url': 'no label', 'toll': 'no label', 'route': 'no label', 'operator': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'duration': 'no label', 'bicycle': 'no label', });
lyr_JalanLokal_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'maxspeed:advisory': 'no label', 'sidewalk:right': 'no label', 'construction': 'no label', 'placement': 'no label', 'sidewalk:left:surface': 'no label', 'name:jv': 'no label', 'opening_date': 'no label', 'check_date': 'no label', 'proposed': 'no label', 'int_ref:colour': 'no label', 'maxheight': 'no label', 'service': 'no label', 'turn:lanes': 'no label', 'level': 'no label', 'toilets': 'no label', 'description': 'no label', 'boundary': 'no label', 'tunnel': 'no label', 'destination:symbol': 'no label', 'import': 'no label', 'operator:type': 'no label', 'disused:highway': 'no label', 'abandoned:highway': 'no label', 'covered': 'no label', 'hgv': 'no label', 'motorroad': 'no label', 'wires': 'no label', 'voltage': 'no label', 'power': 'no label', 'operator:wikidata': 'no label', 'operator:short': 'no label', 'frequency': 'no label', 'circuits': 'no label', 'cables': 'no label', 'motorcar': 'no label', 'cycleway': 'no label', 'cycleway:left': 'no label', 'access': 'no label', 'old_name': 'no label', 'bus': 'no label', 'bin': 'no label', 'bench': 'no label', 'cycleway:both': 'no label', 'horse': 'no label', 'wikimedia_commons': 'no label', 'name:en': 'no label', 'bridge:name': 'no label', 'oneway:motor_vehicle': 'no label', 'district': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'smoothness': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'short_name': 'no label', 'motorcycle': 'no label', 'traffic_signals': 'no label', 'width': 'no label', 'waterway': 'no label', 'alt_name': 'no label', 'name:ms': 'no label', 'name:id': 'no label', 'lit': 'no label', 'natural': 'no label', 'man_made': 'no label', 'admin_level': 'no label', 'maxweight:signed': 'no label', 'sidewalk': 'no label', 'lane_markings': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed:type': 'no label', 'shoulder': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'maxspeed': 'no label', 'destination:ref': 'no label', 'destination': 'no label', 'sidewalk:both': 'no label', 'surface': 'no label', 'sidewalk:left': 'no label', 'ref': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'junction': 'no label', 'int_ref': 'no label', 'highway': 'no label', 'website': 'no label', 'url': 'no label', 'toll': 'no label', 'route': 'no label', 'operator': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'duration': 'no label', 'bicycle': 'no label', });
lyr_JalanRaya_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'maxspeed:advisory': 'no label', 'sidewalk:right': 'no label', 'construction': 'no label', 'placement': 'no label', 'sidewalk:left:surface': 'no label', 'name:jv': 'no label', 'opening_date': 'no label', 'check_date': 'no label', 'proposed': 'no label', 'int_ref:colour': 'no label', 'maxheight': 'no label', 'service': 'no label', 'turn:lanes': 'no label', 'level': 'no label', 'toilets': 'no label', 'description': 'no label', 'boundary': 'no label', 'tunnel': 'no label', 'destination:symbol': 'no label', 'import': 'no label', 'operator:type': 'no label', 'disused:highway': 'no label', 'abandoned:highway': 'no label', 'covered': 'no label', 'hgv': 'no label', 'motorroad': 'no label', 'wires': 'no label', 'voltage': 'no label', 'power': 'no label', 'operator:wikidata': 'no label', 'operator:short': 'no label', 'frequency': 'no label', 'circuits': 'no label', 'cables': 'no label', 'motorcar': 'no label', 'cycleway': 'no label', 'cycleway:left': 'no label', 'access': 'no label', 'old_name': 'no label', 'bus': 'no label', 'bin': 'no label', 'bench': 'no label', 'cycleway:both': 'no label', 'horse': 'no label', 'wikimedia_commons': 'no label', 'name:en': 'no label', 'bridge:name': 'no label', 'oneway:motor_vehicle': 'no label', 'district': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'smoothness': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'short_name': 'no label', 'motorcycle': 'no label', 'traffic_signals': 'no label', 'width': 'no label', 'waterway': 'no label', 'alt_name': 'no label', 'name:ms': 'no label', 'name:id': 'no label', 'lit': 'no label', 'natural': 'no label', 'man_made': 'no label', 'admin_level': 'no label', 'maxweight:signed': 'no label', 'sidewalk': 'no label', 'lane_markings': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed:type': 'no label', 'shoulder': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'maxspeed': 'no label', 'destination:ref': 'no label', 'destination': 'no label', 'sidewalk:both': 'no label', 'surface': 'no label', 'sidewalk:left': 'no label', 'ref': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'junction': 'no label', 'int_ref': 'no label', 'highway': 'no label', 'website': 'no label', 'url': 'no label', 'toll': 'no label', 'route': 'no label', 'operator': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'duration': 'no label', 'bicycle': 'no label', });
lyr_JalanTol_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'location': 'no label', 'generator:type': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'maxspeed:advisory': 'no label', 'sidewalk:right': 'no label', 'construction': 'no label', 'placement': 'no label', 'sidewalk:left:surface': 'no label', 'name:jv': 'no label', 'opening_date': 'no label', 'check_date': 'no label', 'proposed': 'no label', 'int_ref:colour': 'no label', 'maxheight': 'no label', 'service': 'no label', 'turn:lanes': 'no label', 'level': 'no label', 'toilets': 'no label', 'description': 'no label', 'boundary': 'no label', 'tunnel': 'no label', 'destination:symbol': 'no label', 'import': 'no label', 'operator:type': 'no label', 'disused:highway': 'no label', 'abandoned:highway': 'no label', 'covered': 'no label', 'hgv': 'no label', 'motorroad': 'no label', 'wires': 'no label', 'voltage': 'no label', 'power': 'no label', 'operator:wikidata': 'no label', 'operator:short': 'no label', 'frequency': 'no label', 'circuits': 'no label', 'cables': 'no label', 'motorcar': 'no label', 'cycleway': 'no label', 'cycleway:left': 'no label', 'access': 'no label', 'old_name': 'no label', 'bus': 'no label', 'bin': 'no label', 'bench': 'no label', 'cycleway:both': 'no label', 'horse': 'no label', 'wikimedia_commons': 'no label', 'name:en': 'no label', 'bridge:name': 'no label', 'oneway:motor_vehicle': 'no label', 'district': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'smoothness': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'short_name': 'no label', 'motorcycle': 'no label', 'traffic_signals': 'no label', 'width': 'no label', 'waterway': 'no label', 'alt_name': 'no label', 'name:ms': 'no label', 'name:id': 'no label', 'lit': 'no label', 'natural': 'no label', 'man_made': 'no label', 'admin_level': 'no label', 'maxweight:signed': 'no label', 'sidewalk': 'no label', 'lane_markings': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed:type': 'no label', 'shoulder': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'maxspeed': 'no label', 'destination:ref': 'no label', 'destination': 'no label', 'sidewalk:both': 'no label', 'surface': 'no label', 'sidewalk:left': 'no label', 'ref': 'no label', 'oneway': 'no label', 'lanes': 'no label', 'junction': 'no label', 'int_ref': 'no label', 'highway': 'no label', 'website': 'no label', 'url': 'no label', 'toll': 'no label', 'route': 'no label', 'operator': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'duration': 'no label', 'bicycle': 'no label', });
lyr_AreaLuar_9.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'METADATA': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', });
lyr_BatasDusun_10.set('fieldLabels', {'fid': 'hidden field', 'Dusun': 'inline label - visible with data', });
lyr_BatasDesa_11.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'METADATA': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', });
lyr_BatasKecamatan_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_BatasKabupaten_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BatasProvinsi_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_TitikPentingDesa_15.set('fieldLabels', {'fid': 'hidden field', 'Nama Bangunan/Fasilitas': 'inline label - visible with data', 'Kategori': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_TitikPentingDesa_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});