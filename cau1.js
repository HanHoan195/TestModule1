
        let x = "";
        let a = 8;
        let b = 12;
        let c = -20;
        let delta = b * b - (4 * a * c);
        console.log(delta);

        if(delta < 0){
            console.log("Phương trình vô nghiệm.");
        }
        if(delta == 0){
            console.log(`Phương trình có nghiệm kép x = ${-b / (2 * a)}`);
        }
        if(delta > 0){
            console.log(`Phương trình có 2 nghiệm: x1 = ${(b + Math.sqrt(delta)) /( 2 * a)} , x2 = ${(b - Math.sqrt(delta)) /( 2 * a)}`);
        }

