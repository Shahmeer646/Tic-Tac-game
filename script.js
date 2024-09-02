let counter = 0, result1, result2, index, index1, arr = [], arr1 = [], no = 0, no1 = 0;
let a = Array.from(document.querySelectorAll(".click"))
let b = Array.from(document.querySelectorAll(".click"))

async function gameover() {
    if (result1 == true) {
        setTimeout(() => {
            document.querySelector(".gameover").style.zIndex = 2;
            document.querySelector(".inner").innerHTML = "Player one Win"
            document.querySelector(".click")
        }, 200);
    }

    else if (result2 == true) {
        setTimeout(() => {
            document.querySelector(".gameover").style.zIndex = 2;
            document.querySelector(".inner").innerHTML = "Player Two Win"

        }, 300);
    }
}


const result = (arr) => {

    let array1 = [0, 1, 2];
    let array2 = [0, 4, 8];
    let array3 = [3, 4, 5];
    let array4 = [6, 7, 8];
    let array5 = [1, 4, 7];
    let array6 = [0, 3, 6];
    let array7 = [2, 5, 8];


    if (array1.every(value => arr.includes(value))) {
        console.log("All values (0, 1, 2) exist in the array.");
        return true;
    }

    else if (array2.every(value => arr.includes(value))) {
        console.log("All values (0, 5, 8) exist in the array.");
        return true;
    }

    else if (array3.every(value => arr.includes(value))) {
        console.log("All values (3, 4, 5) exist in the array.");
        return true;
    }

    else if (array4.every(value => arr.includes(value))) {
        console.log("All values (6, 7, 8) exist in the array.");
        return true;
    }

    else if (array5.every(value => arr.includes(value))) {
        console.log("All values (3, 4, 5) exist in the array.");
        return true;
    }

    else if (array6.every(value => arr.includes(value))) {
        console.log("All values (6, 7, 8) exist in the array.");
        return true;
    }

    else if (array7.every(value => arr.includes(value))) {
        console.log("All values (3, 4, 5) exist in the array.");
        return true;
    }



}



async function main() {

    document.querySelector(".restart").addEventListener("click", () => {

        location.reload(true)
    })

    document.querySelector(".Quite").addEventListener("click", () => {
        document.querySelector(".gameover").style.zIndex = 0;
        // location.reload(true)

    })

    if (a.length == 0) {
        document.querySelector(".gameover").style.zIndex = 2;
    }

    a.forEach(e => {
        e.addEventListener("click", () => {
            index = b.indexOf(e)
            index1 = a.indexOf(e)
            // console.log(index1)

            if (!(index1 == -1)) {

                if (counter == 0) {
                    arr[no] = index;
                    no += 1;
                    e.innerHTML = "o"
                    e.style.backgroundColor = "yellow"
                    counter = counter + 1;
                    a.splice(index1, 1)
                }
                else {
                    arr1[no1] = index;
                    no1 += 1;
                    e.style.backgroundColor = " rgb(114, 194, 255)"
                    e.innerHTML = "+"
                    counter = 0;
                    a.splice(index1, 1)
                    console.log(a)
                }
            }

            if (a.length == 0) {
                document.querySelector(".gameover").style.zIndex = 2;
            }

            result1 = result(arr)
            result2 = result(arr1)
            gameover(result1)
            gameover(result2)
        })

    })

}
main()
