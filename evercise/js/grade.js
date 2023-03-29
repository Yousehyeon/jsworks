<script>
        let score = 75;
        let grade ; //undefined
        if(score >= 90) {
            grade = "A"};
        else if(score =< 80 && 90 > score){
            grade = "B"};
        else if(score <= 70 && 80 > score){
            grade = "C"};
        else if(score <= 60 && 70 > score){
            grade = "D"
        ;}
        else { grade = "F"};
        document.write("학점은 <span>" + grade + "</span>입니다.")
    </script>