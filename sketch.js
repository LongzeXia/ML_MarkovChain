var UserInput;
var output;
var button;

//var chapter = "The ultimate goal of all art is the building! The ornamentation of the building was once the main purpose of the visual arts, and they were considered indispensable parts of the great building. Today, they exist in complacent isolation, from which they can only be salvaged by the purposeful and cooperative endeavours of all artisans. Architects, painters and sculptors must learn a new way of seeing and understanding the composite character of the building, both as a totality and in terms of its parts. Their work will then re-imbue itself with the spirit of architecture, which it lost in salon art. The art schools of old were incapable of producing this unity – and how could they, for art may not be taught. They must return to the workshop. This world of mere drawing and painting of draughtsmen and applied artists must at long last become a world that builds. When a young person who senses within himself a love for creative endeavour begins his career, as in the past, by learning a trade, the unproductive 'artist' will no longer be condemned to the imperfect practice of art because his skill is now preserved in craftsmanship, where he may achieve excellence. Architects, sculptors, painters – we all must return to craftsmanship! For there is no such thing as 'art by profession'. There is no essential difference between the artist and the artisan. The artist is an exalted artisan. Merciful heaven, in rare moments of illumination beyond man’s will, may allow art to blossom from the work of his hand, but the foundations of proficiency are indispensable to every artist. This is the original source of creative design. So let us therefore create a new guild of craftsmen, free of the divisive class pretensions that endeavoured to raise a prideful barrier between craftsmen and artists! Let us strive for, conceive and create the new building of the future that will unite every discipline, architecture and sculpture and painting, and which will one day rise heavenwards from the million hands of craftsmen as a clear symbol of a new belief to come.";
var chapter;
var ngrams = {};
var first_word;
var button;
var result;
var splitResult;
var start = false;
var startFrame;



function setup() {
    // createCanvas(800, 400);
    noCanvas();
    background(0);
    fill(255);


    UserInput = select('#inputC');
    output = select('#outputC');
    button = select("#submitC");
    

    button.mousePressed(markovIt);
}



function newText() {
    output.html(result);
}



function markovIt() {
    

    output.html(" ");
    
    var t = UserInput.value();

    var words = split(t, ' ');
    for (var i = 0; i < words.length; i++) {
        var target_word = words[i];
        var next_word = words[i + 1];

        if (!ngrams[target_word]) {
            ngrams[target_word] = [];
        }

        ngrams[target_word].push(next_word);
    }
    
    
    var get_first_word = false;
    
    while(!get_first_word){
        first_word = words[floor(random(words.length))];
        if (first_word.charCodeAt(0) >= 65 && first_word.charCodeAt(0) <= 90 ){
            get_first_word = true;
        }
    }

    result = first_word;
    var current_word = first_word;

    for (var i = 0; i < 500; i++) {

        var index = floor(random(ngrams[current_word].length));
        current_word = ngrams[current_word][index];

        result += " ";
        result += current_word;

        var last_character = current_word.substr(current_word.length - 1);
        if (last_character === ".") {
            break;
        }
    }

    splitResult = split(result, " ");

    newText();
    result = "";
}