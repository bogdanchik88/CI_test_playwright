import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";


export class MenuPage extends BasePage{

    private readonly menu: Locator
    
    constructor(page: Page){
        super(page)

        this.menu = page.locator('#nav')
    }

    async goto(){
        await this.navigate('/menu')
    }
}