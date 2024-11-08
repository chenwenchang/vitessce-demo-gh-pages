export const myViewConfig = {
    version: "1.0.17",
    name: "Wenchang test",
    description: "Spatial Visualization Demo",
    datasets: [
        {
            uid: "test1",
            name: "test1",
            files: [
                {
                    fileType: "anndata.zarr",
                    url: "https://chenwenchang.github.io/vitessce-demo-gh-pages/breast_spatial_sample1.zarr",
                    coordinationValues: {
                        obsType: "spot",
                        featureType: "gene",
                        featureValueType: "expression",
                        embeddingType: "UMAP"
                    },
                    options: {
                        obsFeatureMatrix: {
                            path: "obsm/X_hvg",
                            featureFilterPath: "var/highly_variable"
                        },
                        obsEmbedding: {
                            path: "obsm/X_umap"
                        },
                        obsLocations: {
                            path: "obsm/spatial"
                        },
                        obsSegmentations: {
                            path: "obsm/segmentations"
                        },
                        obsSets: [
                            { name: "Cell Type", path: "obs/cell_type" },
                            { name: "Sex", path: "obs/sex" },
                            { name: "Tissue", path: "obs/tissue" },
                            { name: "In Tissue", path: "obs/in_tissue" },
                            { name: "Donor", path: "obs/donor_id" },
                            { name: "Donor Menopausal Status", path: "obs/donor_menopausal_status" }
                        ],
                        featureLabels: {
                            path: "var/feature_name"
                        }
                    }
                },
                {
                    fileType: "image.ome-zarr",
                    url: "https://chenwenchang.github.io/vitessce-demo-gh-pages/breast_spatial_sample1.ome.zarr"
                }
            ]
        }
    ],
    initStrategy: "auto",
    coordinationSpace: {
        embeddingType: { UMAP: "UMAP" },
        obsType: { A: "spot" },
        featureType: { A: "gene" },
        featureValueType: { A: "expression" },
        featureValueColormapRange: { A: [0, 0.1] },
        spatialSegmentationLayer: {
            A: {
                opacity: 1,
                radius: 20,
                visible: true,
                stroked: false
            }
        },
        spatialImageLayer: {
            A: [
                {
                    type: "raster",
                    index: 0,
                    colormap: null,
                    transparentColor: null,
                    opacity: 1,
                    domainType: "Min/Max",
                    channels: [
                        {
                            selection: { c: 0 },
                            color: [255, 0, 0],
                            visible: true,
                            slider: [0, 255]
                        },
                        {
                            selection: { c: 1 },
                            color: [0, 255, 0],
                            visible: true,
                            slider: [0, 255]
                        },
                        {
                            selection: { c: 2 },
                            color: [0, 0, 255],
                            visible: true,
                            slider: [0, 255]
                        }
                    ]
                }
            ]
        },
        spatialZoom: { A: -2.598 },
        spatialTargetX: { A: 1008.88 },
        spatialTargetY: { A: 1004.69 }
    },
    layout: [
        {
            component: "obsSets",
            h: 8,
            w: 2,
            x: 0,
            y: 0,
            coordinationScopes: { obsType: "A" },
            uid: "A"
        },
        {
            component: "scatterplot",
            h: 8,
            w: 4,
            x: 2,
            y: 0,
            coordinationScopes: {
                embeddingType: "UMAP",
                obsType: "A",
                featureType: "A",
                featureValueType: "A",
                featureValueColormapRange: "A"
            },
            uid: "C"
        },
        {
            component: "spatial",
            h: 8,
            w: 4,
            x: 6,
            y: 0,
            coordinationScopes: {
                obsType: "A",
                featureType: "A",
                featureValueType: "A",
                spatialSegmentationLayer: "A",
                featureValueColormapRange: "A",
                spatialImageLayer: "A",
                spatialZoom: "A",
                spatialTargetX: "A",
                spatialTargetY: "A"
            },
            uid: "E"
        },
        {
            component: "layerController",
            coordinationScopes: {
              "obsType": "A",
              "spatialImageLayer": "A",
              "spatialSegmentationLayer": "A"
            },
            props: {
              "disableChannelsIfRgbDetected": true
            },
            h: 4,
            w: 2,
            x: 10,
            y: 0
          },
        {
            component: "featureList",
            h: 4,
            w: 2,
            x: 10,
            y: 4,
            coordinationScopes: { obsType: "A", featureType: "A" },
            uid: "G"
        }
    ]
};
