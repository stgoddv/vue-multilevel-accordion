const tree = {
  text: "Root",
  leaf: false,
  children: [{
      text: "Rama de derecho",
      leaf: false,
      children: [{
          text: "Ramo 1",
          leaf: false,
          children: [{
              text: "Unidad 1",
              leaf: true
            },
            {
              text: "Unidad 2",
              leaf: true
            },
            {
              text: "Unidad 3",
              leaf: true
            }
          ]
        },
        {
          text: "Ramo 2",
          leaf: false,
          children: [{
              text: "Unidad 1",
              leaf: true
            },
            {
              text: "Unidad 2",
              leaf: true
            }
          ]
        }
      ]
    },
    {
      text: "Rama de Civil",
      leaf: false,
      children: [{
        text: "Ramo 1",
        leaf: false,
        children: [{
            text: "Unidad 1",
            leaf: true
          },
          {
            text: "Unidad 2",
            leaf: true
          },
          {
            text: "Unidad 3",
            leaf: true
          }
        ]
      }]
    }
  ]
};

export {
  tree
};