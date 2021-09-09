// distance between
// two points in 3 D.   
 
    export default function distanceBetween([x1 , y1 , z1] , [x2 , y2 , z2]) {
        let d = Math.pow((Math.pow(x2 - x1, 2) +
                Math.pow(y2 - y1, 2) +
                Math.pow(z2 - z1, 2) * 1.0), 0.5);
        let distance = d.toFixed(10);
        return distance;
    }
