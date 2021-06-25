import { normalize } from "./normalizer";

// The schema of data is static which is known ahead of time - Restful API :)
const originalData = {
  id: "123",
  author: {
    id: "1",
    name: "Paul"
  },
  title: "My awesome blog post",
  comments: [
    {
      id: "324",
      commenter: {
        id: "2",
        name: "Nicole"
      }
    }
  ]
};

it.skip("should work as expected", () => {
  const normalizedData = normalize(originalData);
  expect(normalizedData).toEqual({
    result: "123",
    entities: {
      articles: {
        123: {
          id: "123",
          author: "1",
          title: "My awesome blog post",
          comments: ["324"]
        }
      },
      users: {
        1: { id: "1", name: "Paul" },
        2: { id: "2", name: "Nicole" }
      },
      comments: {
        324: { id: "324", commenter: "2" }
      }
    }
  });
});
