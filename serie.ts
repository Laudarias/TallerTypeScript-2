export class Serie
{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    page: string;
    image: string;

    constructor(id:number, name:string, channel:string, seasons:number, descipcion:string, page:string, image:string)
    {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = descipcion;
        this.page = page;
        this.image = image;
    }
}