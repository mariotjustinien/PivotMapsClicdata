var format_Limite_Distr_REG_VV7V0 = new ol.format.GeoJSON();
var features_Limite_Distr_REG_VV7V0 = format_Limite_Distr_REG_VV7V0.readFeatures(json_Limite_Distr_REG_VV7V0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Distr_REG_VV7V0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limite_Distr_REG_VV7V0.addFeatures(features_Limite_Distr_REG_VV7V0);var lyr_Limite_Distr_REG_VV7V0 = new ol.layer.Vector({
                source:jsonSource_Limite_Distr_REG_VV7V0, 
                style: style_Limite_Distr_REG_VV7V0,
                title: "Limite_Distr_REG_VV7V"
            });var format_zoneintervention1 = new ol.format.GeoJSON();
var features_zoneintervention1 = format_zoneintervention1.readFeatures(json_zoneintervention1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zoneintervention1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_zoneintervention1.addFeatures(features_zoneintervention1);var lyr_zoneintervention1 = new ol.layer.Vector({
                source:jsonSource_zoneintervention1, 
                style: style_zoneintervention1,
                title: "zone intervention"
            });var format_Limite_District_Ifanadiana2 = new ol.format.GeoJSON();
var features_Limite_District_Ifanadiana2 = format_Limite_District_Ifanadiana2.readFeatures(json_Limite_District_Ifanadiana2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_District_Ifanadiana2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limite_District_Ifanadiana2.addFeatures(features_Limite_District_Ifanadiana2);var lyr_Limite_District_Ifanadiana2 = new ol.layer.Vector({
                source:jsonSource_Limite_District_Ifanadiana2, 
                style: style_Limite_District_Ifanadiana2,
                title: "Limite_District_Ifanadiana"
            });var format_Limite_Com_Distr_Ifanadiana3 = new ol.format.GeoJSON();
var features_Limite_Com_Distr_Ifanadiana3 = format_Limite_Com_Distr_Ifanadiana3.readFeatures(json_Limite_Com_Distr_Ifanadiana3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Com_Distr_Ifanadiana3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limite_Com_Distr_Ifanadiana3.addFeatures(features_Limite_Com_Distr_Ifanadiana3);var lyr_Limite_Com_Distr_Ifanadiana3 = new ol.layer.Vector({
                source:jsonSource_Limite_Com_Distr_Ifanadiana3, 
                style: style_Limite_Com_Distr_Ifanadiana3,
                title: "Limite_Com_Distr_Ifanadiana"
            });var format_Ifanadiana_roads4 = new ol.format.GeoJSON();
var features_Ifanadiana_roads4 = format_Ifanadiana_roads4.readFeatures(json_Ifanadiana_roads4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ifanadiana_roads4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Ifanadiana_roads4.addFeatures(features_Ifanadiana_roads4);var lyr_Ifanadiana_roads4 = new ol.layer.Vector({
                source:jsonSource_Ifanadiana_roads4, 
                style: style_Ifanadiana_roads4,
                title: "Ifanadiana_roads"
            });var format_Centredesant_Ifanadiana5 = new ol.format.GeoJSON();
var features_Centredesant_Ifanadiana5 = format_Centredesant_Ifanadiana5.readFeatures(json_Centredesant_Ifanadiana5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centredesant_Ifanadiana5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Centredesant_Ifanadiana5.addFeatures(features_Centredesant_Ifanadiana5);var lyr_Centredesant_Ifanadiana5 = new ol.layer.Vector({
                source:jsonSource_Centredesant_Ifanadiana5, 
                style: style_Centredesant_Ifanadiana5,
                title: "Centre-de-santé_Ifanadiana"
            });

lyr_Limite_Distr_REG_VV7V0.setVisible(true);lyr_zoneintervention1.setVisible(true);lyr_Limite_District_Ifanadiana2.setVisible(true);lyr_Limite_Com_Distr_Ifanadiana3.setVisible(true);lyr_Ifanadiana_roads4.setVisible(true);lyr_Centredesant_Ifanadiana5.setVisible(true);
var layersList = [lyr_Limite_Distr_REG_VV7V0,lyr_zoneintervention1,lyr_Limite_District_Ifanadiana2,lyr_Limite_Com_Distr_Ifanadiana3,lyr_Ifanadiana_roads4,lyr_Centredesant_Ifanadiana5];
lyr_Limite_Distr_REG_VV7V0.set('fieldAliases', {'LIB_PROV': 'LIB_PROV', 'LIB_REG': 'LIB_REG', 'C_DIST': 'C_DIST', 'LIB_DIST': 'LIB_DIST', 'Area_Km2': 'Area_Km2', });
lyr_zoneintervention1.set('fieldAliases', {'LIB_PROV': 'LIB_PROV', 'LIB_REG': 'LIB_REG', 'C_DIST': 'C_DIST', 'LIB_DIST': 'LIB_DIST', 'Area_Km2': 'Area_Km2', });
lyr_Limite_District_Ifanadiana2.set('fieldAliases', {'LIB_PROV': 'LIB_PROV', 'LIB_REG': 'LIB_REG', 'LIB_DIST': 'LIB_DIST', });
lyr_Limite_Com_Distr_Ifanadiana3.set('fieldAliases', {'LIB_REG': 'LIB_REG', 'LIB_DIST': 'LIB_DIST', 'LIB_COM': 'LIB_COM', 'LIB_PROV': 'LIB_PROV', 'Area_Km2': 'Area_Km2', 'PIVOT': 'PIVOT', });
lyr_Ifanadiana_roads4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', 'Shape_Leng': 'Shape_Leng', });
lyr_Centredesant_Ifanadiana5.set('fieldAliases', {'LIB_PROV': 'LIB_PROV', 'LIB_REG': 'LIB_REG', 'LIB_DIST': 'LIB_DIST', 'LIB_COM': 'LIB_COM', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALTITUDE': 'ALTITUDE', 'LIB_INFRA': 'LIB_INFRA', 'LIB_FKT': 'LIB_FKT', 'PIVOT_SUPP': 'PIVOT_SUPP', 'Nb_referen': 'Nb_referen', 'Reim_progr': 'Reim_progr', 'Ref_2': 'Ref_2', });
lyr_Limite_Distr_REG_VV7V0.set('fieldImages', {'LIB_PROV': 'TextEdit', 'LIB_REG': 'TextEdit', 'C_DIST': 'TextEdit', 'LIB_DIST': 'TextEdit', 'Area_Km2': 'TextEdit', });
lyr_zoneintervention1.set('fieldImages', {'LIB_PROV': 'TextEdit', 'LIB_REG': 'TextEdit', 'C_DIST': 'TextEdit', 'LIB_DIST': 'TextEdit', 'Area_Km2': 'TextEdit', });
lyr_Limite_District_Ifanadiana2.set('fieldImages', {'LIB_PROV': 'TextEdit', 'LIB_REG': 'TextEdit', 'LIB_DIST': 'TextEdit', });
lyr_Limite_Com_Distr_Ifanadiana3.set('fieldImages', {'LIB_REG': 'TextEdit', 'LIB_DIST': 'TextEdit', 'LIB_COM': 'TextEdit', 'LIB_PROV': 'TextEdit', 'Area_Km2': 'TextEdit', 'PIVOT': 'TextEdit', });
lyr_Ifanadiana_roads4.set('fieldImages', {'OBJECTID': 'TextEdit', 'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Centredesant_Ifanadiana5.set('fieldImages', {'LIB_PROV': 'TextEdit', 'LIB_REG': 'TextEdit', 'LIB_DIST': 'TextEdit', 'LIB_COM': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'ALTITUDE': 'TextEdit', 'LIB_INFRA': 'TextEdit', 'LIB_FKT': 'TextEdit', 'PIVOT_SUPP': 'TextEdit', 'Nb_referen': 'TextEdit', 'Reim_progr': 'TextEdit', 'Ref_2': 'TextEdit', });
lyr_Limite_Distr_REG_VV7V0.set('fieldLabels', {'LIB_PROV': 'no label', 'LIB_REG': 'no label', 'C_DIST': 'no label', 'LIB_DIST': 'no label', 'Area_Km2': 'no label', });
lyr_zoneintervention1.set('fieldLabels', {'LIB_PROV': 'no label', 'LIB_REG': 'no label', 'C_DIST': 'no label', 'LIB_DIST': 'no label', 'Area_Km2': 'no label', });
lyr_Limite_District_Ifanadiana2.set('fieldLabels', {'LIB_PROV': 'no label', 'LIB_REG': 'no label', 'LIB_DIST': 'no label', });
lyr_Limite_Com_Distr_Ifanadiana3.set('fieldLabels', {'LIB_REG': 'no label', 'LIB_DIST': 'no label', 'LIB_COM': 'no label', 'LIB_PROV': 'no label', 'Area_Km2': 'no label', 'PIVOT': 'no label', });
lyr_Ifanadiana_roads4.set('fieldLabels', {'OBJECTID': 'no label', 'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', 'Shape_Leng': 'no label', });
lyr_Centredesant_Ifanadiana5.set('fieldLabels', {'LIB_PROV': 'no label', 'LIB_REG': 'no label', 'LIB_DIST': 'no label', 'LIB_COM': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'ALTITUDE': 'no label', 'LIB_INFRA': 'no label', 'LIB_FKT': 'no label', 'PIVOT_SUPP': 'no label', 'Nb_referen': 'no label', 'Reim_progr': 'no label', 'Ref_2': 'no label', });
lyr_Centredesant_Ifanadiana5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});