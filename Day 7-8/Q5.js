// Write a JavaScript program to get the volumeOfCylinder of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h where r is the radius and height is the height of the cylinder. 

const volumeOfCylinder={
    pi:Math.PI,
    radius:5,
    height:10,
    myval:function(){
        return (volumeOfCylinder.pi*(volumeOfCylinder.radius**2)*volumeOfCylinder.height).toFixed(4)
    }
    
};
console.log(volumeOfCylinder.myval());