const quoteList = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing. ",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. ",
    "You must be the change you wish to see in the world. ",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. ",
    "The only thing we have to fear is fear itself. ",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "Do one thing every day that scares you.",
    "Well done is better than well said.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. ",
    "Be yourself; everyone else is already taken.",
    "If life were predictable it would cease to be life and be without flavor.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Life is a succession of lessons which must be lived to be understood.",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not",
    "Never let the fear of striking out keep you from playing the game.",
    "nly a life lived for others is a life worthwhile.",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Don't worry when you are not recognized, but strive to be worthy of recognition.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The secret of success is to do the common thing uncommonly well.",
    "The way to get started is to quit talking and begin doing.",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure."
];

const autherList = [
    "Nelson Mandela",
    "Walt Disney",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Oprah Winfrey ",
    "James Cameron ",
    "John Lennon ",
    "Mahatma Gandhi",
    "Mother Teresa",
    "Franklin D. Roosevelt",
    "Martin Luther King Jr. ",
    "Eleanor Roosevelt",
    "Benjamin Franklin",
    "Helen Keller",
    "Aristotle",
    "Ralph Waldo Emerson",
    "Oscar Wilde",
    "Eleanor Roosevelt",
    "Abraham Lincoln",
    "Ralph Waldo Emerson",
    "Oscar Wilde",
    "Babe Ruth",
    "Albert Einstein",
    "John Lennon",
    "Ralph Waldo Emerson",
    "Abraham Lincoln",
    "Nelson Mandela",
    "John D. Rockefeller Jr.",
    "Walt Disney",
    "Colin Powell"
];

function randomQuote() {
    const randomQIndex = Math.floor(Math.random() * quoteList.length);
    const quoteElement = quoteList[randomQIndex];
    const autherElement = autherList[randomQIndex];
    document.getElementById('quote-text').innerHTML = quoteElement;
    document.getElementById('auther-name').innerHTML = autherElement;

};
