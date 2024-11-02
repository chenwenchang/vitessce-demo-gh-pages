export const myViewConfig = {
  "version": "1.0.0",
  "name": "10x visium human lymph node",
  "initStrategy": "auto",
  "datasets": [
    {
      "uid": "my-visium-dataset",
      "files": [
        {
          "type": "cells",
          "fileType": "anndata-cells.zarr",
          "url": "V1_Human_Lymph_Node.zarr",
          "options": {
            "mappings": {
              "UMAP": {
                "key": "obsm/X_umap",
                "dims": [
                  0,
                  1
                ]
              },
              "PCA": {
                "key": "obsm/X_pca",
                "dims": [
                  0,
                  1
                ]
              }
            }
          }
        }
      ]
    }
  ],
  "coordinationSpace": {
    "embeddingType": {
      "ET1": "PCA",
      "ET2": "UMAP"
    }
  },
  "layout": [
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "embeddingType": "ET1"
      },
      "x": 0,
      "y": 0,
      "w": 6,
      "h": 12
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "embeddingType": "ET2"
      },
      "x": 6,
      "y": 0,
      "w": 6,
      "h": 12
    }
  ]
};
