/**
 * @fileoverview Enforce @throws comments for thrown errors.
 * @author Kyle Kashuba
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/undocumented-errors"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("undocumented-errors", rule, {
  valid: [
    `
    /**
     * @throws {Error}
     */
    function dangerous() {
      throw new Error();
    }
    `,
    `
      function getDangerousFunction() {
        return function dangerous() {
          throw new Error();
        }
      }
    `,
  ],

  invalid: [
    {
      code: `
        function dangerous() {
          throw new Error();
        }
      `,
      errors: [{ message: "This function is missing @throws documentation for 1 throw statement." }],
    },
    {
      code: `
        function dangerous() {
          throw new Error();
          throw new Error();
        }
      `,
      errors: [{ message: "This function is missing @throws documentation for 2 throw statements." }],
    },
    {
      code: `
        /**
         * @throws {Error}
         */
        function dangerous() {
          throw new Error();
          throw new Error();
        }
      `,
      errors: [{ message: "This function is missing @throws documentation for 1 throw statement." }],
    },
  ],
});
