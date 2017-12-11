let abc = ( a, b, c ) => {
  return ( a + b + c );
}

let abcdef = ( a, b, c, d, e, f ) => {
  return ( a + b + c + d + e + f );
}

let curry = ( curried ) => {
  return function curr1( ...args ) {
    if ( args.length >= curried.length ) {
      return curried( ...args )
    } else {
        return function curr2( ...moreArgs ) {
          let newArgs = [...args, ...moreArgs];
                return curr1( ...newArgs );  
        }
      }
  }
}

abc.curry = curry( abc );
abcdef.curry = curry( abcdef );

function assert ( a, b ) {
  if ( a !== b ) {
    console.log( 'Test not passed' );
  } else {
      console.log( 'Test passed' );
    }
}

assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');