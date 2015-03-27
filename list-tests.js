var to_req = require("./list.js")

QUnit.test("A new List is empty", function (assert) {
	var l = new to_req.List()

	assert.equal(l.empty(), true)
	assert.equal(l.head(), null)
	assert.equal(l.empty(), true, "The to_req.List is truely empty!")
	assert.equal(l.head(), null, "The head has 'null'")

});

QUnit.test("It is really a List", function (assert) {
  var l = new to_req.List()
  l.add("a")
  l.add("b")
  l.add("c")
  assert.equal(l.item.data, "c")
  assert.equal(l.item.tail.data, "b")
  assert.equal(l.item.tail.tail.data, "a")
  assert.equal(l.item.tail.tail.tail, null)
  assert.equal(l.item.data, "c", "Expected 'c'")
  assert.equal(l.item.tail.data, "b", "Expected 'b'")
  assert.equal(l.item.tail.tail.data, "a", "Expected 'a'")
  assert.equal(l.item.tail.tail.tail, null, "Expected 'null'")
});

QUnit.test("Head of the List contains most recent addition", function (assert) {
  var l = new to_req.List()
  l.add("a")
  assert.equal(l.head(), "a")
  l.add("b")
  assert.equal(l.head(), "b")
  l.add("c")
  l.add("d")
  assert.equal(l.head(),"d")
});


QUnit.test("Returns the correct length of a List", function (assert) {
  var l = new to_req.List()
  assert.equal(l.length(), 0)
  l.add("a")
  l.add("b")
  l.add("c")
  assert,equal(l.length(),3)
  l.pop()
  assert,equal(l.length(),2)
  l.pop()
  l.pop()
  assert,equal(l.length(),0)
  assert.equal(l.length(), 0, "Expected length 0")
  l.add("a")
  l.add("b")
  l.add("c")
  assert,equal(l.length(),3, "Expected length 3")
  l.pop()
  assert,equal(l.length(),2, "Expected length 2")
  l.pop()
  l.pop()
  assert,equal(l.length(),0, "Expected length 0")
});


QUnit.test("Pop gets the most recent element off the List", function (assert) {
  var l = new to_req.List()
  l.add("a")
  l.add("b")
  l.add("c")

  assert.equal(l.pop(),"c")
  assert.equal(l.head(),"b")
  assert.equal(l.length(), 2)

  assert.equal(l.pop(),"b")
  assert.equal(l.head(),"a")
  assert.equal(l.length(), 1)

  assert.equal(l.pop(),"a")
  assert.equal(l.head(),null)
  assert.equal(l.length(), 0)

  // Any further pop()s return null 
  assert.equal(l.pop(),null)
  assert.equal(l.head(),null)
  assert.equal(l.empty(), true)
});



QUnit.test("Returns the last element in the List", function (assert) {
  var l = new to_req.List()
  assert.equal(l.last(), null)
  l.add("a")
  l.add("b")
  l.add("c")
  assert.equal(l.last(),"a")
  assert.equal(l.length(), 3)
});

QUnit.test("Check to see if two List are equal", function (assert) {
  var l = new to_req.List()
  var m = new to_req.List()

  assert.ok(l.equals(m), "Lists are equal")
  l.add("a")
  l.add("b")
  l.add("c")

  m.add("a")
  m.add("b")
  m.add("c")
  assert.ok(l.equals(m),"Lists are equal")
});

QUnit.test("Reverse a to_req.List", function(assert){

  var l = new to_req.List();
  var m = new to_req.List();
  l.reverse();
  assert.ok(l.equals(m), "The List is reversed");

  l.add("a")
  l.add("b")
  l.add("c")

  l.reverse()

  m.add("c")
  m.add("b")
  m.add("a")

  assert.ok(m.equals(l), "The List is reversed")  

});

QUnit.test("Merge two Lists", function(assert){

  var l = new to_req.List();
  var m = new to_req.List();

  l.add("a")
  l.add("b")
  l.add("c")

  m.add("1")
  m.add("2")
  m.add("3")

  l.merge(m)

  var o = new to_req.List();


  o.add("a")
  o.add("b")
  o.add("c")
  o.add("3")
  o.add("2")
  o.add("1")

  assert.ok(o.equals(l), "The Lists are the same")  

});