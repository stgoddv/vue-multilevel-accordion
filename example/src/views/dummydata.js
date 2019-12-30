const tree = {
  text: "Root",
  leaf: false,
  children: [
    {
      text: "Musicians",
      leaf: false,
      children: [
        {
          text: "IDM",
          leaf: false,
          children: [
            {
              text: "Ae",
              leaf: true
            },
            {
              text: "BoC",
              leaf: true
            },
            {
              text: "Mouse on Mars",
              leaf: true
            }
          ]
        },
        {
          text: "Electroacoustic",
          leaf: false,
          children: [
            {
              text: "K. Stockhausen",
              leaf: true
            },
            {
              text: "Edward Artemiev",
              leaf: true
            }
          ]
        }
      ]
    },
    {
      text: "Philosophers",
      leaf: false,
      children: [
        {
          text: "Carl Gustav Jung",
          leaf: true
        },
        {
          text: "Andrei Tarkovsky",
          leaf: true
        },
        {
          text: "George Gurdjieff",
          leaf: true
        }
      ]
    }
  ]
};

export { tree };
