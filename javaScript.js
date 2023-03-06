const quotes = Array(
  '“ People don’t really want to know how you’re doing. They want to wait until you’re done telling them so they can tell you how they’re doing."',
  "“It's easier to watch myself be sad than actually feel sad.”",
  "“It's crazy how lonely it is to be in a family.”",
  "“There was more than one type of perfectionist. And that I qualified because the kind of perfectionist I was, was the kind that abandoned everything if I wasn’t good enough at it. And that’s why I couldn’t finish tasks.”",
  "“We all have the same boring problems. Sometimes the best thing you can do is talk about it.”",
  "“I find that the more I hide, the more presentable I am to the world”",
  "“Sisters never stand a chance to be friends. We're pitted against each other from the moment we are born. A daughter is a treasure. Two is a tax.”",
  "“Everything about my existence feels like a costume.”",
  "“I know what it's like to want to leave. How it feels when the home you have is a mirage, an illusion. But I know that wherever I am, if June's around, I'll be ok.”",
  "“People aren't abandoning you just because they go.”",
  "“Marriages are the original tiny cult.”",
  "“What's the point? The planet is on fire and everything is random.”",
  "“You know how it is, church-folk are all up in your business until that shit actually gets dark. Then, they just think you’re contagious.”"
);

function quoteNext(e){
    let random = Math.floor(Math.random()*quotes.length);
    quotesText.innerText = quotes[random];
};
const quotesText = document.querySelector('.quote_text');
const button = document.querySelector(".button_quote");
button.addEventListener("click", quoteNext);