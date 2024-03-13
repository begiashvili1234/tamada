export class TamadaModel 
{
    public position!:number;
    public title!:string;
    public text:string = "";
    public bgMusicLink!:string;

    public isValid():boolean{
        if(this.title && this.text && 
            this.title.length > 2 && this.text.length > 2){
            return true;
        }

        return false;
    }
}