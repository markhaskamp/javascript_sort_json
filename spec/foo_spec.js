var foo = {
        "one": "eddie would go"
        ,"two": "we excel on ice"
        ,"the_answer": 42
};        



describe("foo", function() {
    it("one", function() {
        expect(foo.one).toEqual("eddie would go");
    });

    it("two", function() {
      expect(foo.two).toEqual("we excel on ice");
    });

    it("life, the universe, and everything", function() {
      expect(foo.the_answer).toEqual(42);
    });
});
