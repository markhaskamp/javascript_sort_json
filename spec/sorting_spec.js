var _ = require("../lib/underscore-min.1.3.1.js");

var foo = 
        [ {"first_name": "tony", "last_name": "perez"}
          ,{"first_name": "joe", "last_name": "morgan"}
          ,{"first_name": "dave", "last_name": "concepcion"}
          ,{"first_name": "pete", "last_name": "rose"}
          ,{"first_name": "johnny", "last_name": "bench"}
        ];


describe("sorting", function() {
  it("unsorted, first first_name is 'tony'", function() {
    expect(foo[0].first_name).toEqual("tony");
  });

  it("unsorted, first last_name is 'perez'", function() {
    expect(foo[0].last_name).toEqual("perez");
  });

  it("sortBy first_name, first first_name is 'dave'", function() {
    var sorted_list = _.sortBy(foo, function(foo_item) { return foo_item.first_name; });
    expect(sorted_list[0].first_name).toEqual("dave");
  });

  it("sortBy last_name, first last_name is 'bench'", function() {
    var sorted_list = _.sortBy(foo, function(foo_item) { return foo_item.last_name; });
    expect(sorted_list[0].last_name).toEqual("bench");
  });

});
