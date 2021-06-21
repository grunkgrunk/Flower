let n = 0
let c = 4

let theta = 0

const yellow = [255, 236, 39]

const blue = [41, 173, 255]

// let h = -height/2;

let petalradius = 40;

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
    noStroke()
}

function leaves(sr, pr, theta) {
    let r = sr + abs(sin(theta * 800)) * pr
    let x = r * cos(theta * 200)
    let y = r * sin(theta * 200)
    fill(255, 255, 255)
    ellipse(x, y, 5, 5)

}


function spiral(n, theta, color) {
    let a = n * theta
    let r = c * sqrt(n) + sin(theta * 100) * a
    let x = r * cos(a)
    let y = r * sin(a)
    fill(color)
    let s = map(r, 0, 100, 5, 1)
    ellipse(x, y, s, s)

    // let r = map(i, 0, 400, 50, 100)
    leaves(70, r / 10, a / 1000)
}

function draw() {
    theta += 0.0001
    background(0, 0, 0, 20)
    translate(width / 2, height / 2)

    for (let i = 0; i < 400; i++) {
        // rotate(mouseY / height)
        spiral(i, theta + PI / 2, yellow)
        spiral(i, theta, yellow)
    }
}
