// any -> allows anything you can use `val.log()` and ts won't complain. 
function process1(val: any) {
  val.log(); // no-error // we don't know if `val` has `log` method.
}

// unknown -> will give error that `might` not have `log` method ie `'val' is of type 'unknown'`
function process2(val: unknown) {
  val.log();
}

// what unknown does is it foreces you the developer to add additional `if` checks before using the value

function process(val: unknown) {
  // checking the value.
  if (
    typeof val === 'object' &&
    !!val &&
    // `!!` is used to check if value if truthy. `!!` converts any value to boolean `true` or `false`
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log();
  }
}

// `unknown` forces developer to perform checks before using the value.
// it makes sure that you can safely execute the code by checking
// bunch of if conditions so that you can't run into runtime error.

// with `any` you can direclty call `val.log()` ts won't complain and if `val` didn't
// turn out to be object then you will get run time error.