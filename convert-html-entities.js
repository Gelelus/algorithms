function convertHTML(str) {
  let charts = `&<>"'`;
  let entities = ['&amp;','&lt;','&gt;','&quot;','&apos;']
  return str.replace(/([&<>"'])/g, function(match, p1) {
    return entities[charts.indexOf(p1)]
  });
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"))
