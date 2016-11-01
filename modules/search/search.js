$(document).ready(function(){
 /* ========================================================================= */
  /* Typeahead
   /* ========================================================================= */
  var content = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: './modules/search/content.json'
  });

  $('#search').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: content,
    templates: {
      empty: [
        '<div class="empty-message">',
        'unable to find any content',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<div><strong>{{value}}</strong></div>')
    }
  }).on("typeahead:selected", function (event, selection) {
    var url = selection.link;
    window.location = url;
  });
});