export class CreateCategoryRequest {
    public category_name: string;
    constructor(category_name : string){
        this.category_name = category_name;
    }
}