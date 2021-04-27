const data = [
  {
    key: "reverse",
    name: "reverse",
    description: "Reverses a string.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string to reverse.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
  {
    key: "capitalize-first-letter",
    name: "capitalizeFirstLetter",
    description: "Capitalizes the first letter of a sentence/word.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string whose first letter has to be capitalized.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
  {
    key: "jumble-word",
    name: "jumbleWord",
    description:
      "Shuffles the letters in a sentence/word to form a jumbled sentence/word.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string to be jumbled.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
  {
    key: "to-camel-case",
    name: "toCamelCase",
    description: "Converts a sentence into camel case.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string to be converted into camel case.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
  {
    key: "to-kebab-case",
    name: "toKebabCase",
    description: "Converts a sentence into kebab case.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string to be converted into kebab case.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
  {
    key: "to-snake-case",
    name: "toSnakeCase",
    description: "Converts a sentence into snake case.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string to be converted into snake case.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
  {
    key: "to-pascal-case",
    name: "toPascalCase",
    description: "Converts a sentence into pascal case.",
    isMethod: true,
    returns: "string",
    parameters: [
      {
        name: "str",
        description: "The string to be converted into pascal case.",
        type: "string",
        optional: false,
        default: null,
      },
    ],
  },
].sort((a, b) => {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
});

export default data;
