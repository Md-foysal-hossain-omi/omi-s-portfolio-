	<?php 

		$file = fopen("foysal.txt","w");
		mode(overwrites)
		fwrite($file,"Hello,welcome to PHP File Handling!");

		fclose($file);
		echo "File created and written successfully!";




	 ?>



$file = fopen("foysal.txt","w");
		fwrite($file,"Hello,bangladesh!");	
		fclose($file);
		echo "File created and written successfully! <br>";
		


		$file = fopen("foysal.txt","a");
		fwrite($file,"\n This line is added later!");
		fclose($file);
		echo "New File created and written successfully! <br>";


		$file = fopen("foysal.txt","r");
		$content = fread($file,filesize("foysal.txt"));
		fclose($file);
		echo "File created and written successfully! <br>";
