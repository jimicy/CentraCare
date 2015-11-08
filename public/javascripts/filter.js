app.filter('reverse', function() {
  return function(items) {
    return items.reverse();
  };
});