import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SliderPage extends BasePage{

    private readonly slider: Locator
    private readonly sliderValue: Locator

    constructor(page: Page){
        super(page)

        this.slider = page.locator('#slider')
        this.sliderValue = page.locator('#sliderValue')
    }

    async goto(){
        await this.navigate('/slider')
    }

    async getValue(){
        return Number(await this.sliderValue.inputValue())
    }

    async moveForward(steps: number = 1){
        await this.slider.focus()

        for(let i: number = 0; i < steps; i++){
            await this.page.keyboard.press('ArrowRight')
        }
    }

    async moveBackward(steps: number = 1){
        await this.slider.focus()

        for(let i: number = 0; i < steps; i++){
            await this.page.keyboard.press('ArrowLeft')
        }
    }
}