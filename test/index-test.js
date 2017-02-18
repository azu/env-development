// MIT © 2017 azu
"use strict";
const assert = require("assert");
assert(process.env.NODE_ENV !== "development");
require("../lib/index");
assert(process.env.NODE_ENV === "development");
