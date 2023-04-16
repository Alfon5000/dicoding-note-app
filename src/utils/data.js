const getData = () => {
  return [
    {
      id: 1,
      title: `React`,
      body: `Developed by Facebook, React is a popular and widely-used JavaScript framework for building user interfaces. It uses a component-based approach and allows developers to build reusable UI components.`,
      createdAt: formattedDate(Date()),
      archived: false,
    },
    {
      id: 2,
      title: `Angular`,
      body: `Developed by Google, Angular is a comprehensive framework for building web applications. It provides a complete solution for everything from building UI components to handling data and routing.`,
      createdAt: formattedDate(Date()),
      archived: false,
    },
    {
      id: 3,
      title: `Vue.js`,
      body: `Vue.js is a progressive JavaScript framework that is gaining popularity for its simplicity and flexibility. It is easy to learn and can be used to build both small and large-scale applications.`,
      createdAt: formattedDate(Date()),
      archived: false,
    },
    {
      id: 4,
      title: `jQuery`,
      body: `jQuery is a fast and lightweight JavaScript library that simplifies HTML document traversal and manipulation, as well as event handling and animation.`,
      createdAt: formattedDate(Date()),
      archived: true,
    },
    {
      id: 5,
      title: `Ember.js`,
      body: `Ember.js is a framework for building ambitious web applications. It provides a complete solution for building complex, data-driven web applications.`,
      createdAt: formattedDate(Date()),
      archived: true,
    },
  ];
};

const formattedDate = (date) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
};

export { getData, formattedDate };
