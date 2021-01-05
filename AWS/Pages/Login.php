<!--
Login Page for all agents.
-->
    
	<!DOCTYPE html> 
	<?php
 /* include "connection.php";
if (isset($_POST["email_address"])&&($_POST["password"]) )
{

	$email_address=$_POST["email_address"];
	$password=$_POST["password"];

	$result=mysqli_query($connection,"Select customer_id from table1 where email_address='$email_address' and password='$password'") or die(mysqli_error());
if($result)
{
	$result=mysqli_fetch_array($result);
	$customer_id=$result['customer_id'];

$_SESSION['customer_id']=$customer_id;
$_SESSION['email_address']=$email_address;


if ($customer_id>0)
{
	session_start();
	echo $_SESSION['email_address']=$email_address;
	echo $_SESSION['customer_id']=$customer_id;
header("location:Home.html");
}

else
{
	echo $_SESSION['email_address']=$email_address;
echo "Invalid email or password";

}



}
else
{
	header("location:Login.php");
}
} */

?> 
	   
    <html>    
    <head>    
        <title>Login</title>    
            
    </head>    
    <body>    
        <h2 color="black">Login Here</h2><br>    
		
        <div class="login">    
        <form id="login" method="post" align="center">  
				<div>

<br><br>
            <label><b>User Name     
            </b>    
            </label>    
            <input type="text" name="email_address" id="email_address" placeholder="Email Address">    
            <br><br>    
            <label><b>Password     
            </b>    
            </label>    
            <input type="Password" name="password" id="password" placeholder="Password">    
            <br><br>    
            <input type="submit" name="log" id="log" value="Log In">       
            <br><br>    
               <div>
              
        </form>     
    </div>    
    </body>    
    </html>     
