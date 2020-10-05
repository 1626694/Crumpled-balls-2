class Paper extends DustbinClass {
    constructor(x,y,width,height){
        super(x,y,50,50);
        this.image=loadImage("Sprites/paper.png");
    }
    display(){
        this.body.positon.x= mouseX;
        this.body.position.y=mouseY;
        super.display();
    }
    
}