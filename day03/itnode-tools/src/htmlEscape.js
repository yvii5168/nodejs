
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, match => {
    switch (match) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '&':
        return '&amp;';
    }
  });
}

function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case '&lt;':
        return '<';
        break;
      case '&gt;':
        return '>';
        break;
      case '&quot;':
        return '"';
        break;
      case '&amp;':
        return '&';
        break;
    
      default:
        break;
    }
  });
}

module.exports={
  htmlEscape,
  htmlUnEscape
}