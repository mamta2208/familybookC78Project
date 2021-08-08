var images = ["https://i.postimg.cc/W3CFBKnz/Jethalal-Family.jpg","https://i.postimg.cc/JhXQYNmb/Jethalal.jpg", "https://i.postimg.cc/CKCqfmS6/Champaklal.jpg" , "https://i.postimg.cc/mD81mkcY/Tappu.jpg", "https://i.postimg.cc/Hnrn321m/Sundar.jpg", "https://i.postimg.cc/pr5VKLKX/Daya.jpg"];
           
var names = ["Fmaily Book","Jethalal Gada", "Champaklal Gada", "Tipendra Gada", "Sundar lal", "Daya ben"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}