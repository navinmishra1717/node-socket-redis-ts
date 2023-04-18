enum Color {
  brown = 'brown',
  black = 'black',
  white = 'white',
}

enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface Dog {
  name: string;
  breed: string;
  color: Color;
}

interface Cat {
  name: string;
  size: Size;
  color: Color;
}

/**
 * union types
 * Union types allow you to define a type that can be one of several types.
 * This feature enables you to create more flexible and expressive types.
 */
type Animal = Dog | Cat;

/**
 * Intersection types
 * Intersection types allow you to combine multiple types into one.
 * This is useful when you need an object to have properties from several different types.
 */
type Pet = Dog & Cat;

/**
 * Mappped types
 * Mapped types enable you to create new types by transforming properties of existing types.
 * This is particularly useful for creating variants of existing types without repeating the type definitions.
 * */

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadOnlyDog = ReadOnly<Dog>;

/**
 * Conditional types
 * Conditional types allow you to define a type that depends on a condition,
 * making it possible to create more dynamic type definitions.
 */
type IsString<T> = T extends string ? 'yes' : 'no';

type T1 = IsString<string>; // "yes"
type T2 = IsString<number>; // "no"

const t1: T1 = 'yes';
const t2: T2 = 'no';
console.log(t1, t2);

/**
 * You can use conditional types to create more advanced types,
 * such as extracting the return type of a function:
 */

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
//  This means that when T is a function type that takes any number of arguments(of any type) and returns a value,
//  R is set to the return type of that function. The infer keyword allows TypeScript to defer the definition of a
//  type until it can be inferred from another type.

type T3 = ReturnType<() => string>; // string
type T4 = ReturnType<(x: number, y: number) => number>; // number

const t3: T3 = 'hello';
const t4: T4 = 4;
console.log(t3, t4);

export const getAnimalProperty = () => {
  const animal: Animal = {
    name: 'rocky',
    breed: 'german shepherd',
    color: Color.brown,
  };

  console.log(animal.name, 'name');

  const pet: Pet = {
    breed: 'japanese breed',
    color: Color.white,
    name: 'puppy',
    size: Size.small,
  };

  console.log(pet.breed, 'breed');

  const dog: ReadOnlyDog = {
    breed: 'pug',
    color: Color.black,
    name: 'kaali',
  };
  console.log(dog.breed, 'breed');
  //   dog.name = 'bhote'; //  Cannot assign to 'name' because it is a read-only property.
};
