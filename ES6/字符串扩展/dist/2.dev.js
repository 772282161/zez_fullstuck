"use strict";

// let template = `
//     <ul>
//     <% for(let i=0; i < data.supplies.length; i++) { %>
//         <li><%= data.supplies[i] %></li>
//     <% } %>
//     </ul>
//     `;
//     console.log(template);
function compile(template) {
  var evalExpr = /<%=(.+?)%>/g;
  var expr = /<%([\s\S]+?)%>/g;
  template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');
  template = 'echo(`' + template + '`);';
  var script = "(function parse(data){\n        let output = \"\";\n    \n        function echo(html){\n            output += html;\n        }\n    \n        ".concat(template, "\n    \n        return output;\n        })");
  return script;
}

var parse = eval(compile(template));
div.innerHTML = parse({
  supplies: ["broom", "mop", "cleaner"]
});