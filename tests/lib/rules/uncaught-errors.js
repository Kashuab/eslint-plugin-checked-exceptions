/**
 * @fileoverview Prohibits calling a function that could throw errors without catching them
 * @author Kyle Kashuba
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/uncaught-errors"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("uncaught-errors", rule, {
  valid: [
    // give me some code that won't trigger a warning
    `
    /**
     * @throws {Error}
     *
     * @param test
     */
    function dangerous() {
      throw new Error();
    }
    
    try {
      dangerous();
    } catch (err) {
    
    }
    `
  ],

  invalid: [
    {
      code: `
        /**
         * @throws {Error}
         */
        function dangerous() {
          throw new Error();
        }

        dangerous();
      `,
      errors: [
        { message: "The function dangerous can throw an exception and needs to be called inside a try-catch block." }
      ],
    },
  ],
});
