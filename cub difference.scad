union(){
difference() {
	color("gray")cube([28.2, 28.2, 31.5]);
	translate([23, 5.2, 30])rotate ([180,0,0]) cylinder (h = 4, r=1.25, center = true, $fn=100);
    translate([5.2, 23, 30])rotate([180, 0, 0])cylinder (h = 4, r=1.25, center = true, $fn=100);
    translate([5.2, 5.2, 30])rotate([180, 0, 0])cylinder (h = 4, r=1.25, center = true, $fn=100);
     translate([23, 23, 30])rotate([180, 0, 0])cylinder (h = 4, r=1.25, center = true, $fn=100);
}
}
//------------------------------------------------
//module nema11()
//{
  
//    union()
//    {
       


//        translate([-14, -14, -31])
//     difference(){
//        color("gray")cube([28.2, 28.2, 31.5]);
//	translate([23, 23, 33.5])rotate ([180,0,0]) cylinder (h = 4, r=1.25, center = true, $fn=100);
     
//         translate([33.5, 23, 23])rotate ([180,0,0]) cylinder (h = 4, r=1.25, center = true, $fn=100);
// }
 
//        translate([0, 0, 31.5])
//        cylinder(r=2,h=1);

//        translate([0, 0, 31.5])
//        color("yellow")cylinder (h=2, r=11, $fn=30);
//        translate([0, 0, 31.5])
//         cylinder(h=20, r=2.5, $fn=30);
        
//    }
//}
//nema11();