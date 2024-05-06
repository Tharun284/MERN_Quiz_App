export default [
    {
        id: 1,
        question : "Javascript is an _______ language",
        options : [
            'Object-Oriented',
            'Object-Based',
            'Procedural',
        ]
    },
    {
        id: 2,
        question : "Following methods can be used to display data in some form using Javascript",
        options : [
            'document.write()',
            'console.log()',
            'window.alert()',
        ]
    },
    {
        id: 3,
        question : "When an operator value is NULL, the typeof returned by the unary operator is:",
        options : [
            'Boolean',
            'Undefined',
            'Object',
        ]
    },
    {
        id: 4,
        question : "What does the toString() method return?",
        options : [
            'Return Object',
            'Return String',
            'Return Integer'
        ]
    },
    {
        id: 5,
        question : "Which function is used to serialize an object into a JSON string?",
        options : [
            'stringify()',
            'parse()',
            'convert()',
        ]
    },
    {
        id: 6,
        question : "In JavaScript, what keyword is used to declare variables with block scope?",
        options : [
            'var',
            'let',
            'const',
        ]
    },
    {
        id: 7,
        question : "Which of the following is not a valid way to create a JavaScript array?",
        options : [
            'var arr = [1, 2, 3];',
            'var arr = new Array(1, 2, 3);',
            'var arr = {1, 2, 3};',
        ]
    },
    {
        id: 8,
        question : "The '===' operator in JavaScript compares both the value and the _______ of the operands.",
        options : [
            'data type',
            'memory location',
            'size',
        ]
    },
    {
        id: 9,
        question : "What does the isNaN() function return if the argument is not a number?",
        options : [
            'true',
            'false',
            'NaN',
        ]
    },
    {
        id: 10,
        question : "What does the 'this' keyword refer to in JavaScript?",
        options : [
            'The current function',
            'The global object',
            'The object that owns the current code',
        ]
    }
].map(question => ({
    ...question,
    question: `${question.id}. ${question.question.includes('. ') ? question.question.substring(question.question.indexOf('. ') + 2) : question.question}`
}));

export const answers = [0, 1, 2, 1, 0, 1, 2, 0, 0, 2];
