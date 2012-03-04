var foo = {
        "one": "eddie would go"
        ,"two": "we excel on ice"
        ,"the_answer": 42
};        



describe(foo, function() {
    it("one", function() {
        expect(foo.one).toEqual("eddie would go");
    });
});
