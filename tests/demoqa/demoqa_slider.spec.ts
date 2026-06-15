import { expect, test } from '@playwright/test'
import { SliderPage } from '../../pages/demoqa/SliderPage'

test.describe('Тестирование слайдера', () => {
    let sliderPage: SliderPage

    test.beforeEach(async ({page}) => {
        sliderPage = new SliderPage(page)
        await sliderPage.goto()
    })

    test('Сдвиг вправо на 6 шагов', async () => {
        const start: number = await sliderPage.getValue()

        await sliderPage.moveForward(6)

        const end: number = await sliderPage.getValue()

        await expect(end).toBe(start + 6)
    })

    test('Сдвиг влево на 13 шагов', async () => {
        const start: number = await sliderPage.getValue()

        await sliderPage.moveBackward(13)

        const end: number = await sliderPage.getValue()

        await expect(end).toBe(start - 13)
    })

    test('Сдвиг влево на 350 шагов', async () => {
        await sliderPage.moveBackward(350)

        const end: number = await sliderPage.getValue()

        await expect(end).toBe(0)
    })

    test('Сдвиг вправо на 670 шагов', async () => {
        await sliderPage.moveForward(670)

        const end: number = await sliderPage.getValue()

        await expect(end).toBe(100)
    })
})