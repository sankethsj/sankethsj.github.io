let count = 1;
const totalimg =5;
function nextimg(){
    count++;
    if(count<=totalimg){
    document.getElementById('imgholder').src = '/illustrations/images/image-slider-'+count+'.jpg';
    }
    else{
        count = 1;
        document.getElementById('imgholder').src = '/illustrations/images/image-slider-'+count+'.jpg';
    }
}

function previmg(){
    count--;
    if(count>0){
    document.getElementById('imgholder').src = '/illustrations/images/image-slider-'+count+'.jpg';
    }
    else{
        count = totalimg;
        document.getElementById('imgholder').src = '/illustrations/images/image-slider-'+count+'.jpg';
    }
}