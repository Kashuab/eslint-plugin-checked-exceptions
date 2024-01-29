/**
 * @fileoverview Enforce @throws comments for thrown errors.
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
      description: "Enforce @throws comments for thrown errors.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      FunctionDeclaration(node) {
        const functionSource = context.sourceCode.getText(node);
        const throwStatements = functionSource.match(/throw /g);
        if (!throwStatements) return;

        const comments = context.sourceCode.getCommentsBefore(node).reduce((str, comment) => str + comment.value, '');
        const throwsComments = comments ? comments.match(/@throws/g) || [] : [];

        const undocumentedErrorsCount = throwStatements.length - throwsComments.length;

        if (undocumentedErrorsCount > 0) {
          context.report({
            node,
            message: `This function is missing @throws documentation for ${undocumentedErrorsCount} throw statement${undocumentedErrorsCount > 1 ? 's' : ''}.`,
          })
        }
      },
    };
  },
};
