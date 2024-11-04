export const myViewConfig = {
  version: "1.0.0",
  name: "10x visium human lymph node",
  initStrategy: "auto",
  datasets: [
    {
      uid: "my-visium-dataset",
      files: [
        {
          type: "cells",
          fileType: "anndata-cells.zarr",
          url: "https://chenwenchang.github.io/vitessce-demo-gh-pages/V1_Human_Lymph_Node.zarr",
          options: {
            mappings: {
              UMAP: {
                key: "obsm/X_umap",
                dims: [0, 1]
              },
              PCA: {
                key: "obsm/X_pca",
                dims: [0, 1]
              },
              obsSets: [
                  {
                      name: "Clusters",
                      path: "obs/clusters"
                  }
              ]
            }
          }
        }
      ]
    }
  ],
  coordinationSpace: {
    embeddingType: {
      ET1: "PCA",
      ET2: "UMAP"
    },
    coordinationSpace: {
      dataset: {
        A: "my-visium-dataset"
      }
    },
  },
  layout: [
    {
      component: "obsSets",
      coordinationScopes: {
        datasets: "A"
      },
      x: 0,
      y: 0,
      w: 6,
      h: 12
    },
    {
      component: "scatterplot",
      coordinationScopes: {
        embeddingType: "ET2"
      },
      x: 4,
      y: 0,
      w: 6,
      h: 12
    },
    {
      component: "scatterplot",
      coordinationScopes: {
        embeddingType: "ET2"
      },
      x: 10,
      y: 0,
      w: 6,
      h: 12
    }
  ]
};