var questions = [
    {
      statement : "tell me about yourself",
      video : "https://www.youtube.com/watch?v=EzGH3hZuJVk",
      star : 4,
      comments : "good answer"
    },
    {
      statement : "what are your strengths and weakness?",
      video : "https://youtu.be/3bhor7R2dfo",
      star : 1,
      comments : "not good enough"
    },
    {
      statement : "why should we hire you?",
      video : "https://youtu.be/pAo16t5LT5I",
      star : 5,
      comments : "best answer"
    },
    {
      statement : "what are your achievements?",
      video : "https://youtu.be/B3pkv2AKDsk",
      star : 2,
      comments : "average"
    },
    {
      statement : "what are your goals?",
      video : "https://youtu.be/B9FeVjUZrpw",
      star : 3,
      comments : "satisfiable"
    },
]


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
        //show result
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