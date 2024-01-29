/**
 * @fileoverview Prohibits calling a function that could throw errors without catching them
 * @author Kyle Kashuba
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Prohibits calling a function that could throw errors without catching them",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const functionsThatThrow = []

    const getComments = (node) => {
      return context.sourceCode.getCommentsBefore(node);
    }

    return {
      FunctionDeclaration(node) {
        const comments = getComments(node);
        const throwsComment = comments && comments.find(comment => comment.value.includes("@throws"));

        if (throwsComment) {
          functionsThatThrow.push(node.id.name);
        }
      },

      CallExpression(node) {
        const functionId = node.callee.name;

        if (functionsThatThrow.includes(functionId)) {
          let parent = node;

          while (parent) {
            if (parent.type === "TryStatement") return;
            parent = parent.parent;
          }

          context.report({
            node,
            message: "The function " + node.callee.name + " can throw an exception and needs to be called inside a try-catch block."
          });
        }
      }
    };
  },
};
