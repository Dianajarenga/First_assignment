<!DOCTYPE html>
<html lang="en">

<head >
  <meta charset=" UTF-8">
  <title></title>
  <link rel="stylesheet" href="style.css">
  <h1>ADOPT ME</h1>
</head>
<body style="background-color:rgb(64, 233, 219);" >
  <div class="container"><div class="navbar">
    <div class="logo">
      <img src="https://www.vhv.rs/dpng/d/377-3776434_whispering-dog-design-dog-logo-design-png-transparent.png " length=50px width=50PX   >
    </div>
    <nav>
     <ul style="background-color: rgb(62, 230, 252);">
        <li><a href=""><strong> BREEDS</a></li>
        <li><a href=""><strong>BREEDERS</strong></a></li>
        <li><a href=""><strong>VETS</strong></a></li>
        <li><a href=""><strong>SUPPLIES</strong></a></li>
        <li><a href=""><strong>CONTACT</strong></a></li>
      </ul></nav>
     <a href="" > <img src="data:image/png;base64,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" width="30" length="30" > </a>
    </div></div>
     <div class="row">
       <div class="col-2"><h1>WILL YOU BE MY BEST FRIEND??</h1>
        <p>A dog is a mans best friend ,why search too far??</p>
        <img src="https://vippuppies.com/wp-content/uploads/2018/06/shutterstock_141480568.jpg"  >
      <a href="" class="btn">Adopt now</a>
      </div>
          <div class="col-2">
            <img src="" alt="">
     </div>
  
 <P><img src="https://i.pinimg.com/564x/9a/be/c7/9abec7f7527c81596327be2672dd6597.jpg" width="300" height="465">
   <br><i>Dogs have a natural way of finding people who need <br> them & filling an emptiness we didnt know we even had. </i></P>   
</body>
</html>