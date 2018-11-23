function to_binary(num,precision){
	var binary_num = [];
	while(num >= 1){
		if(num%2 == 1){
		binary_num.push(true);
	}else{
		binary_num.push(false);
	}
		num = parseInt(num/2);
	}
	while(binary_num.length != precision){
		binary_num.push(false);
	}
	return binary_num.reverse();
}
class DISPLAY{
  constructor(left_padding,right_padding,aspect_ratio){
    this.seg = [false,false,false,false,false,false,false];
    this.left_padding = left_padding;
    this.right_padding = right_padding;
    this.aspect_ratio = aspect_ratio
  }
  segments(){
  	if(this.seg[0])fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 40)*this.aspect_ratio,(this.right_padding + 20)*this.aspect_ratio,100*this.aspect_ratio,20*this.aspect_ratio,20);	//a
  	if(this.seg[6]) fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 40)*this.aspect_ratio,(this.right_padding + 140)*this.aspect_ratio,100*this.aspect_ratio,20*this.aspect_ratio,20);	//g
  	if(this.seg[3]) fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 40)*this.aspect_ratio,(this.right_padding + 260)*this.aspect_ratio,100*this.aspect_ratio,20*this.aspect_ratio,20);	//d
  	if(this.seg[5]) fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 20)*this.aspect_ratio,(this.right_padding + 40)*this.aspect_ratio,20*this.aspect_ratio,100*this.aspect_ratio,20);	//f
  	if(this.seg[4]) fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 20)*this.aspect_ratio,(this.right_padding +160)*this.aspect_ratio,20*this.aspect_ratio,100*this.aspect_ratio,20);	//e
  	if(this.seg[1]) fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 140)*this.aspect_ratio,(this.right_padding + 40)*this.aspect_ratio,20*this.aspect_ratio,100*this.aspect_ratio,20);	//b
  	if(this.seg[2]) fill(0,255,128);else fill(51,51,51,150);
  	rect((this.left_padding + 140)*this.aspect_ratio,(this.right_padding + 160)*this.aspect_ratio,20*this.aspect_ratio,100*this.aspect_ratio,20);	//c
  }
  display_module(bin){
  	this.seg[0] = (bin[0] || bin[1] || bin[2] || !bin[3])&&(bin[0] || !bin[1] || bin[2] || bin[3]);
  	this.seg[1] = (bin[0] || !bin[1] || bin[2] || !bin[3])&&(bin[0] || !bin[1] || !bin[2] || bin[3]);
  	this.seg[2] = bin[0] || bin[1] || !bin[2] || bin[3];
  	this.seg[3] = (bin[0] || !bin[1] || bin[2] || bin[3])&&(bin[0] || !bin[1] || !bin[2] || !bin[3])&&(bin[1] || bin[2] || !bin[3]);
  	this.seg[4] = (!bin[0] && bin[2] && !bin[3]) || (!bin[1] && !bin[2] && !bin[3]);
  	this.seg[5] = (bin[0] || bin[1] || !bin[3])&&(bin[0] || bin[1] || !bin[2])&&(bin[0] || !bin[2] || !bin[3]);
  	this.seg[6] = (bin[0] || bin[1] || bin[2])&&(bin[0] || !bin[1] || !bin[2] || !bin[3]);
  }
}
