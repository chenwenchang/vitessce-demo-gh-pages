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
                        obsType: "bead",
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
                        },S
                        image: {
                            path: "uns/spatial/HBCA12_spara1-2_ref382020/images"
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
                }
            ]
        }
    ],
    initStrategy: "auto",
    coordinationSpace: {
        embeddingType: { UMAP: "UMAP" },
        obsType: { A: "bead" },
        featureType: { A: "gene" },
        featureValueType: { A: "expression" },
        featureValueColormapRange: { A: [0, 0.1] },
        spatialSegmentationLayer: {
            A: { opacity: 1, radius: 16.74, visible: true, stroked: false }
        }
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
                featureValueColormapRange: "A"
            },
            uid: "E"
        },
        {
            component: "featureList",
            h: 8,
            w: 2,
            x: 10,
            y: 0,
            coordinationScopes: {
                obsType: "A",
                featureType: "A"
            },
            uid: "G"
        }
    ]
};