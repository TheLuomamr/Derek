image = new Array()
image[1] = "./images/1.jpg"
image[2] = "./images/2.jpg"
image[3] = "./images/3.jpg"
image[4] = "./images/4.jpeg"
image[5] = "./images/5.jpeg"
image[6] = "./images/6.jpeg"
image[7] = "./images/7.jpeg"
image[8] = "./images/8.jpeg"
image[9] = "./images/9.jpeg"
image[10] = "./images/10.jpeg"
image[11] = "./images/11.jpeg"
image[12] = "./images/12.jpeg"
image[13] = "./images/13.jpeg"
image[14] = "./images/14.jpeg"
image[15] = "./images/15.jpeg"
image[16] = "./images/16.jpeg"
image[17] = "./images/17.jpeg"
image[18] = "./images/18.jpeg"
image[19] = "./images/19.jpeg"
image[20] = "./images/20.jpeg"
image[21] = "./images/21.jpeg"
image[22] = "./images/22.jpeg"
image[23] = "./images/23.jpeg"
image[24] = "./images/24.jpeg"
image[25] = "./images/25.jpeg"
image[26] = "./images/26.jpeg"
image[27] = "./images/27.jpeg"
image[28] = "./images/28.jpeg"
image[29] = "./images/29.jpeg"
image[30] = "./images/30.jpeg"
image[31] = "./images/31.jpeg"

var currentdate = new Date()
var imagenumber = currentdate.getDate()

document.write('<img class=img-fluid src="' + image[imagenumber] + '">')
