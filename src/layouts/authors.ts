export const authors = [
  {
    name: "Caolan McKendry",
    image: "https://files.api.caolan.xyz/static/images/headshot-circle-512px.png",
  },
  {
    name: "Noel Watters",
    image: "https://files.api.caolan.xyz/static/images/jordan-circle-512px.png",
  },
  {
    name: "Jordan Bradley",
    image: "https://files.api.caolan.xyz/static/images/noel-circle-512px.png",
  },
];

const defaultAuthor = authors[0];

export const getAuthor = (name: string) => {
  const author = authors.find(author => author.name === name);

  return author ?? defaultAuthor;
};
