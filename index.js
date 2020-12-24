var questions = [
    {
      statement : "tell me about yourself.",
      video : "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
      star : 4,
      comments : "good answer"
    },
    {
      statement : "what are your strengths and weakness?",
      video : "https://www.youtube.com/embed/CV0jN0P0Zi8",
      star : 1,
      comments : "not good enough"
    },
    {
      statement : "why should we hire you?",
      video : "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
      star : 5,
      comments : "best answer"
    },
    {
      statement : "what are your achievements?",
      video : "https://www.youtube.com/embed/CV0jN0P0Zi8",
      star : 2,
      comments : "average"
    },
    {
      statement : "what are your goals?",
      video : "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
      star : 3,
      comments : "satisfiable"
    },
]

function rating(n){
    var stars = "";
    for(var i=0 ; i<n ; i++){
        stars += "<span class='fa fa-star checked' id='star1'></span>";
    }
    for(var i=n ; i<5 ; i++){
        stars += "<span class='fa fa-star' id='star1'></span>";
    }

    return stars;
}

function displayReport(){

    var table = "<table id='demo' style='width:100%'><tr><th>Question</th><th>Comments</th> <th>Star Rating</th></tr>";
    for(var i=0 ; i<5 ; i++){
        var j = i+1;
        table += "<tr><td>"+j+". "+questions[i].statement+"</td><td>"+questions[i].comments+"</td> <td>"+rating(questions[i].star)+"</td></tr>";
    }
    table += "</table";
    var col2 = document.getElementById("secondColumn").innerHTML = table;
}

function prevQuestion(){

    var no = (document.getElementById("questionNumber").innerHTML)[1]-'0';

    if(no==1){
        no = 5;
    }
    else{
        no--;
    }

    submitFields(no);
}
function nextQuestion(){

    var no = (document.getElementById("questionNumber").innerHTML)[1]-'0';

    if(no==5){
        displayReport();
    }
    else{
        no++;
    }

    submitFields(no);
}

function submitFields(n){

    document.getElementById("questionNumber").innerHTML = "Q"+n;
    document.getElementById("questionStatement").innerHTML = questions[n-1].statement;
    document.getElementById("questionSolution").src =   questions[n-1].video;

    // updating rating
    for(var i=1 ; i<=5 ; i++){
        document.getElementById("star"+i).className = "fa fa-star";
    }
    for(var i=1 ; i<=questions[n-1].star ; i++){
        document.getElementById("star"+i).className = "fa fa-star checked";
    }
    document.getElementById("comment").innerHTML = questions[n-1].comments;
}