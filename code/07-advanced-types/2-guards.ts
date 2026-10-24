// type guards
// descriminated union pattern -> we add a shared prop to all types that we are 
// combining in a union and we are using values of this prop which will be
// different for different value types to find out which concrete value type
// we are dealing. so we are discriminating based on shared property.
type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file', // shared property
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
  type: 'db', // shared property
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

// type predicate => return type (inferred) is not just a boolean but its `source is FileSource` => it is boolean under the hood + extra information attached => if fn returns `true` then `source` will be of type `FileSource` => therefore whereever you are going to use `isFile` fn, ts will have extra info that if `isFile` returns `true` then the `source` or value you passed will be of type `FileSource`
function isFile(source: Source) {
  return source.type === 'file';
}

function loadData(source: Source) {
  // if ('path' in source) {
  if (isFile(source)) {
    // source.path
    // source.path; => use that to open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}

// -------------------------------------------------------------
// using `instanceof` optr as typeguards
class User {
  constructor(public name: string) { }

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) { }

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }

  entity.scan();
}
