// Some Quotes
function someQuotes() {
    const quotes = [
      {
        quote: "Start by what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        name:"Francis of Assisi"
          },
          {
              quote:"Believe you can and you're halfway there.",
              name:"Theodore Roosevelt"
          },
          {
              quote:"It does not matter how slowly you go as long as you do not stop.",
              name:"Confucius"
          },
          {
              quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
              name:"Thomas A. Edison"
          },
          {
              quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
              name:"Confucius"
          },
          {
              quote:"Don't watch the clock; do what it does. Keep going.",
              name:"Sam Levenson"
          },
          {
              quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
              name:"Ayn Rand"
          },
          {
              quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
              name:"Ayn Rand"
          },
          {
              quote:"Expect problems and eat them for breakfast.",
              name:"Alfred A. Montapert"
          },
          {
              quote:"Start where you are. Use what you have. Do what you can.",
              name:"Arthur Ashe"
          },
          {
              quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
              name:"Samuel Beckett"
          },
          {
              quote:"Be yourself; everyone else is already taken.",
              name:"Oscar Wilde"
          },
          {
              quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
              name:"Albert Einstein"
          },
          {
              quote:"Always remember that you are absolutely unique. Just like everyone else.",
              name:"Margaret Mead"
          },
          {
              quote:"Do not take life too seriously. You will never get out of it alive.",
              name:"Elbert Hubbard"
          },
          {
              quote:"People who think they know everything are a great annoyance to those of us who do.",
              name:"Isaac Asimov"
          },
          {
              quote:"Procrastination is the art of keeping up with yesterday.",
              name:"Don Marquis"
          },
          {
              quote:"Get your facts first, then you can distort them as you please.",
              name:"Mark Twain"
          },
          {
              quote:"A day without sunshine is like, you know, night.",
              name:"Steve Martin"
          },
          {
              quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
              name:"Ellen DeGeneres"
          },
          {
              quote:"Don't sweat the petty things and don't pet the sweaty things.",
              name:"George Carlin"
          },
          {
              quote:"Always do whatever's next.",
              name:"George Carlin"
          },
          {
              quote:"Atheism is a non-prophet organization.",
              name:"George Carlin"
          },
          {
              quote:"Hapiness is not something ready made. It comes from your own actions.",
              name:"Dalai Lama"
          }
    ];

    return quotes;
}
const quotes = someQuotes(); 

// Generate and Set RGB Color
function getRbgColor() {
    const rgbValue = [];
    
    for (let i = 0; i < 3; i++) {
        const number = Math.floor((Math.random() * 255) + 1);
        rgbValue.push(number);
    }

    $("body, button").css("background-color", `rgb(${rgbValue})`); 
    $("blockquote").css("color", `rgb(${rgbValue})`);
}

function buildURL(quote, name, company) {
    if (company == "twitter") {
        
        const frontUrlPart = "https://twitter.com/intent/tweet?hashtags=quotes&amp;text="
        const encodedText = encodeURIComponent(`"${quote}" - ${name}`);
    
        const fullHref = frontUrlPart.concat(encodedText);
        
        return fullHref;

    } else {

        const encodedCaption = encodeURIComponent(name);
        const encodedContent = encodeURIComponent(`${quote}`);
        
        const fullHref = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodedCaption}&content=${encodedContent}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button`;
        
        return fullHref;
    }

    
}
// Generate Quote
function generateQuote() {
    // Set Color
    setTimeout(() => {
        getRbgColor();
    }, 1000);
    
    // Get Quote ID
    const quoteNumber = quotes[Math.floor((Math.random() * 23) + 1)];
    
    // Get URLs
    const twitterURL = buildURL(quoteNumber.quote, quoteNumber.name, "twitter");
    const tumbrlURL = buildURL(quoteNumber.quote, quoteNumber.name, "tumbrl");
    
    $("blockquote").css("opacity", 0);
    
    setTimeout(() => {
        // Show Quote
        $("#quote").html(`<i class="fa fa-quote-left" aria-hidden="true"></i><span>${quoteNumber.quote}</span>`);
        $("#quoteAuthor").text(`- ${quoteNumber.name}`);
        $("#tweet-quote").attr("href", `${twitterURL}`);
        $("#tumblr-quote").attr("href", `${tumbrlURL}`);
        $("blockquote").css("opacity", 1);
    }, 1250);
}
// On Load
$( document ).ready(() => {
    
    // Add Event for New Quotes Button
    $("#newQuote").on("click", () => {
        setTimeout(() => {
            generateQuote();
        }, 500);
    });
    
    // Get Quote with ESC
    $( document ).keyup(e => {
        if (e.keyCode == 27) {
            setTimeout(() => {
                generateQuote();
            }, 500);
        }
    });
});




