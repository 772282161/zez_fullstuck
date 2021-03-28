// let template = `
//     <ul>
//     <% for(let i=0; i < data.supplies.length; i++) { %>
//         <li><%= data.supplies[i] %></li>
//     <% } %>
//     </ul>
//     `;
//     console.log(template);

function compile(template){
        const evalExpr = /<%=(.+?)%>/g;
        const expr = /<%([\s\S]+?)%>/g;
    
        template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');
    
        template = 'echo(`' + template + '`);';
    
        let script =
        `(function parse(data){
        let output = "";
    
        function echo(html){
            output += html;
        }
    
        ${ template }
    
        return output;
        })`;
    
        return script;
}
    let parse = eval(compile(template));
    div.innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });   
